import * as React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Product from './Product';
import Coupon from './Coupon';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Product"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: '#fff'},
      }}>
      <Tab.Screen
        name="Product"
        component={Product}
        options={{tabBarLabel: 'Product'}}
      />
      <Tab.Screen
        name="Coupon"
        component={Coupon}
        options={{tabBarLabel: 'Coupon'}}
      />
    </Tab.Navigator>
  );
}
export default function TopTabNavigation() {
  return <MyTabs />;
}
