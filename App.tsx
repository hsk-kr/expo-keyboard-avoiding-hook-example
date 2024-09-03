import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import FormWithKeyboardAvoidingView from './components/FormWithKeyboardAvoidingView';
import { KeyboardAvoidingProvider } from './components/store/KeyboardAvoidingProvider';
import FormWithKeyboardAvoidingHook from './components/FormWithKeyboardAvoidingHook';
import AnimatedFormWithKeyboardAvoidingHook from './components/AnimatedFormWithKeyboardAvoidingHook';
import NormalViewWithKeyboardAvoidingHook from './components/NormalViewWithKeyboardAvoidingHook';
import ModalWithKeyboardAvoidingHook from './components/ModalWithKeyboardAvoidingHook';
import { useState } from 'react';

export default function App() {
  const [screen, setScreen] = useState(0);

  return (
    <KeyboardAvoidingProvider padding={24}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.tools}>
          <Button title="AvoidingView" onPress={() => setScreen(0)} />
          <Button title="AvoidingHook" onPress={() => setScreen(1)} />
          <Button title="WithoutScroll" onPress={() => setScreen(2)} />
          <Button title="Animated" onPress={() => setScreen(3)} />
          <Button title="Modal" onPress={() => setScreen(4)} />
        </View>
        <View style={styles.main}>
          {screen === 0 && <FormWithKeyboardAvoidingView />}
          {screen === 1 && <FormWithKeyboardAvoidingHook />}
          {screen === 2 && <NormalViewWithKeyboardAvoidingHook />}
          {screen === 3 && <AnimatedFormWithKeyboardAvoidingHook />}
          {screen === 4 && (
            <ModalWithKeyboardAvoidingHook onClose={() => setScreen(0)} />
          )}
        </View>
      </SafeAreaView>
    </KeyboardAvoidingProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tools: {
    padding: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  main: {
    flex: 1,
    overflow: 'hidden',
  },
});
