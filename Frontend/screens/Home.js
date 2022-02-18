import * as React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import Catalogue from './Catalogue';
import {Avatar, Text} from 'react-native-paper';
import {categories} from '../data';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SliderBox} from 'react-native-image-slider-box';
const Item = ({icon, title}) => (
  <View
    style={{
      marginTop: 20,
    }}>
    <Avatar.Image
      style={{backgroundColor: 'none'}}
      size={30}
      source={icon}></Avatar.Image>
    <Text>{title}</Text>
  </View>
);

const Home = () => {
  const [images] = React.useState([
    'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ',
    'https://i.picsum.photos/id/1014/6016/4000.jpg?hmac=yMXsznFliL_Y2E2M-qZEsOZE1micNu8TwgNlHj7kzs8',
    'https://i.picsum.photos/id/1029/4887/2759.jpg?hmac=uMSExsgG8_PWwP9he9Y0LQ4bFDLlij7voa9lU9KMXDE',
  ]);
  const renderItem = ({item}) => <Item title={item.title} icon={item.icon} />;
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <SliderBox images={images} />
        <ScrollView>
          <FlatList
            horizontal={true}
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>

        <Catalogue />
      </SafeAreaView>
    </>
  );
};

export default Home;
