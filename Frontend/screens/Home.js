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
      marginTop: 25,
      margin: 6,
    }}>
    <Avatar.Image
      style={{
        backgroundColor: 'none',
        width: 60,
        height: 60,
        borderRadius: 100 / 2,
        backgroundColor: 'none',
        marginBottom: 2,
        paddingVertical: 4,
        paddingHorizontal: 4,
      }}
      size={50}
      source={icon}></Avatar.Image>
    <Text>{title}</Text>
  </View>
);

const Home = ({navigation}) => {
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
