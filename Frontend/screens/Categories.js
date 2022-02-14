import * as React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {List, Appbar, ActivityIndicator, Colors} from 'react-native-paper';
import {categories} from '../data';
import {SafeAreaView} from 'react-native-safe-area-context';
const Categories = ({navigation}) => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View>
          {categories.map((category, index) => {
            return (
              <List.Item
                key={index}
                title={category.title}
                left={props => <List.Icon {...props} icon={category.icon} />}
                onPress={() => {
                  navigation.navigate('ProductByCategory', {
                    category: category.title,
                  });
                }}
              />
            );
          })}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Categories;
