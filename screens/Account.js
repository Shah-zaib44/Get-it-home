import * as React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Appbar, List} from 'react-native-paper';

const Account = () => {
  return (
    <>
      <Appbar.Header>
        <Icon
          size={20}
          color={'white'}
          name="chevron-left"
          onPress={() => {}}
        />
        <Appbar.Content title="Account" />
      </Appbar.Header>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
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
    </>
  );
};

export default Account;
