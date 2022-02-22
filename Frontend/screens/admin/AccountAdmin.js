import * as React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Appbar, List} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountAdmin = ({navigation}) => {
  async function removeItemValue(key) {
    try {
      await AsyncStorage.removeItem(key);

      return true;
    } catch (exception) {
      return false;
    }
  }

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View>
          <List.Item
            onPress={() => {
              navigation.navigate('ProfileAdmin');
            }}
            title="Profile"
            left={props => (
              <List.Icon
                {...props}
                icon={require('../../assets/profile.png')}
              />
            )}
          />

          <List.Item
            onPress={() => {
              removeItemValue('user');
              navigation.navigate('SignIn');
            }}
            title="Logout"
            left={props => (
              <List.Icon {...props} icon={require('../../assets/logout.png')} />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default AccountAdmin;
