import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';
const Privacy: React.FC = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ paddingHorizontal: 14, paddingVertical: 8 }}>
                    <Text style={[styles.text, { fontSize: 18 }]}>Privacy Policy for Time Shedule</Text>
                    <Text style={[styles.text, { fontSize: 16 }]}>Introduction</Text>
                    <Text style={[styles.text, { fontSize: 14 }]}>Welcome to Time Shedule. We are committed to protecting your privacy and ensuring that your personal information is handled safely and responsibly. This Privacy Policy outlines our practices regarding the collection, use, and sharing of your information through the use of our app.</Text>
                    <Text style={[styles.text, { fontSize: 16 }]}>Information We Collect</Text>
                    <Text style={[styles.text, { fontSize: 14, paddingVertical: 4, }]}>Personal Information: This may include your name, email address, and other contact information that you provide when creating an account or using our services.</Text>
                    <Text style={[styles.text, { fontSize: 14, paddingVertical: 4, }]}>Usage Information: We collect information about how you use our app, such as the features you use and the time you spend on the app.</Text>
                    <Text style={[styles.text, { fontSize: 14, paddingVertical: 4, }]}>Device Information: Information about your device, including IP address, operating system, and browser type, may be collected for functionality and security purposes.</Text>
                    <Text style={[styles.text, { fontSize: 16 }]}>How We Use Your Information</Text>
                    <Text style={[styles.text, { fontSize: 14, paddingVertical: 4, }]}>To Provide Services: Your information is used to maintain your account, provide the scheduling services, and ensure the app functions properly.</Text>
                    <Text style={[styles.text, { fontSize: 14, paddingVertical: 4, }]}>For Improvement and Development: We analyze usage patterns to improve our app and develop new features.</Text>
                    <Text style={[styles.text, { fontSize: 14, paddingVertical: 4, }]}>For Communication: We may use your information to communicate with you about updates, service changes, or offers.</Text>
                    <Text style={[styles.text, { fontSize: 16 }]}>Sharing Your Information</Text>
                    <Text style={[styles.text, { fontSize: 14, paddingVertical: 4, }]}>We do not sell your personal information. We may share your information with third-party service providers for purposes such as hosting, analytics, and security. These providers are bound by confidentiality obligations and are limited in their use of your information.</Text>
                    <Text style={[styles.text, { fontSize: 16 }]}>Data Security</Text>
                    <Text style={[styles.text, { fontSize: 14, paddingVertical: 4, }]}>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</Text>
                    <Text style={[styles.text, { fontSize: 16 }]}>Your Rights and Choices</Text>
                    <Text style={[styles.text, { fontSize: 14, paddingVertical: 4, }]}>You may review, update, or delete your account information at any time through the app settings. You also have the right to request a copy of your information or object to our use of your data.</Text>
                    <Text style={[styles.text, { fontSize: 16 }]}>Children's Privacy</Text>
                    <Text style={[styles.text, { fontSize: 14, paddingVertical: 4, }]}>Our app is not intended for children under the age of 13, and we do not knowingly collect personal information from children under this age.</Text>
                    <Text style={[styles.text, { fontSize: 16 }]}>Changes to This Privacy Policy</Text>
                    <Text style={[styles.text, { fontSize: 14, paddingVertical: 4, }]}>We reserve the right to modify this privacy policy at any time. Changes will be posted on this page and are effective immediately. We encourage you to periodically review this policy for the latest information on our privacy practices.</Text>
                    <Text style={[styles.text, { fontSize: 16 }]}>Contact Us</Text>
                    <Text style={[styles.text, { fontSize: 14, paddingVertical: 4, }]}>If you have any questions about this Privacy Policy, please contact us at contact@timeshedule.com.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Privacy;
const styles = StyleSheet.create({
    text: {
        color: Colors.TextColor2,
        fontWeight: '500',
        textAlign: 'justify',
        marginVertical: 12
    }
})