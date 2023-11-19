import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardTypeOptions,
} from 'react-native';
import {Colors} from '../../constants/Colors';
interface InputProps {
  value: string;
  onChangeText: ((text: string) => void) | undefined;
  secure: boolean | undefined;
  placeholder: string | undefined;
  keyboardType: KeyboardTypeOptions | undefined;
  width: number | null | undefined;
}
const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  secure,
  placeholder,
  keyboardType,
  width,
}) => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secure}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={Colors.TextColor}
        style={[styles.input, {width: width}]}
      />
    </View>
  );
};
export default Input;
const styles = StyleSheet.create({
  input: {
    width: 200,
    borderColor: Colors.TextLinkColor,
    color: Colors.TextColor,
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '500',
    maxWidth: '95%',
    marginVertical: 14,
    height: 50,
    borderBottomWidth: 2,
  },
});