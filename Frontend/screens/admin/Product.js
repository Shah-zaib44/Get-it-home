import * as React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {List, Appbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
const Product = ({navigation}) => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View>
          <List.Item
            title="Add Product"
            onPress={() => {
              navigation.navigate('AddProduct');
            }}
          />

          <List.Item
            title="View Product"
            onPress={() => {
              navigation.navigate('CatalogueAdmin');
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Product;
