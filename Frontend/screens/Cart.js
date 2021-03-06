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
import NotFound from './NotFound';

const Cart = ({navigation}) => {
  const isFocused = useIsFocused();
  const [userName, setuserName] = React.useState('');
  const [couponCode, setcouponCode] = React.useState('');
  const {colors} = useTheme();
  const [cartData, setcartData] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [grandTotal, setgrandTotal] = React.useState(0);
  const [msg, setMsg] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const total = cartItems => {
    let totalVal = 0;

    for (let i = 0; i < cartItems.length; i++) {
      totalVal =
        totalVal +
        parseInt(cartItems[i].productPrice) * parseInt(cartItems[i].quantity);
    }

    setTotalPrice(totalVal);
    setgrandTotal(parseInt(totalVal) + 40);
  };
  const getData = async () => {
    const cart = await AsyncStorage.getItem('cart');
    if (cart !== null) {
      // We have data!!
      const cartItems = JSON.parse(cart);
      setcartData(cartItems);

      total(cartItems);
    }
  };
  const removeData = async () => {
    await AsyncStorage.removeItem('cart');
  };
  const getUserData = async () => {
    const user = await AsyncStorage.getItem('user');
    if (user != null) {
      setuserName(JSON.parse(user).user.fullName);
    }
  };
  const handleCoupon = () => {
    fetch('http://10.0.2.2:8080/api/coupons/validateCoupon', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({code: couponCode}),
    })
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          onDismissSnackBar();
          setMsg(response.error);
          onToggleSnackBar();
        } else {
          setTotalPrice(
            Math.ceil(
              totalPrice - totalPrice * (parseInt(response.data.amount) / 100),
            ),
          );
          setgrandTotal(
            Math.ceil(
              totalPrice - totalPrice * (parseInt(response.data.amount) / 100),
            ) + 40,
          );
          onDismissSnackBar();
          setMsg('Valid coupon');
          onToggleSnackBar();
        }
      });
  };
  const postOrder = () => {
    fetch(`http://10.0.2.2:8080/api/orders/`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cartData,
      }),
    })
      .then(response => response.json())
      .then(response => {
        setMsg('Data has been submitted successfully');
        onToggleSnackBar();
      })
      .catch(error => setMsg('There is some error while submitting data'));
  };
  React.useEffect(() => {
    if (isFocused) {
      getData();
      getUserData();
    }
  }, [isFocused]);
  return (
    <>
      {cartData.length < 1 ? (
        <>
          <NotFound navigation={navigation} />
        </>
      ) : (
        <ScrollView
          style={{
            backgroundColor: '#fff',
            flex: 1,
          }}>
          {cartData.map((data, index) => {
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
                      uri: data.productImage,
                    }}
                  />
                </View>

                <View style={{flex: 1}}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flexGrow: 1, marginStart: 10}}>
                      <Text style={{color: 'black', paddingBottom: 10}}>
                        {data.productName}
                      </Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity>
                        <View
                          style={{
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <FontAwesome5
                            name={'trash'}
                            size={18}
                            style={{color: 'black'}}
                          />
                        </View>
                      </TouchableOpacity>
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
                      {data.productPrice}
                    </Text>

                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={{
                          borderWidth: 1,
                          borderColor: 'gray',
                          borderRadius: 5,
                        }}
                        onPress={() => {
                          let quant = parseInt(data.quantity);
                          if (quant > 1) {
                            quant = quant - 1;
                            data.quantity = quant;
                            setcartData([...cartData]);
                            total(cartData);
                          }
                        }}>
                        <View
                          style={{
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <FontAwesome5
                            name={'minus'}
                            size={14}
                            style={{color: 'gray'}}
                          />
                        </View>
                      </TouchableOpacity>

                      <View
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'gray',
                          borderRadius: 5,
                        }}>
                        <Text style={{color: '#fff'}}>{data.quantity}</Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          borderWidth: 1,
                          borderColor: 'gray',
                          borderRadius: 5,
                        }}
                        onPress={() => {
                          let quant = parseInt(data.quantity);

                          quant = quant + 1;
                          data.quantity = quant;
                          setcartData([...cartData]);

                          total(cartData);
                        }}>
                        <View
                          style={{
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <FontAwesome5
                            name={'plus'}
                            size={14}
                            style={{color: 'gray'}}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
          {/* card one end  */}

          {/* checkout button */}

          <View
            style={{
              marginVertical: 20,
              marginHorizontal: 20,

              paddingHorizontal: 20,

              backgroundColor: '#fff',
              borderWidth: 2,
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <TextInput
              style={{
                height: 40,
                width: 209,
                color: 'grey',
              }}
              placeholder="Enter Coupon Code"
              value={couponCode}
              onChangeText={couponCode => setcouponCode(couponCode)}
            />

            <TouchableOpacity
              onPress={() => {
                handleCoupon();
              }}>
              <Text
                style={{
                  color: '#fff',
                  backgroundColor: colors.button,
                  fontSize: 29,
                  paddingHorizontal: 4,
                  paddingVertical: 4,
                  marginStart: 8,
                }}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>

          {/* new card  */}

          <View
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
            }}>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{flexGrow: 1, marginStart: 5, paddingVertical: 10}}>
                  <Text style={{color: 'black', paddingBottom: 10}}>
                    Subtotal
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', paddingBottom: 10}}>
                      Rs {totalPrice}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{flexGrow: 1, marginStart: 5, paddingVertical: 10}}>
                  <Text style={{color: 'black', paddingBottom: 10}}>
                    Delivery charges
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', paddingBottom: 10}}>
                      Rs 40
                    </Text>
                  </View>
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
                  Grand Total
                </Text>

                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      flexGrow: 1,
                      color: 'blue',
                      marginStart: 10,
                      alignSelf: 'flex-end',
                      fontWeight: 'bold',
                    }}>
                    Rs {grandTotal}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* <TouchableOpacity
            onPress={() => {
              removeData();
              getData();
              navigation.navigate('Success');
            }}>
            <View
              style={{
                marginVertical: 20,
                marginHorizontal: 20,
                paddingVertical: 20,
                paddingHorizontal: 20,

                backgroundColor: colors.button,
                borderWidth: 2,
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <Text
                style={{
                  color: '#fff',
                  paddingBottom: 10,
                  textAlign: 'center',
                  marginStart: 78,
                  fontSize: 20,
                }}>
                Check Out
              </Text>
            </View>
          </TouchableOpacity> */}
          {/* checkout button */}
          <Button
            style={{
              marginVertical: 20,
              marginHorizontal: 20,
              paddingVertical: 20,
              paddingHorizontal: 20,
              backgroundColor: colors.button,
              borderWidth: 2,

              marginBottom: 10,
            }}
            onPress={() => {
              postOrder(cartData);
              removeData();

              navigation.navigate('Success');
            }}
            mode="contained">
            Check Out
          </Button>

          <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
            {msg}
          </Snackbar>
        </ScrollView>
      )}
    </>
  );
};

export default Cart;
