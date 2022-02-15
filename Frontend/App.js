import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import NavigationScreens from './screens/Navigation';
import FlashScreen from './screens/FlashScreen';
const App = () => {
  const [first, setfirst] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setfirst(false);
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1}}>
      {first ? <FlashScreen /> : <NavigationScreens />}
    </View>
  );
};

export default App;
