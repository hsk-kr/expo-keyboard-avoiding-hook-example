import { StyleSheet, Modal, View, Button } from 'react-native';
import AnimatedFormWithKeyboardAvoidingHook from './AnimatedFormWithKeyboardAvoidingHook';

export default function ModalWithKeyboardAvoidingHook({
  onClose,
}: {
  onClose: VoidFunction;
}) {
  return (
    <Modal>
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={{ flex: 1, padding: 16, overflow: 'hidden' }}>
            <AnimatedFormWithKeyboardAvoidingHook />
          </View>
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
  },

  footer: {
    height: 40,
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
