import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Button, Snackbar} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {useTheme, useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotFound from '../NotFound';

const Order = ({navigation}) => {
  const [order, setOrder] = React.useState([]);

  const getOrder = () => {
    fetch(`http://10.0.2.2:8080/api/orders/`)
      .then(response => response.json())
      .then(response => {
        //   console.log(response.data[0].productImage);
        console.log(response);
        setOrder(response.data);
      })
      .catch(error => console.error(error));
  };
  const generateId = () => {
    return (
      Math.random().toString(36).substring(2) +
      new Date().getTime().toString(36)
    );
  };

  console.log(generateId());
  React.useEffect(() => {
    getOrder();
  }, []);
  const date = new Date();
  return (
    <>
      <ScrollView
        style={{
          backgroundColor: '#fff',
          flex: 1,
        }}>
        <View style={{flex: 1}}>
          <View style={{flexGrow: 1, marginStart: 10}}>
            <Text
              style={{fontWeight: 'bold', color: 'black', paddingBottom: 10}}>
              ORDERID: {generateId()}
            </Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{flexGrow: 1, marginStart: 10}}>
            <Text
              style={{fontWeight: 'bold', color: 'black', paddingBottom: 10}}>
              DATE: {date.toString()}
            </Text>
          </View>
        </View>
        {order.map((order, index) => {
          console.log(order.productImage);
          return (
            <View
              key={index}
              style={{
                backgroundColor: '#fff',
                marginVertical: 20,
                marginHorizontal: 20,
                paddingVertical: 20,
                paddingHorizontal: 20,

                backgroundColor: '#fff',
                borderWidth: 2,
                flexDirection: 'row',
                marginBottom: 10,
                borderRadius: 5,
              }}>
              <View>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 5,
                  }}
                  source={{
                    uri: JSON.parse(order.productImage),
                  }}
                />
              </View>

              <View style={{flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexGrow: 1, marginStart: 10}}>
                    <Text style={{color: 'black', paddingBottom: 10}}>
                      {order.productName}
                    </Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      flexGrow: 1,
                      color: 'black',
                      marginStart: 10,
                      alignSelf: 'flex-end',
                      fontWeight: 'bold',
                    }}>
                    {order.productPrice}
                  </Text>

                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'gray',
                        borderRadius: 5,
                      }}>
                      <Text style={{color: '#fff'}}>{order.quantity}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default Order;
