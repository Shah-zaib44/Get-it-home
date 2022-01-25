import * as React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {List, Appbar} from 'react-native-paper';

const Category = () => {
  return (
    <>
      <Appbar.Header>
        <Icon
          size={20}
          color={'white'}
          name="chevron-left"
          onPress={() => {}}
        />
        <Appbar.Content title="Category" />
      </Appbar.Header>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'space-evenly',
        }}>
        <List.Item
          title="Chargers"
          left={props => (
            <List.Icon {...props} icon={require('../assets/charger.png')} />
          )}
        />

        <List.Item
          title="Headphones"
          left={props => (
            <List.Icon {...props} icon={require('../assets/headphone.png')} />
          )}
        />

        <List.Item
          title="Bluetooth"
          left={props => (
            <List.Icon {...props} icon={require('../assets/bluetooth.png')} />
          )}
        />

        <List.Item
          title="Protectors"
          left={props => (
            <List.Icon {...props} icon={require('../assets/protectors.png')} />
          )}
        />

        <List.Item
          title="Pouches"
          left={props => (
            <List.Icon {...props} icon={require('../assets/pouches.png')} />
          )}
        />

        <List.Item
          title="Handfree"
          left={props => (
            <List.Icon {...props} icon={require('../assets/handfree.png')} />
          )}
        />

        <List.Item
          title="Power Banks"
          left={props => (
            <List.Icon {...props} icon={require('../assets/powerbank.png')} />
          )}
        />
      </View>
    </>
  );
};

export default Category;
