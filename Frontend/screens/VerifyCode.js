import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Snackbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
const VerifyCode = ({navigation}) => {
  const {colors} = useTheme();
  const [resettoken, setresettoken] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const verifyCode = e => {
    fetch(`http://10.0.2.2:8080/api/resetpassword/${resettoken}`, {
      method: 'PUT',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        resettoken: resettoken,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response.token);
        if (response.token) {
          AsyncStorage.setItem('user', JSON.stringify(response));
          navigation.navigate('UpdatePassword');
        } else if (response.error) {
          onDismissSnackBar();
          setMsg(response.error);
          onToggleSnackBar();
        }
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
            label="Reset Token"
            value={resettoken}
            onChangeText={resettoken => setresettoken(resettoken)}
            style={styles.input}
          />
          <Button
            style={{backgroundColor: colors.button}}
            mode="contained"
            onPress={e => verifyCode(e)}>
            Submit Code
          </Button>
          <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
            {msg}
          </Snackbar>
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
export default VerifyCode;
