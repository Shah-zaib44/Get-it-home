import * as React from 'react';
import {View} from 'react-native';
import {List, Avatar, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Profile = () => {
  const [user, setUser] = React.useState([]);

  // AsyncStorage.setItem(
  //   'user',
  //   JSON.stringify({
  //     fullName: 'Shahzaib',
  //     profileImage:
  //       'file:///data/user/0/com.myapp/cache/rn_image_picker_lib_temp_e808c36e-2b52-4ec9-b816-52bdcdeb710c.png',

  //     email: 'shahzafarzaib@gmail.com',
  //     phoneNumber: '03472801994',
  //     address: 'R 19 block 10 FB Area',
  //   }),
  // );
  const getData = async () => {
    const user = await AsyncStorage.getItem('user');

    if (user != null) {
      setUser(JSON.parse(user).user);
    }
  };
  console.log();
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View>
          <List.Item
            title="Name"
            left={props => (
              <List.Icon {...props} icon={require('../assets/profile.png')} />
            )}
            right={props => (
              <>
                <Text {...props} style={{marginTop: 10}}>
                  {user.fullName}
                </Text>
              </>
            )}></List.Item>

          <List.Item
            title="Email"
            left={props => (
              <List.Icon {...props} icon={require('../assets/email.png')} />
            )}
            right={props => (
              <>
                <Text {...props} style={{marginTop: 10}}>
                  {user.email}
                </Text>
              </>
            )}></List.Item>

          <List.Item
            title="Phone Number"
            left={props => (
              <List.Icon {...props} icon={require('../assets/phone.png')} />
            )}
            right={props => (
              <>
                <Text {...props} style={{marginTop: 10}}>
                  {user.phoneNumber}
                </Text>
              </>
            )}
          />

          <List.Item
            title="Address"
            left={props => (
              <List.Icon {...props} icon={require('../assets/address.png')} />
            )}
            right={props => (
              <>
                <Text {...props} style={{marginTop: 10}}>
                  {user.address}
                </Text>
              </>
            )}></List.Item>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Profile;
