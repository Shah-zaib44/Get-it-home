import * as React from 'react';
import {View, FlatList, ScrollView, Image} from 'react-native';
import Catalogue from './Catalogue';
import {Avatar, Text} from 'react-native-paper';
import {categories} from '../data';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SliderBox} from 'react-native-image-slider-box';
const Item = ({icon, title}) => (
  <View
    style={{
      marginTop: 25,
      margin: 6,
    }}>
    <Image
      style={{
        width: 50,
        height: 50,

        marginBottom: 2,
        paddingVertical: 4,
        paddingHorizontal: 4,
      }}
      size={50}
      source={icon}
    />
    <Text>{title}</Text>
  </View>
);

const Home = ({navigation}) => {
  const [images] = React.useState([
    require('../assets/couponcode.png'),
    require('../assets/couponcode1.jpg'),
    require('../assets/couponcode2.jpg'),
    'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ',
  ]);
  const renderItem = ({item}) => <Item title={item.title} icon={item.icon} />;
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <ScrollView>
          <SliderBox
            images={images}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            autoplay
            circleLoop
          />
          <FlatList
            horizontal={true}
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <Catalogue navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
