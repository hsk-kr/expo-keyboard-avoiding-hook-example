import { Text, TextInput, View, StyleSheet } from 'react-native';

export default function FormInput({ num }: { num: number }) {
  return (
    <View>
      <Text>Label {num}</Text>
      <TextInput style={styles.textInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: 200,
    height: 40,
    borderColor: '#acacac',
    borderRadius: 4,
    borderWidth: 1,
  },
});
