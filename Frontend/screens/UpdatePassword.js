import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Snackbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthHeader from '../services/auth-header';
import AsyncStorage from '@react-native-async-storage/async-storage';
const UpdatePassword = ({navigation}) => {
  const [newpassword, setnewpassword] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const verifyCode = async e => {
    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    headers = {...headers, ...(await AuthHeader())};
    fetch(`http://10.0.2.2:8080/api/updatepassword`, {
      method: 'PUT',
      mode: 'no-cors',
      headers,
      body: JSON.stringify({
        newPassword: newpassword,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.token) {
          AsyncStorage.setItem('user', JSON.stringify(response));
          navigation.navigate('SignIn');
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
            label="New Password"
            value={newpassword}
            onChangeText={newpassword => setnewpassword(newpassword)}
            style={styles.input}
          />
          <Button mode="contained" onPress={e => verifyCode(e)}>
            Submit
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
export default UpdatePassword;
