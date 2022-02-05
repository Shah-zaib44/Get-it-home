import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ViewProduct from './screens/admin/ViewProduct';
import AddProduct from './screens/admin/AddProduct';
import Product from './screens/admin/Product';
import Catalogue from './screens/Catalogue';
import Description from './screens/Description';
import ViewCoupon from './screens/admin/ViewCoupon';
import EditCoupon from './screens/admin/EditCoupon';
import AddCoupon from './screens/admin/AddCoupon';
import Coupon from './screens/admin/Coupon';
import SignUp from './screens/SignUp';
import Filter from './screens/Filter';

import SignIn from './screens/SignIn';
import ForgotPassword from './screens/ForgotPassword';
import VerifyCode from './screens/VerifyCode';
import Category from './screens/Category';
import BottomTabNavigation from './screens/BottomTabNavigation';
import Profile from './screens/Profile';
import UpdatePassword from './screens/UpdatePassword';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabNavigation">
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="UpdatePassword"
          component={UpdatePassword}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="VerifyCode"
          component={VerifyCode}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="Category"
          component={Category}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="Filter"
          component={Filter}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="SignUp"
          component={SignUp}
        />

        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="ViewCoupon"
          component={ViewCoupon}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="Catalogue"
          component={Catalogue}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="EditCoupon"
          component={EditCoupon}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="Description"
          component={Description}
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
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="AddCoupon"
          component={AddCoupon}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/* <Stack.Navigator initialRouteName="Coupon">
      <Stack.Screen  options={{
        
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
         
        }} name="Coupon" component={Coupon} />
     
     
    </Stack.Navigator> */
