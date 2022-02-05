import * as React from 'react';
import {Card, Title, } from 'react-native-paper';
import {View, TouchableOpacity} from 'react-native';



 
 
const Coupon = ({navigation}) => {
  
  return (
    <>
   
        
     
      <View style={{flex: 1, backgroundColor: 'white'}}>
       
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ViewCoupon')
          }}>
          <Card>
            <Card.Cover source={require('../../assets/coupon.png')} />
            <Card.Content>
              <Title>View Coupon</Title>
            </Card.Content>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('AddCoupon')}>
          <Card>
            <Card.Cover source={require('../../assets/coupon.png')} />
            <Card.Content>
              <Title>Add Coupon</Title>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Coupon;

