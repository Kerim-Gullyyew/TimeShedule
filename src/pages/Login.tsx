import React, { useState } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import { Colors } from '../constants/Colors';
import Input from '../components/form/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/form/Button';
import { useActions } from '../hooks/useActions';
const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useActions();
  const onSubmit = () => {
    const json = {
      identifier: username,
      password: password,
    };
    login(json);
  };
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.text}>Login</Text>
      <Input
        value={username}
        onChangeText={enteredvalue => setUsername(enteredvalue)}
        secure={undefined}
        placeholder="Username"
        keyboardType={undefined}
        width={300}
      />
      <Input
        value={password}
        onChangeText={enteredvalue => setPassword(enteredvalue)}
        secure={true}
        placeholder="Password"
        keyboardType={undefined}
        width={300}
      />
      <Button title="Login" onPress={onSubmit} textSize={18} width={100} />
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.TextColor,
    fontSize: 24,
    paddingVertical: 14,
    fontWeight: '600',
  },
});