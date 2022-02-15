import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ViewProduct from '../screens/admin/ViewProduct';
import AddProduct from '../screens/admin/AddProduct';
import Product from '../screens/admin/Product';
import Catalogue from './Catalogue';
import Description from './Description';
import ViewCoupon from '../screens/admin/ViewCoupon';
import EditCoupon from '../screens/admin/EditCoupon';
import AddCoupon from '../screens/admin/AddCoupon';
import Coupon from '../screens/admin/Coupon';
import SignUp from './SignUp';
import Filter from './Filter';

import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import VerifyCode from './VerifyCode';
import Categories from './Categories';
import ProductByCategory from './ProductByCategory';
import BottomTabNavigation from './BottomTabNavigation';
import TopTabNavigation from '../screens/admin/TopTabNavigation';
import Profile from './Profile';
import UpdatePassword from './UpdatePassword';
import Cart from './Cart';
import FlashScreen from './FlashScreen';
const Stack = createNativeStackNavigator();

const NavigationScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
          name="ProductByCategory"
          component={ProductByCategory}
        />
         
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
          name="Coupon"
          component={Coupon}
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
            headerShown: false,
          }}
          name="TopTabNavigation"
          component={TopTabNavigation}
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
          name="Categories"
          component={Categories}
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

export default NavigationScreens;
