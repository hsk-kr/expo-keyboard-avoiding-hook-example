import {
  StyleSheet,
  Modal,
  View,
  Button,
  Animated,
  ScrollView,
} from 'react-native';
import FormInput from './FormInput';
import useKeyboardAvoiding from '../hooks/useKeyboardAvoiding';
import { useRef } from 'react';

export default function ModalWithKeyboardAvoidingHook({
  onClose,
}: {
  onClose: VoidFunction;
}) {
  const view = useRef<ScrollView>(null);
  const { animatedTranslateY } = useKeyboardAvoiding();

  return (
    <Modal>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Animated.ScrollView
            ref={view}
            style={{
              flex: 1,
              transform: [{ translateY: animatedTranslateY }],
            }}
          >
            <FormInput num={1} />
            <FormInput num={2} />
            <FormInput num={3} />
            <FormInput num={4} />
            <FormInput num={5} />
            <FormInput num={6} />
            <FormInput num={7} />
            <FormInput num={8} />
            <FormInput num={9} />
            <FormInput num={10} />
            <FormInput num={11} />
            <FormInput num={12} />
            <FormInput num={13} />
            <FormInput num={14} />
            <FormInput num={15} />
          </Animated.ScrollView>
          <View style={styles.footer}>
            <Button title="close" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 300,
    height: 450,
    borderRadius: 4,
    borderWidth: 1,
    overflow: 'hidden',
  },

  footer: {
    height: 40,
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
