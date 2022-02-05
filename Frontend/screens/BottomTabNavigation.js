import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Cart from './Cart';
import Home from './Home';
import Search from './Search';
import Account from './Account';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: 'blue',
        },
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
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

export default function BottomTabNavigation() {
  return <MyTabs />;
}
