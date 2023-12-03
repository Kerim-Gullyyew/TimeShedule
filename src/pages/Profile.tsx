import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTypedSelector } from '../hooks/useTypedSelector';
const Profile: React.FC = () => {
  const user: any = useTypedSelector((state) => state.login.data);
  const Splited = user.user.full_name.split(' ');
  const ShortName = Splited[0].substring(0, 1) + Splited[1].substring(0, 1);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.body}>
        <View style={styles.header}>
          <View>
            <View style={styles.circle}>
              <Text style={styles.textCircle}>{ShortName}</Text>
            </View>
          </View>
          <View style={styles.second}>
            <Text style={styles.textName}>{user.user.full_name}</Text>
            <Text style={[styles.text, { color: 'white' }]}>{user.user.title}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.text}>Şahsy maglumat: </Text>
          <Text style={styles.text}>{user.user.full_name}</Text>
        </View>
        <View style={styles.detail1}>
          <View style={{ padding: 20 }}>
            <Icon name="phone" size={30} color={Colors.DarkGrayColor} />
          </View>
          <View>
            <Text style={styles.text1}>{user.user.phonenumber}</Text>
            <Text style={styles.text2}>Telefon</Text>
          </View>
        </View>
        <View style={styles.detail1}>
          <View style={{ padding: 20 }}>
            <Icon name="email" size={30} color={Colors.DarkGrayColor} />
          </View>
          <View>
            <Text style={styles.text1}>{user.user.email}</Text>
            <Text style={styles.text2}>E-mail</Text>
          </View>
        </View>
        <View style={styles.detail1}>
          <View style={{ padding: 20 }}>
            <Icon name="location-pin" size={30} color={Colors.DarkGrayColor} />
          </View>
          <View>
            <Text style={styles.text1}>{user.user.address}</Text>
            <Text style={styles.text2}>{user.user.address2}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.text}>Salary</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.detail}>
            <Text style={styles.text1}>${user.user.pay_rate} man / sag</Text>
            <Text style={styles.text2}>Töleg</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: Colors.TextColor,
  },
  second: {
    flex: 1,
    rowGap: 10,
  },
  circle: {
    marginBottom: 10,
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: Colors.DarkGrayColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  textCircle: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
  },
  text: {
    color: Colors.TextColor2,
    fontWeight: '500',
  },
  text1: {
    color: Colors.TextColor2,
    fontWeight: '400',
    fontSize: 16,
  },
  text2: {
    color: Colors.TextColor3,
    fontWeight: '400',
    fontSize: 14,
  },
  text3: {
    color: Colors.TextLinkColor,
    fontWeight: '600',
  },
  details: {
    marginLeft: 50,
  },
  detail: {
    marginVertical: 18,
  },
  detail1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    padding: 8,
    paddingHorizontal: 14,
    backgroundColor: '#E8EAE6',
  },
});