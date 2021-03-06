import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Cart from './Cart';
import Home from './Home';
import Search from './Search';
import Account from './Account';
import Categories from './Categories';
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
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({color, size}) => (
            <List.Icon
              color={color}
              size={size}
              icon={require('../assets/categories.png')}
            />
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
