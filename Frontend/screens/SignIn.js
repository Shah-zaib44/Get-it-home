import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {TextInput, Button, Text, Snackbar} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
const SignIn = ({navigation}) => {
  const {colors} = useTheme();
  const [userRole, setuserRole] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [msg, setMsg] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  let user = {
    email: email,
    password: password,
  };
  const handleLogin = e => {
    fetch('http://10.0.2.2:8080/api/login', {
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
        if (response.token) {
          AsyncStorage.setItem('user', JSON.stringify(response));
          console.log(userRole);
          if (response.user.role === 'User') {
            navigation.navigate('BottomTabNavigation');
          } else {
            navigation.navigate('BottomTabNavigationAdmin');
          }
        } else if (response.error) {
          onDismissSnackBar();
          setMsg(response.error);
          onToggleSnackBar();
        }
      });
  };
  const handleNavigateToRegister = e => {
    navigation.navigate('SignUp');
  };
  const handleNavigation = e => {
    navigation.navigate('ForgotPassword');
  };
  const getData = async () => {
    const user = await AsyncStorage.getItem('user');

    if (user != null) {
      setuserRole(JSON.parse(user).user.role);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'space-evenly',
        }}>
        <View>
          <Image style={styles.logo} source={require('../assets/logo.jpeg')} />
          <Text style={styles.text}>Welcome to Mobile Accessories App</Text>
          <Text style={styles.text}>Sign In to continue</Text>
          <TextInput
            label="Email"
            value={email}
            onChangeText={email => setEmail(email)}
            style={styles.input}
          />
          <TextInput
            secureTextEntry
            label="Password"
            value={password}
            onChangeText={password => setPassword(password)}
            style={styles.input}
          />
          <Text
            style={{
              color: colors.text,

              alignSelf: 'center',
            }}
            onPress={e => handleNavigation(e)}>
            Forgot Password?
          </Text>
          <Button
            style={{backgroundColor: colors.button}}
            mode="contained"
            onPress={e => handleLogin(e)}>
            Sign In
          </Button>

          <Text
            style={{
              alignSelf: 'center',
            }}>
            Don't have an account?{' '}
            <Text
              style={{
                color: colors.text,
              }}
              onPress={e => handleNavigateToRegister(e)}>
              {' '}
              Register
            </Text>
          </Text>
          <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
            {msg}
          </Snackbar>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
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
export default SignIn;
