import * as React from 'react';

import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const AddCoupon = () => {
  const [text, setText] = React.useState('');

  return (
    <>
      <View style={styles.container}>
        <TextInput
          label="Name"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <TextInput
          label="Code"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <TextInput
          label="Amount"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Apply
        </Button>
      </View>
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
