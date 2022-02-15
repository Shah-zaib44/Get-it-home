import React, {useEffect} from 'react';
// import {View, StyleSheet, Image} from 'react-native';
import logo from '../assets/logo.jpeg';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
} from 'react-native';

const FlashScreen = () => {
  // useEffect(() => {

  //     setTimeout(()=>{
  //         this.props.navigation.navigate('Cart');
  //         alert()
  //     },4000)

  //  },[]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.welcome}>Splash Screen</Text> */}
      <Image style={styles.logo} source={require('../assets/logo.jpeg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#40BFFF',
    color: 'red',
    alignItems: 'center',
    // backgroundColor:"#F5F5F5",
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
  logo: {
    width: 300,
    height: 300,
  },
});

export default FlashScreen;
