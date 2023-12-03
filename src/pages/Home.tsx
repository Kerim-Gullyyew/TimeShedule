import {View, StyleSheet} from 'react-native';
import React from 'react';
import Card from '../components/ui/Card';
import Profile from '../components/ui/Profile';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useNavigation} from '@react-navigation/native';
const Home: React.FC = () => {
  const {full_name, email} = useTypedSelector(
    (state: any) => state.login.data.user,
  );
  const navigation = useNavigation<any>();
  const onPress = () => {
    navigation.navigate('Menýu', {screen: 'Töleg'});
  };
  const onBenefitPress = () => {
    navigation.navigate('Menýu', {screen: 'Girdeji'});
  }
  const onProfilePress = () => {
    navigation.navigate('Menýu', {screen: 'Profil'});
  }
  return (
    <View style={styles.body}>
      <View style={styles.component}>
        <Profile email={email} full_name={full_name} />
      </View>
      <View style={[styles.component, styles.boxes]}>
        <Card onPress={onPress} icon="payment" title="Töleg" />
        <Card onPress={onBenefitPress} icon="query-stats" title="Girdejiler" />
        <Card
          onPress={onProfilePress}
          icon="person"
          title="Profil"
        />
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    margin: 18,
  },
  component: {
    marginVertical: 20,
  },
  boxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});