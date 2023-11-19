import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import { BarChart } from "react-native-gifted-charts";
import { Colors } from '../constants/Colors';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useIsFocused } from '@react-navigation/native';
import { getSumMoney } from '../utils/calculations';
const Benefits: React.FC = ({ }) => {
    const { data } = useTypedSelector(state => state.shift);
    const [chartData, setChartData] = useState<Array<{ value: number }>>([]);
    const isFocused = useIsFocused();
    const user = useTypedSelector(state => state.login.data);
    useEffect(() => {
        if (isFocused) {
            let chart: { value: number }[] = [];
            data.forEach(element => {
                chart.push(getSumMoney({ element: element, user: user }))
            });
            setChartData(chart)
        }
    }, [isFocused, data, user])
    return (
        <View style={{ backgroundColor: Colors.IconColor, flex: 1, alignItems: 'center' }}>
            <BarChart
                barWidth={22}
                noOfSections={3}
                barBorderRadius={7}
                frontColor="#177AD5"
                yAxisColor="#177AD5"
                color={"#177AD5"}
                xAxisColor={"#177AD5"}
                data={chartData}
                yAxisThickness={0}
                xAxisThickness={0}
            />
        </View>
    )
}
export default Benefits