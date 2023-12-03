import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Pressable
} from 'react-native';
import Modal from "react-native-modal";
import { Colors } from '../constants/Colors';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useActions } from '../hooks/useActions';
const SignOut: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const navigation = useNavigation<any>();
    const isFocused = useIsFocused();
    const { logoutUser } = useActions();
    useEffect(() => {
        if (isFocused) {
            setIsVisible(true);
        }
    }, [isFocused])
    const onCancel = () => {
        setIsVisible(false);
        navigation.navigate('Öý', { screen: 'home' });
        navigation.openDrawer();
    }
    const onLogout = () => {
        logoutUser()
    }
    return (
        <View>
            <Modal backdropOpacity={0.1} animationIn='fadeInUp' isVisible={isVisible}>
                <View style={{ backgroundColor: 'white', elevation: 8, borderRadius: 18, paddingVertical: 48, justifyContent: 'space-between', paddingHorizontal: 22 }}>
                    <Text style={{ color: Colors.TextColor, marginBottom: 64, fontSize: 18 }}>Siz hakykatdanam ulgamdan çykmak isleýäňizmi?</Text>
                    <View style={{ justifyContent: 'space-between', paddingHorizontal: 4, flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable onPress={onCancel} style={[styles.button, { backgroundColor: Colors.IconColor }]}>
                            <Text style={styles.text}>
                                Bes et
                            </Text>
                        </Pressable>
                        <Pressable onPress={onLogout} style={[styles.button, { backgroundColor: Colors.TextLinkColor }]}>
                            <Text style={[styles.text, { fontSize: 18 }]}>
                                Ulgamdan çykmak
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
export default SignOut;
const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 16,
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
        elevation: 3,
    }
});
