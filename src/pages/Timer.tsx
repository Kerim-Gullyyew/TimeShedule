import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Colors } from '../constants/Colors';
import { useActions } from '../hooks/useActions';
import { getToken, getUserId } from '../utils/getStates';
import { useTypedSelector } from '../hooks/useTypedSelector';
const Timer: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>();
  const [active, setActive] = useState<boolean>(false);
  const backendUrl2 = useTypedSelector((state: any) => state.constant.data);
  const token = getToken();
  const user_id = getUserId();
  const { Shift } = useActions();
  const Start = () => {
    setStartDate(new Date());
    setEndDate(null);
    setActive(true);
  };
  const End = () => {
    if (startDate !== null) {
      let endDate = new Date();
      setEndDate(endDate);
      const diff = endDate.getTime() - startDate.getTime();
      const seconds = diff / 1000;
      let workerHour = new Date(seconds * 1000).toISOString().slice(11, 19);
      let hours = Number(workerHour.slice(0, 2))
      let minutes = Number(workerHour.slice(3, 5))
      if (hours !== 0 || minutes !== 0) {
        const json = {
          data: {
            month_name: startDate.toLocaleString('default', { month: 'short' }),
            worked_hours: hours,
            worked_minutes: minutes,
            users_permissions_user: user_id,
          },
        };
        Shift(json, token, backendUrl2);
      }

    }
    setActive(false);
  };
  return (
    <View style={styles.contianer}>
      <View style={{ flex: 1, width: '90%', rowGap: 10 }}>
        {startDate && (
          <View>
            <Text style={styles.text3}>Başlan wagty</Text>
            <View style={styles.box}>
              <View>
                <Text style={styles.text2}>
                  {startDate.toISOString().slice(0, 10)}
                </Text>
              </View>
              <Text style={styles.text2}>
                {startDate.toISOString().slice(11, 19)}
              </Text>
            </View>
          </View>
        )}
        {endDate && (
          <View>
            <Text style={styles.text3}>Gutaran wagty</Text>
            <View style={styles.box}>
              <View>
                <Text style={styles.text2}>
                  {endDate.toISOString().slice(0, 10)}
                </Text>
              </View>
              <Text style={styles.text2}>
                {endDate.toISOString().slice(11, 19)}
              </Text>
            </View>
          </View>
        )}
      </View>
      {!active ? (
        <Pressable
          onPress={Start}
          style={[styles.circle, { borderColor: Colors.TextColor }]}>
          <Text style={[styles.text, { color: Colors.TextColor }]}>Başla</Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={End}
          style={[styles.circle, { borderColor: Colors.WarningColor }]}>
          <Text style={[styles.text, { color: Colors.WarningColor }]}>Gutar</Text>
        </Pressable>
      )}
    </View>
  );
};
export default Timer;
const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 50,
    alignItems: 'center',
  },
  circle: {
    borderWidth: 4,
    borderRadius: 100,
    width: 180,
    marginBottom: 28,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
    fontWeight: '700',
  },
  text2: {
    fontSize: 20,
    color: Colors.TextColor,
  },
  text3: { color: Colors.TextColor, paddingVertical: 3 },
  box: {
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
