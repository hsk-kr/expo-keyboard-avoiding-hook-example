import { createContext, ReactNode, useEffect, useRef, useState } from 'react';
import { Animated, Keyboard, TextInput } from 'react-native';

interface KeyboardAvoidingContextType {
  translateY: number;
  animatedTranslateY: Animated.Value;
}

export const KeyboardAvoidingContext =
  createContext<KeyboardAvoidingContextType>({} as KeyboardAvoidingContextType);

export const KeyboardAvoidingProvider = ({
  children,
  padding,
  duration = 250,
}: {
  children: ReactNode;
  padding?: number;
  duration?: number;
}) => {
  const [translateY, setTranslateY] = useState(0);
  const animatedTranslateY = useRef<Animated.Value>(
    new Animated.Value(0)
  ).current;

  useEffect(() => {
    const keyboardUpListener = Keyboard.addListener('keyboardWillShow', (e) => {
      const { State: TextInputState } = TextInput;
      const focusedInput = TextInputState.currentlyFocusedInput();

      focusedInput?.measure((_x, _y, _width, height, _pageX, pageY) => {
        const keyboardStartY = e.endCoordinates.screenY;
        const bottomY = height + pageY;
        const translateY =
          bottomY <= keyboardStartY
            ? 0
            : -(bottomY - keyboardStartY + (padding ?? 0));

        setTranslateY(translateY);
      });
    });

    const keyboardDownListener = Keyboard.addListener(
      'keyboardWillHide',
      () => {
        setTranslateY(0);
      }
    );

    return () => {
      keyboardUpListener.remove();
      keyboardDownListener.remove();
    };
  }, []);

  useEffect(() => {
    console.log({ translateY });
    Animated.timing(animatedTranslateY, {
      toValue: translateY,
      duration: duration ?? 0,
      useNativeDriver: true,
    }).start();
  }, [translateY]);

  const value = { translateY, animatedTranslateY };

  return (
    <KeyboardAvoidingContext.Provider value={value}>
      {children}
    </KeyboardAvoidingContext.Provider>
  );
};
