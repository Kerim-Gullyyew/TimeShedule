import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { Colors } from '../../constants/Colors';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CalculateGrossPay, getSumMoney } from '../../utils/calculations';
import { useIsFocused } from "@react-navigation/native";
interface ChartProps {
  month: string | undefined | null;
  day: string | undefined | null;
}
const Chart: React.FC<ChartProps> = ({ month, day }) => {
  const isFocused = useIsFocused();
  const { data } = useTypedSelector(state => state.shift);
  const startIndex = Math.max(data.length - 4, 0);
  const user = useTypedSelector(state => state.login.data);
  const [grossPay, setGrossPay] = useState<Number | undefined>();
  const [grossPay2, setGrossPay2] = useState<Number | undefined>();
  const [chartData, setChartData] = useState<Array<{ value: number }>>([]);
  useEffect(() => {
    if (isFocused) {
      setGrossPay(CalculateGrossPay({ data: data, user: user }));
      setGrossPay2(CalculateGrossPay({ data: data.slice(startIndex), user: user }));

      let chart: { value: number }[] = [];
      data.slice(startIndex).forEach(element => {
        chart.push(getSumMoney({ element: element, user: user }))
      });

      setChartData(chart)
    }
  }, [isFocused, data, user])
  return (
    <View>
      <View
        style={{
          paddingVertical: 10,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: Colors.TextColor,
            fontSize: 18,
            fontWeight: '500',
          }}>
          {month} {'  '} {day}
        </Text>
        <Text
          style={{
            color: Colors.TextColor3,
            fontSize: 16,
            fontWeight: '500',
            paddingBottom: 20,
          }}>
          ${grossPay && grossPay.toFixed(2)} Gross Pay
        </Text>
        <PieChart
          strokeColor="white"
          strokeWidth={4}
          donut
          data={chartData}
          innerCircleColor={Colors.DarkGrayColor}
          innerCircleBorderWidth={4}
          innerCircleBorderColor={'white'}
          showValuesAsLabels={true}
          showText
          textColor="white"
          textSize={18}
          centerLabelComponent={() => {
            return (
              <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 24 }}>{grossPay2 && grossPay2.toFixed(1)}</Text>
                <Text style={{ color: 'white', fontSize: 18 }}>Total</Text>
              </View>
            );
          }}
        />
        <View
          style={{
            width: '90%',
            flexDirection: 'column',
            marginTop: 5,
          }}>
        </View>
      </View>
    </View>
  );
};
export default Chart;
