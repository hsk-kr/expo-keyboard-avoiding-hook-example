import { useContext } from 'react';
import { KeyboardAvoidingContext } from '../components/store/KeyboardAvoidingProvider';

export default function useKeyboardAvoiding() {
  return useContext(KeyboardAvoidingContext);
}
