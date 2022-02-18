import * as React from 'react';

import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Snackbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
const EditCoupon = ({route, navigation}) => {
  const {colors} = useTheme();

  const {id, name, code, amount} = route.params.data;

  const [couponname, setcouponName] = React.useState(name);
  const [couponcode, setcouponCode] = React.useState(code);
  const [couponamount, setcouponAmount] = React.useState(amount);
  const [visible, setVisible] = React.useState(false);
  const [msg, setMsg] = React.useState('');
  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const editCoupon = e => {
    fetch(`http://10.0.2.2:8080/api/coupons/${id}`, {
      method: 'PUT',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: couponname,
        code: couponcode,
        amount: couponamount,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setMsg('Data has been edited successfully');
        onToggleSnackBar();
        navigation.goBack();
      })
      .catch(error => setMsg('There is some error while editing data'));
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <TextInput
            label="Name"
            value={couponname}
            onChangeText={couponname => setcouponName(couponname)}
            style={styles.input}
          />
          <TextInput
            label="Code"
            value={couponcode}
            onChangeText={couponcode => setcouponCode(couponcode)}
            style={styles.input}
          />
          <TextInput
            label="Amount"
            value={couponamount}
            onChangeText={couponamount => setcouponAmount(couponamount)}
            style={styles.input}
          />
          <Button
            style={{backgroundColor: colors.button}}
            mode="contained"
            onPress={e => editCoupon(e)}>
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
export default EditCoupon;
