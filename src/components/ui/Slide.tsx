import * as React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Colors } from '../../constants/Colors';
interface SlideProps {
  money: number;
  time: string;
  cal: string;
}
const Slide: React.FC<SlideProps> = ({ money, time, cal }) => {
  return (
    <View style={styles.card1}>
      <View>
        <Text style={styles.text1}>{money}</Text>
        <Text style={styles.text1}>{time}</Text>
      </View>
      <View>
        <Text style={styles.text1}>{cal}</Text>
      </View>
    </View>
  );
};
export default Slide;
const styles = StyleSheet.create({
  text1: {
    color: Colors.TextColor3,
    fontSize: 14,
    paddingVertical: 4,
    fontWeight: '500',
  },
  card1: {
    width: 170,
    marginVertical: 10,
    marginRight: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 10,
    alignSelf: 'center',
    paddingHorizontal: 14,
  },
});
