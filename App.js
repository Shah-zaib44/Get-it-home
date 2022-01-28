import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import ViewCoupon from './screens/admin/ViewCoupon';
// import AddCoupon from './screens/admin/AddCoupon';
// import Coupon from './screens/admin/Coupon';
/* <Stack.Navigator initialRouteName="Coupon">
      <Stack.Screen  options={{
        
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
         
        }} name="Coupon" component={Coupon} />
      <Stack.Screen options={{
        
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
       
      }}  name="ViewCoupon" component={ViewCoupon} />
      <Stack.Screen options={{
        
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
       
      }}  name="AddCoupon" component={AddCoupon} />
    </Stack.Navigator> */
import ViewProduct from './screens/admin/ViewProduct';
import AddProduct from './screens/admin/AddProduct';
import Product from './screens/admin/Product';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Product">
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="Product"
          component={Product}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="ViewProduct"
          component={ViewProduct}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="AddProduct"
          component={AddProduct}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
