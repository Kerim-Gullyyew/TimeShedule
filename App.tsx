import React from 'react';
import {View} from 'react-native';
import Routes from './src/navigation/Routes';
import Login from './src/pages/Login';

import {useTypedSelector} from './src/hooks/useTypedSelector';
interface AppProps {
  jwt: string | undefined;
}

const App: React.FC<AppProps> = () => {
  const jwt = useTypedSelector((state: any) => state.login.data.jwt);



  return <View style={{flex: 1}}>{jwt ? <Routes /> : <Login />}</View>;
};

export default App;
