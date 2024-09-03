import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import FormInput from './FormInput';

export default function FormWithKeyboardAvoidingView() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
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
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
