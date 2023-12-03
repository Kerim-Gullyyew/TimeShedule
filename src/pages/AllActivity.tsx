import { FlatList, View } from 'react-native';
import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Slide from '../components/ui/Slide';
import { moneyCalc, monthCalc, timeCalc } from '../utils/calculations';
import { useActions } from '../hooks/useActions';
import { getToken, getUserId } from '../utils/getStates';
const AllActivity: React.FC = () => {
    const token = getToken();
    const id = getUserId();
    const { GetShift } = useActions();
    const backendUrl2 = useTypedSelector((state: any) => state.constant.data);
    useEffect(() => {
        GetShift(id, token, backendUrl2);
    }, [id, token]);
    const { data } = useTypedSelector(state => state.shift);
    const user = useTypedSelector(state => state.login);
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                numColumns={2}
                data={data}
                key={2}
                keyExtractor={(item: any) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <Slide cal={monthCalc({ item, user })} money={moneyCalc({ item, user })} time={timeCalc({ item, user })} />
                    );
                }}
            />
        </View>
    );
};
export default AllActivity;