import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {TextInput, Text, Button} from 'react-native-paper';

import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

const SignUp = () => {
  const [text, setText] = React.useState('');

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.jpeg')} />
        <Text style={styles.text}>Welcome to Mobile Accessories App</Text>
        <Text style={styles.text}>Create a new account</Text>
        <TextInput
          label="Full Name"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
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
        <TextInput
          label="Confirm Password"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <TextInput
          label="Address"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <TextInput
          label="Phone Number"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Sign Up
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
export default SignUp;
