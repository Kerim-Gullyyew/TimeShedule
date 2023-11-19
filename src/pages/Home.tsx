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
    navigation.navigate('Menu', {screen: 'Pay'});
  };
  const onBenefitPress = () => {
    navigation.navigate('Menu', {screen: 'Benefit'});
  }
  const onProfilePress = () => {
    navigation.navigate('Menu', {screen: 'Profile'});
  }
  return (
    <View style={styles.body}>
      <View style={styles.component}>
        <Profile email={email} full_name={full_name} />
      </View>
      <View style={[styles.component, styles.boxes]}>
        <Card onPress={onPress} icon="payment" title="Pay" />
        <Card onPress={onBenefitPress} icon="query-stats" title="Benefits" />
        <Card
          onPress={onProfilePress}
          icon="person"
          title="Profile"
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