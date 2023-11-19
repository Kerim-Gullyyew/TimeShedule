import React from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  GestureResponderEvent,
} from 'react-native';
import {Colors} from '../../constants/Colors';
interface ButtonProps {
  width: number | undefined;
  textSize: number | undefined;
  onPress: null | ((event: GestureResponderEvent) => void) | undefined;
  title: string | undefined;
}
const Button: React.FC<ButtonProps> = ({width, textSize, title, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{color: 'white'}}
      style={[styles.button, {width: width}]}>
      <Text style={[styles.text, {fontSize: textSize}]}>{title}</Text>
    </Pressable>
  );
};
export default Button;
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.TextLinkColor,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    elevation: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
  },
});
