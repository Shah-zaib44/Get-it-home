import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';

const ForgotPassword = ({navigation}) => {
  const {colors} = useTheme();
  const [email, setEmail] = React.useState('shahzafarzaib@gmail.com');
  const forgotPassword = e => {
    let user = {
      email: email,
    };
    fetch('http://10.0.2.2:8080/api/forgotpassword', {
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
        navigation.navigate('VerifyCode');
      });
  };
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'space-evenly',
        }}>
        <View>
          <TextInput
            label="Email"
            value={email}
            onChangeText={email => setEmail(email)}
            style={styles.input}
          />
          <Button
            style={{backgroundColor: colors.button}}
            mode="contained"
            onPress={e => forgotPassword(e)}>
            Request Code
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
  },
});
export default ForgotPassword;
