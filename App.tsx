import { StyleSheet } from 'react-native';
import FormWithKeyboardAvoidingView from './components/FormWithKeyboardAvoidingView';
import { KeyboardAvoidingProvider } from './components/store/KeyboardAvoidingProvider';
import FormWithKeyboardAvoidingHook from './components/FormWithKeyboardAvoidingHook';
import AnimatedFormWithKeyboardAvoidingHook from './components/AnimatedFormWithKeyboardAvoidingHook';
import NormalViewWithKeyboardAvoidingHook from './components/NormalViewWithKeyboardAvoidingHook';
import ModalWithKeyboardAvoidingHook from './components/ModalWithKeyboardAvoidingHook';

export default function App() {
  return (
    <KeyboardAvoidingProvider padding={24}>
      {/*<AnimatedFormWithKeyboardAvoidingHook />*/}
      {/*<FormWithKeyboardAvoidingHook />*/}
      <NormalViewWithKeyboardAvoidingHook />
      {/*       <FormWithKeyboardAvoidingView /> */}
      <ModalWithKeyboardAvoidingHook />
    </KeyboardAvoidingProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
