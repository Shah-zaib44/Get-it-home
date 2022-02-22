import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ViewProduct from './admin/ViewProduct';
import AddProduct from './admin/AddProduct';
import Product from './admin/Product';
import AccountAdmin from './admin/AccountAdmin';
import Account from './Account';
import Catalogue from './Catalogue';
import Description from './Description';
import ViewCoupon from './admin/ViewCoupon';
import EditCoupon from './admin/EditCoupon';
import AddCoupon from './admin/AddCoupon';
import Coupon from './admin/Coupon';
import SignUp from './SignUp';
import Filter from './Filter';
import Success from './Success';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import VerifyCode from './VerifyCode';
import Categories from './Categories';
import ProductByCategory from './ProductByCategory';
import BottomTabNavigation from './BottomTabNavigation';
import BottomTabNavigationAdmin from './admin/BottomTabNavigationAdmin';
import Profile from './Profile';
import ProfileAdmin from './admin/ProfileAdmin';
import UpdatePassword from './UpdatePassword';
import Cart from './Cart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotFound from './NotFound';

const Stack = createNativeStackNavigator();

const App = () => {
  const [userRole, setuserRole] = React.useState('');
  const [userToken, setUserToken] = React.useState('');
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      bottom: '#40BFFF',
      header: '#40BFFF',
      button: '#40BFFF',
      slider: '#40BFFF',
      text: '#40BFFF',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  const getData = async () => {
    const user = await AsyncStorage.getItem('user');

    if (user != null) {
      console.log(user);
      setUserToken(JSON.parse(user).token);
      setuserRole(JSON.parse(user).user.role);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);
  // userToken == ''
  // ? 'SignUp'
  // : userRole == 'User'
  // ? 'BottomTabNavigation'
  // : 'BottomTabNavigationAdmin'
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="NotFound"
          component={NotFound}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="Success"
          component={Success}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="ProductByCategory"
          component={ProductByCategory}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="UpdatePassword"
          component={UpdatePassword}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="Product"
          component={Product}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="AccountAdmin"
          component={AccountAdmin}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
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
          name="BottomTabNavigationAdmin"
          component={BottomTabNavigationAdmin}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="VerifyCode"
          component={VerifyCode}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="Categories"
          component={Categories}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="Filter"
          component={Filter}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="ProfileAdmin"
          component={ProfileAdmin}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="ViewCoupon"
          component={ViewCoupon}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="Catalogue"
          component={Catalogue}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="EditCoupon"
          component={EditCoupon}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="Description"
          component={Description}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="ViewProduct"
          component={ViewProduct}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="AddProduct"
          component={AddProduct}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="AddCoupon"
          component={AddCoupon}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: MyTheme.colors.header,
            },
            headerTintColor: '#fff',
          }}
          name="Account"
          component={Account}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
