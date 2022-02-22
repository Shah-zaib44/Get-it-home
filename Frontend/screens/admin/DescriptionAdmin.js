import * as React from 'react';
import {View, Platform, ScrollView, Image} from 'react-native';
import {
  Text,
  Chip,
  Avatar,
  ActivityIndicator,
  Colors,
  Button,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SliderBox} from 'react-native-image-slider-box';
import {Rating} from 'react-native-ratings';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from '@react-navigation/native';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const DescriptionAdmin = ({navigation, route}) => {
  const [userName, setuserName] = React.useState('');
  const [profileImage, setprofileImage] = React.useState('');
  const {colors} = useTheme();
  const [data, setData] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);

  const {id} = route.params;

  const [isLoading, setLoading] = React.useState(true);

  const _goBack = () => {};
  const getProductById = () => {
    fetch(`http://10.0.2.2:8080/api/products/productId/${id}`)
      .then(response => response.json())
      .then(response => {
        setData(response);

        setLoading(false);
      })
      .catch(error => console.error(error));
  };

  React.useEffect(() => {
    getProductById();
  }, []);
  return (
    <>
      {isLoading ? (
        <SafeAreaView
          style={{
            flex: 1,

            backgroundColor: 'white',
          }}>
          <ActivityIndicator
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            animating={true}
            color={Colors.red800}
            size={'large'}
          />
        </SafeAreaView>
      ) : (
        <SafeAreaView
          style={{
            flex: 1,
            paddingVertical: 10,
            paddingHorizontal: 10,
            backgroundColor: 'white',
          }}>
          <ScrollView>
            <SliderBox images={Array.from(data.productImage)} />
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{flex: 1}}>
                <Text>{data.productName}</Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Icon style={{color: 'black'}} size={30} name="heart" />
              </View>
            </View>

            <Text>RS {data.productPrice}/-</Text>
            <Text>Description</Text>
            <Text>{data.productDescription}</Text>
            <Text>Category</Text>

            <View
              style={{
                flexWrap: 'wrap',
                margin: 5,
              }}>
              <Chip>{data.category}</Chip>
            </View>
            <Text>Brand</Text>

            <View
              style={{
                flexWrap: 'wrap',
                margin: 5,
              }}>
              <Chip>{data.brand}</Chip>
            </View>
            <Text>Warranty Type</Text>

            <View
              style={{
                flexWrap: 'wrap',
                margin: 5,
              }}>
              <Chip>{data.warrantyType}</Chip>
            </View>
            <Text>Colour</Text>

            <View
              style={{
                flexWrap: 'wrap',
                margin: 5,
              }}>
              <Chip>{data.colour}</Chip>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default DescriptionAdmin;
