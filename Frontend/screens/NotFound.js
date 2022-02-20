import * as React from 'react';

import {Image, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
const NotFound = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <Image
          source={require('../assets/NotFound.png')}
          style={{
            width: 200,
            height: 200,

            alignSelf: 'center',
          }}
        />

        <Text
          style={{
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          No items in your cart
        </Text>
        <Button
          style={{backgroundColor: colors.button}}
          mode="contained"
          onPress={() => {
            navigation.navigate('Home');
          }}>
          Continue Shopping
        </Button>
      </SafeAreaView>
    </>
  );
};

export default NotFound;
