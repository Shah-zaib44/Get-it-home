import * as React from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {TextInput, Text, Button, List, Snackbar} from 'react-native-paper';
import {roles} from '../data';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const SignUp = ({navigation}) => {
  const {colors} = useTheme();
  const [fullName, setfullName] = React.useState('');
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [address, setaddress] = React.useState('');
  const [phoneNumber, setphoneNumber] = React.useState('');
  const [role, setRole] = React.useState('Select Role');
  const [expandedRole, setExpandedRole] = React.useState(false);
  const handlePressRole = () => setExpandedRole(!expandedRole);
  const [visible, setVisible] = React.useState(false);
  const [msg, setMsg] = React.useState('');
  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const [profileImage, setprofileImage] = React.useState('');
  const chooseImage = e => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.assets[0].uri) {
        setprofileImage(response.assets[0].uri);
      }
    });
  };
  let user = {
    fullName: fullName,
    profileImage: profileImage,
    email: email,
    password: password,
    address: address,
    phoneNumber: phoneNumber,
    role: role,
  };
  const handleSignup = async e => {
    fetch('http://10.0.2.2:8080/api/register', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.token) {
          AsyncStorage.setItem('user', JSON.stringify(response));
          navigation.navigate('BottomTabNavigation');
        } else if (response.error) {
          setMsg(response.error);
          onToggleSnackBar();
        }
      });
  };
  const handleNavigateToSignIn = e => {
    navigation.navigate('SignIn');
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Image
              style={styles.logo}
              source={require('../assets/logo.jpeg')}
            />
            <Text style={styles.text}>Welcome to Mobile Accessories App</Text>
            <Text style={styles.text}>Create a new account</Text>
            <TextInput
              label="Full Name"
              value={fullName}
              onChangeText={fullName => setfullName(fullName)}
              style={styles.input}
            />
            {profileImage !== '' && (
              <Image
                source={{uri: profileImage}}
                style={{margin: 5, width: 100, height: 100}}
              />
            )}
            <Button
              style={{backgroundColor: colors.button}}
              mode="contained"
              onPress={e => chooseImage(e)}>
              Upload Image
            </Button>
            <TextInput
              label="Email"
              value={email}
              onChangeText={email => setemail(email)}
              style={styles.input}
            />
            <TextInput
              secureTextEntry
              label="Password"
              value={password}
              onChangeText={password => setpassword(password)}
              style={styles.input}
            />

            <TextInput
              label="Address"
              value={address}
              onChangeText={address => setaddress(address)}
              style={styles.input}
            />
            <TextInput
              label="Phone Number"
              value={phoneNumber}
              onChangeText={phoneNumber => setphoneNumber(phoneNumber)}
              style={styles.input}
            />
            <List.Section title="Role">
              <List.Accordion
                style={styles.input}
                title={role}
                expanded={expandedRole}
                onPress={handlePressRole}>
                {roles.map((role, index) => {
                  return (
                    <List.Item
                      onPress={e => {
                        setRole(role.title);
                        handlePressRole();
                      }}
                      key={index}
                      title={role.title}
                    />
                  );
                })}
              </List.Accordion>
            </List.Section>
            <Button
              style={{backgroundColor: colors.button}}
              mode="contained"
              onPress={e => handleSignup(e)}>
              Sign Up
            </Button>
            <Text style={styles.text}>
              Already have an account?{' '}
              <Text
                style={{
                  color: colors.text,
                }}
                onPress={e => handleNavigateToSignIn(e)}>
                Sign In
              </Text>
            </Text>

            <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
              {msg}
            </Snackbar>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'white',
  },
  logo: {
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
});
export default SignUp;
