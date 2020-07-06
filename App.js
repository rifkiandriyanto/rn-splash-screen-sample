import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Main from './src/main';
import {View} from 'react-native';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View>
      <Main />
    </View>
  );
}

export default App;
