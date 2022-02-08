import * as React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {List, Appbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
const Coupon = ({navigation}) => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View>
          <List.Item
            title="Add Coupon"
            onPress={() => {
              navigation.navigate('AddCoupon');
            }}
          />

          <List.Item
            title="View Coupon"
            onPress={() => {
              navigation.navigate('ViewCoupon');
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Coupon;
