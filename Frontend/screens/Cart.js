import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
// import { Button } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-paper';

const Cart = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      {/* yeh card wala section  */}
      <View
        style={{
          backgroundColor: '#fff',
          marginVertical: 20,
          marginHorizontal: 20,
          paddingVertical: 20,
          paddingHorizontal: 20,
          //  flex: 0.3,
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
            source={require('../assets/mobilepic.png')}
          />
        </View>

        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ flexGrow: 1, marginStart: 10 }}>
              <Text style={{ color: 'black', paddingBottom: 10 }}>Nike Air</Text>
              <Text style={{ color: 'black', paddingBottom: 8 }}>36 Miami</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontAwesome5
                    name={'heart'}
                    size={20}
                    style={{ color: 'black' }}
                  />
                </View>
              </TouchableOpacity>

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
                    style={{ color: 'black' }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                flexGrow: 1,
                color: 'black',
                marginStart: 10,
                alignSelf: 'flex-end',
                fontWeight: 'bold',
              }}>
              $10
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5 }}>
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
                    style={{ color: 'gray' }}
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
                <Text style={{ color: '#fff' }}>Num</Text>
              </View>

              <TouchableOpacity
                style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5 }}>
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
                    style={{ color: 'gray' }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>


        </View>

      </View>
      {/* card one end  */}

      {/* start second cart */}
      <View
        style={{
          backgroundColor: '#fff',
          marginVertical: 20,
          marginHorizontal: 20,
          paddingVertical: 20,
          paddingHorizontal: 20,
          //  flex: 0.3,
          backgroundColor: '#fff',
          borderWidth: 2,
          flexDirection: 'row',
          marginBottom: 10,
          // height: 200
        }}>
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
              borderWidth: 1,
              borderColor: '#000',
              borderRadius: 1,
            }}
            source={require('../assets/cardpic.jpg')}
          />
        </View>
        {/* <View style={{ flexDirection: 'row' }}>
          <View style={{ flexGrow: 1, marginLeft: 25 }} >
            <Text style={{ color: 'black', paddingBottom: 10 }}>Nike Air</Text>
            <Text style={{ color: 'black', paddingBottom: 8 }}>36 Miami</Text>
            <Text style={{ color: '#1E90FF', paddingTop: 20 }}>$267</Text>
          </View>
          <View >
            <View style={{ flexGrow: 1, flexDirection: "row", marginTop: 10 }} >
              <FontAwesome5 name={'heart'} size={30} style={{ color: "red", paddingRight: 20 }} />
              <FontAwesome5 name={'trash'} size={30} style={{ color: "grey" }} />
            </View>
            <View style={{ flexDirection: "row", backgroundColor: "blue", width: '100%' }} >
              <TouchableOpacity>
                <View style={{ paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <FontAwesome5 name={'plus'} size={14} style={{ color: "#fff" }} />
                </View>
              </TouchableOpacity>
              <View style={{ paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Num</Text>
              </View>
              <TouchableOpacity>
                <View style={{ paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <FontAwesome5 name={'minus'} size={14} style={{ color: "#fff" }} />
                </View>
              </TouchableOpacity>
       
            </View>
          </View>
          
        </View> */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexGrow: 1, marginStart: 10 }}>
              <Text style={{ color: 'black', paddingBottom: 10 }}>Nike Air</Text>
              <Text style={{ color: 'black', paddingBottom: 8 }}>36 Miami</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontAwesome5
                    name={'heart'}
                    size={20}
                    style={{ color: 'black' }}
                  />
                </View>
              </TouchableOpacity>
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
                    style={{ color: 'black' }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                flexGrow: 1,
                color: 'black',
                marginStart: 10,
                alignSelf: 'flex-end',
                fontWeight: 'bold',
              }}>
              $10
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5 }}>
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
                    style={{ color: 'gray' }}
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
                <Text style={{ color: '#fff' }}>Num</Text>
              </View>

              <TouchableOpacity
                style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5 }}>
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
                    style={{ color: 'gray' }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* end second cart */}

      {/* start third cart */}
      <View
        style={{
          backgroundColor: '#fff',
          marginVertical: 20,
          marginHorizontal: 20,
          paddingVertical: 20,
          paddingHorizontal: 20,
          //  flex: 0.3,
          backgroundColor: '#fff',
          borderWidth: 2,
          flexDirection: 'row',
          marginBottom: 10,
          // height: 200
        }}>
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
              borderWidth: 1,
              borderColor: '#000',
              borderRadius: 1,
            }}
            source={require('../assets/mobilepic2.jpg')}
          />
        </View>

        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexGrow: 1, marginStart: 10 }}>
              <Text style={{ color: 'black', paddingBottom: 10 }}>Nike Air</Text>
              <Text style={{ color: 'black', paddingBottom: 8 }}>36 Miami</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontAwesome5
                    name={'heart'}
                    size={20}
                    style={{ color: 'black' }}
                  />
                </View>
              </TouchableOpacity>
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
                    style={{ color: 'black' }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                flexGrow: 1,
                color: 'black',
                marginStart: 10,
                alignSelf: 'flex-end',
                fontWeight: 'bold',
              }}>
              $10
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5 }}>
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
                    style={{ color: 'gray' }}
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
                <Text style={{ color: '#fff' }}>Num</Text>
              </View>

              <TouchableOpacity
                style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5 }}>
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
                    style={{ color: 'gray' }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* end third cart */}

      {/* checkout button */}

      <View
        style={{
          // backgroundColor: '#fff',
          marginVertical: 20,
          marginHorizontal: 20,
          // paddingVertical: 20,
          paddingHorizontal: 20,
          //  flex: 0.3,
          backgroundColor: '#fff',
          borderWidth: 2,
          flexDirection: 'row',
          marginBottom: 10,

          // height: 200
        }}>

        {/* <Text style={{
            color: '#fff', paddingBottom: 10, textAlign: 'center',
            marginStart: 78,
            fontSize: 20
          }}>Apply</Text> */}
        <TextInput
          style={{
            height: 40,
            width: 209,
            color: 'grey'
            // borderColor: 'gray',
            // borderWidth: 1
          }}
          defaultValue="Enter  Cupon  Code"
        />

        <TouchableOpacity>


          <Text
            style={{
              color: 'black',
              backgroundColor: 'blue',
              fontSize: 29,
              paddingHorizontal: 4,
              paddingVertical: 4,
              marginStart: 8
              ,

            }}
          >Apply</Text>

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
          //  flex: 0.3,
          backgroundColor: '#fff',
          borderWidth: 2,
          flexDirection: 'row',
          marginBottom: 10,
          // height: 200
        }}>


        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexGrow: 1, marginStart: 5, paddingVertical: 10 }}>
              <Text style={{ color: 'black', paddingBottom: 10 }}>item3</Text>
              {/* <Text style={{ color: 'black', paddingBottom: 8 }}>36 Miami</Text> */}
            </View>
            <View style={{ flexDirection: 'row' }}>
              {/* <TouchableOpacity>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontAwesome5
                    name={'heart'}
                    size={20}
                    style={{ color: 'black' }}
                  />
                  <Text style={{ color: 'black', paddingBottom: 10 }}>item3</Text>
                </View>
              </TouchableOpacity> */}

              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* <FontAwesome5
                    name={'trash'}
                    size={18}
                    style={{ color: 'black' }}
                  /> */}
                <Text style={{ color: 'black', paddingBottom: 10 }}>$598.86</Text>
              </View>



            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexGrow: 1, marginStart: 5, paddingVertical: 10 }}>
              <Text style={{ color: 'black', paddingBottom: 10 }}>Shipping</Text>
              {/* <Text style={{ color: 'black', paddingBottom: 8 }}>36 Miami</Text> */}
            </View>
            <View style={{ flexDirection: 'row' }}>
              {/* <TouchableOpacity>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontAwesome5
                    name={'heart'}
                    size={20}
                    style={{ color: 'black' }}
                  />
                  <Text style={{ color: 'black', paddingBottom: 10 }}>item3</Text>
                </View>
              </TouchableOpacity> */}

              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* <FontAwesome5
                    name={'trash'}
                    size={18}
                    style={{ color: 'black' }}
                  /> */}
                <Text style={{ color: 'black', paddingBottom: 10 }}>$40.00</Text>
              </View>



            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexGrow: 1, marginStart: 5, paddingVertical: 10 }}>
              <Text style={{ color: 'black', paddingBottom: 10 }}>import charges</Text>
              {/* <Text style={{ color: 'black', paddingBottom: 8 }}>36 Miami</Text> */}
            </View>
            <View style={{ flexDirection: 'row' }}>
              {/* <TouchableOpacity>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontAwesome5
                    name={'heart'}
                    size={20}
                    style={{ color: 'black' }}
                  />
                  <Text style={{ color: 'black', paddingBottom: 10 }}>item3</Text>
                </View>
              </TouchableOpacity> */}

              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* <FontAwesome5
                    name={'trash'}
                    size={18}
                    style={{ color: 'black' }}
                  /> */}
                <Text style={{ color: 'black', paddingBottom: 10 }}>$128.00</Text>
              </View>



            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                flexGrow: 1,
                color: 'black',
                marginStart: 10,
                alignSelf: 'flex-end',
                fontWeight: 'bold',
              }}>
              Total Price
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  flexGrow: 1,
                  color: 'blue',
                  marginStart: 10,
                  alignSelf: 'flex-end',
                  fontWeight: 'bold',
                }}>
                $766.86
              </Text>
            </View>
          </View>
        </View>


      </View>

      {/* checkout button */}
      <TouchableOpacity>
        <View
          style={{
            // backgroundColor: '#fff',
            marginVertical: 20,
            marginHorizontal: 20,
            paddingVertical: 20,
            paddingHorizontal: 20,
            //  flex: 0.3,
            backgroundColor: 'blue',
            borderWidth: 2,
            flexDirection: 'row',
            marginBottom: 10,

            // height: 200
          }}>

          <Text style={{
            color: '#fff', paddingBottom: 10, textAlign: 'center',
            marginStart: 78,
            fontSize: 20
          }}>Check Out</Text>







        </View>
      </TouchableOpacity>





    </ScrollView>
  );
};

export default Cart;
