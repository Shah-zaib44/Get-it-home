import * as React from 'react';
import {Card, Title} from 'react-native-paper';
import {View, TouchableOpacity} from 'react-native';

const Product = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ViewProduct');
          }}>
          <Card>
            <Card.Cover source={require('../../assets/coupon.png')} />
            <Card.Content>
              <Title>View Product</Title>
            </Card.Content>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
          <Card>
            <Card.Cover source={require('../../assets/coupon.png')} />
            <Card.Content>
              <Title>Add Product</Title>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Product;
