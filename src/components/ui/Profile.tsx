import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '../../constants/Colors';
interface ProfileProps {
  email: string | undefined;
  full_name: string;
}
const Profile: React.FC<ProfileProps> = ({email, full_name}) => {
  const Splited = full_name.split(' ');
  const ShortName = Splited[0].substring(0, 1) + Splited[1].substring(0, 1);
  return (
    <View style={styles.body}>
      <View>
        <View style={styles.circle}>
          <Text style={styles.textCircle}>{ShortName}</Text>
        </View>
      </View>
      <View style={styles.second}>
        <Text style={styles.textName}>{full_name}</Text>
        <Text style={styles.text}>{email}</Text>
      </View>
    </View>
  );
};
export default Profile;
const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: Colors.TextColor,
  },
  textCircle: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
  },
  textName: {
    color: Colors.TextColor,
    fontSize: 24,
    fontWeight: '600',
  },
  second: {
    marginHorizontal: 18,
    flex: 1,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: Colors.DarkGrayColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
