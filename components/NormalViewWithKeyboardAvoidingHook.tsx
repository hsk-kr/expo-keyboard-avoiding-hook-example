import { SafeAreaView, View, StyleSheet } from 'react-native';
import FormInput from './FormInput';
import useKeyboardAvoiding from '../hooks/useKeyboardAvoiding';

export default function NormalViewWithKeyboardAvoidingHook() {
  const { translateY } = useKeyboardAvoiding();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          transform: [{ translateY }],
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
