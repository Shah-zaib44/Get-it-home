import * as React from 'react';

import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Snackbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
const AddCoupon = () => {
  const [name, setName] = React.useState('');
  const [code, setCode] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [msg, setMsg] = React.useState('');
  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const addCoupon = e => {
    fetch('http://10.0.2.2:8080/api/coupons', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        code: code,
        amount: amount,
      }),
    })
      .then(response => response.json())
      .then(response => {
        setMsg('Data has been submitted successfully');
        onToggleSnackBar();
      })
      .catch(error => setMsg('There is some error while submitting data'));
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <TextInput
            label="Name"
            value={name}
            onChangeText={name => setName(name)}
            style={styles.input}
          />
          <TextInput
            label="Code"
            value={code}
            onChangeText={code => setCode(code)}
            style={styles.input}
          />
          <TextInput
            label="Amount"
            value={amount}
            onChangeText={amount => setAmount(amount)}
            style={styles.input}
          />
          <Button mode="contained" onPress={e => addCoupon(e)}>
            Apply
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
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  input: {
    backgroundColor: 'white',
  },
});
export default AddCoupon;
