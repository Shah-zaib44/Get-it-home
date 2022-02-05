import * as React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Appbar, List} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
const Account = () => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View>
          <List.Item
            title="Profile"
            left={props => (
              <List.Icon {...props} icon={require('../assets/profile.png')} />
            )}
          />

          <List.Item
            title="Order"
            left={props => (
              <List.Icon {...props} icon={require('../assets/order.png')} />
            )}
          />

          <List.Item
            title="Address"
            left={props => (
              <List.Icon {...props} icon={require('../assets/address.png')} />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Account;
