import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';

import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

const SignIn = () => {
  const [text, setText] = React.useState('');

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.jpeg')} />
        <Text style={styles.text}>Welcome to Mobile Accessories App</Text>
        <Text style={styles.text}>Sign In to continue</Text>
        <TextInput
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <TextInput
          label="Password"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <Text style={styles.text}>Forgot Password?</Text>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Sign In
        </Button>
        <Text style={styles.text}>Already have an account? Sign In</Text>

        {/* size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={this._signIn}
  disabled={this.state.isSigninInProgress} */}
        <GoogleSigninButton
          style={styles.text}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}></GoogleSigninButton>
        <Text style={styles.text}>Don't have an account? Register</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
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
export default SignIn;
