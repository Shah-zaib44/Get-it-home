import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Product from './Product';
import Coupon from './Coupon';
import AccountAdmin from './AccountAdmin';

import {useTheme} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

function MyTabs() {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.header,
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: colors.bottom,
        },
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Product"
        component={Product}
        options={{tabBarLabel: 'Product'}}
        options={{
          tabBarLabel: 'Product',
          tabBarIcon: ({color, size}) => (
            <List.Icon
              color={color}
              size={size}
              icon={require('../../assets/producticon.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Coupon"
        component={Coupon}
        options={{
          tabBarLabel: 'Coupon',
          tabBarIcon: ({color, size}) => (
            <List.Icon
              color={color}
              size={size}
              icon={require('../../assets/couponicon.png')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AccountAdmin"
        component={AccountAdmin}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function BottomTabNavigationAdmin() {
  return <MyTabs />;
}
