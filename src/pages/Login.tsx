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
import { ErrorInput } from '../constants/ErrorTexts';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [url, setUrl] = useState<string>('http://');
  const backendUrl2 = useTypedSelector((state: any) => state.constant.data);
  const [error, setError] = useState<string | null>(null);

  const { login } = useActions();

  const { addUrl } = useActions();

  const onSubmit = () => {
    if (username === '' || password === '' || url === '') {
      setError(ErrorInput);
    }else{
      setError(null);
      addUrl(url)
      const json = {
        identifier: username,
        password: password,
      };
      login(json, backendUrl2);
    }
  };
  return (
    <SafeAreaView style={styles.body}>
      <Text style={[styles.text, {color: 'red', fontSize: 14}]}>{error}</Text>
      <Input
        value={url}
        onChangeText={enteredvalue => setUrl(enteredvalue)}
        secure={undefined}
        placeholder="Url"
        keyboardType={undefined}
        width={300}
      />
      <Text style={styles.text}>Login</Text>
      <Input
        value={username}
        onChangeText={enteredvalue => setUsername(enteredvalue)}
        secure={undefined}
        placeholder="Email"
        keyboardType={undefined}
        width={300}
      />
      <Input
        value={password}
        onChangeText={enteredvalue => setPassword(enteredvalue)}
        secure={true}
        placeholder="Parol"
        keyboardType={undefined}
        width={300}
      />
      <Button title="Ulgama girmek" onPress={onSubmit} textSize={18} width={100} />
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
  }
});