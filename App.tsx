import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';

import { KeyboardAvoidingProvider } from './components/store/KeyboardAvoidingProvider';
import FormWithKeyboardAvoidingHook from './components/FormWithKeyboardAvoidingHook';
import AnimatedFormWithKeyboardAvoidingHook from './components/AnimatedFormWithKeyboardAvoidingHook';
import NormalViewWithKeyboardAvoidingHook from './components/NormalViewWithKeyboardAvoidingHook';
import ModalWithKeyboardAvoidingHook from './components/ModalWithKeyboardAvoidingHook';
//import FormWithKeyboardAvoidingView from './components/FormWithKeyboardAvoidingView';

export default function App() {
  //return <FormWithKeyboardAvoidingView />;

  const [screen, setScreen] = useState(0);

  return (
    <KeyboardAvoidingProvider padding={24}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.tools}>
          <Button title="AvoidingHook" onPress={() => setScreen(0)} />
          <Button title="WithoutScroll" onPress={() => setScreen(1)} />
          <Button title="Animated" onPress={() => setScreen(2)} />
          <Button title="Modal" onPress={() => setScreen(3)} />
        </View>
        <View style={styles.main}>
          {screen === 0 && <FormWithKeyboardAvoidingHook />}
          {screen === 1 && <NormalViewWithKeyboardAvoidingHook />}
          {screen === 2 && <AnimatedFormWithKeyboardAvoidingHook />}
          {screen === 3 && (
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
