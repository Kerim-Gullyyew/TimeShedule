import React, { useEffect } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Chart from '../components/ui/Chart';
import { Colors } from '../constants/Colors';
import Slide from '../components/ui/Slide';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getToken, getUserId } from '../utils/getStates';
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { moneyCalc, monthCalc, timeCalc } from '../utils/calculations';
import { Pressable } from 'react-native';
interface PayProps { }
const Pay: React.FC<PayProps> = ({ }) => {
  const month = new Date().toLocaleString('default', { month: 'long' });
  const day = new Date().toLocaleDateString('default', { weekday: 'long' });
  const token = getToken();
  const id = getUserId();
  const { data } = useTypedSelector(state => state.shift);
  const startIndex = Math.max(data.length - 4, 0);
  const user = useTypedSelector(state => state.login);
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();
  const { GetShift } = useActions();
  useEffect(() => {
    if (isFocused) {
      GetShift(id, token);
    }
  }, [id, token, isFocused]);
  return (
    <ScrollView style={styles.body}>
      <Chart month={month} day={day} />
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.text}>Next Regular Pay</Text>
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={data.slice(startIndex)}
              keyExtractor={(item: any) => item.id}
              horizontal
              bounces={false}
              decelerationRate={0}
              renderToHardwareTextureAndroid
              contentContainerStyle={{ alignItems: 'center' }}
              snapToInterval={100}
              snapToAlignment="start"
              scrollEventThrottle={16}
              renderItem={({ item, index }) => {
                return (
                  <Slide cal={monthCalc({ item, user })} money={moneyCalc({ item, user })} time={timeCalc({ item, user })} />
                );
              }}
            />
          </View>
          <Pressable onPress={() => navigation.navigate('Menu', { screen: 'Allactivity' })}>
            <Text style={styles.text2}>View All</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
export default Pay;
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    padding: 14,
  },
  section: {
    paddingVertical: 14,
  },
  text: {
    color: Colors.DarkGrayColor,
    fontSize: 14,
    paddingVertical: 14,
    fontWeight: '600',
  },
  text1: {
    color: Colors.TextColor3,
    fontSize: 14,
    paddingVertical: 14,
    fontWeight: '500',
  },
  text2: {
    color: Colors.TextLinkColor,
    fontSize: 14,
    paddingLeft: 10,
    paddingVertical: 14,
    fontWeight: '500',
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 10,
    alignSelf: 'center',
    paddingHorizontal: 14,
  },
  card1: {
    width: 200,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 10,
    alignSelf: 'center',
    paddingHorizontal: 14,
  },
});
