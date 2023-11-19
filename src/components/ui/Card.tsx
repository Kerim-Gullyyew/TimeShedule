import {StyleSheet, Text, Pressable, GestureResponderEvent} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {Colors} from '../../constants/Colors';
interface CardProps {
  title: string;
  icon: string;
  onPress: null | ((event: GestureResponderEvent) => void) | undefined;
}
const Card: React.FC<CardProps> = ({title, icon, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.body}>
      <MaterialIcons style={styles.icon} name={icon} size={50} />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
export default Card;
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    elevation: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: Colors.TextColor,
  },
  text: {
    fontSize: 12,
    color: Colors.TextColor,
    fontWeight: '600',
  },
});