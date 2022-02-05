import * as React from 'react';
import {View} from 'react-native';
import {List, Avatar, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';
const Profile = () => {
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
            description="Name"
            left={props => (
              <Avatar.Image
                {...props}
                source={require('../assets/user.png')}></Avatar.Image>
            )}></List.Item>
          <List.Item
            title="Name"
            left={props => (
              <List.Icon {...props} icon={require('../assets/profile.png')} />
            )}
            right={props => (
              <>
                <Text {...props} style={{marginTop: 10}}>
                  Name <Icon {...props} name="chevron-right" />
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
                  Email <Icon {...props} name="chevron-right" />
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
                  Phone Number <Icon {...props} name="chevron-right" />
                </Text>
              </>
            )}
          />

          <List.Item
            title="Change Password"
            left={props => (
              <List.Icon {...props} icon={require('../assets/password.png')} />
            )}
            right={props => (
              <>
                <Text {...props} style={{marginTop: 10}}>
                  Change Password <Icon {...props} name="chevron-right" />
                </Text>
              </>
            )}></List.Item>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Profile;
