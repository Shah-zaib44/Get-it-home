import * as React from 'react';
import {View, Platform, ScrollView, Image} from 'react-native';
import {
  Text,
  Chip,
  Avatar,
  ActivityIndicator,
  Colors,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SliderBox} from 'react-native-image-slider-box';
import {Rating} from 'react-native-ratings';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const Description = ({route}) => {
  const [userName, setuserName] = React.useState('');
  const [profileImage, setprofileImage] = React.useState('');
  console.log(userName);
  const [data, setData] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);

  const {id} = route.params;
  console.log('id', id);

  const [isLoading, setLoading] = React.useState(true);

  const _goBack = () => console.log('Went back');
  const getProductById = () => {
    fetch(`http://10.0.2.2:8080/api/products/productId/${id}`)
      .then(response => response.json())
      .then(response => {
        console.log('##', response);
        setData(response);

        setLoading(false);
      })
      .catch(error => console.error(error));
  };

  const getReviews = () => {
    fetch(`http://10.0.2.2:8080/api/reviews/productId/${id}`)
      .then(response => response.json())
      .then(response => {
        console.log('##', response);
        setReviews(response.data);
      })
      .catch(error => console.error(error));
  };
  // AsyncStorage.setItem(
  //   'user',
  //   JSON.stringify({
  //     fullName: 'Shahzaib',
  //     profileImage:
  //       'file:///data/user/0/com.myapp/cache/rn_image_picker_lib_temp_4605e864-ee61-470e-99c5-b843a54ca7ea.jpg',
  //   }),
  // );
  const getData = async () => {
    const user = await AsyncStorage.getItem('user');
    if (user != null) {
      setuserName(JSON.parse(user).fullName);
      setprofileImage(JSON.parse(user).profileImage);
    }
  };

  React.useEffect(() => {
    getProductById();
    getData();
    getReviews();
    setuserName(userName);
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
            <SliderBox
              images={
                data.productImage != null && JSON.parse(data.productImage)
              }
            />
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
            <Rating readonly={true} style={{paddingVertical: 10}} />
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

            <Text>Product Review</Text>
            {reviews.map((review, index) => {
              console.log(review.rating);
              return (
                <View style={{marginBottom: 10}} key={index}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View>
                      <Avatar.Image size={40} source={{uri: profileImage}} />
                    </View>
                    <View>
                      <Text style={{marginLeft: 10}}>{userName}</Text>
                      <Rating
                        style={{marginLeft: 10, alignItems: 'flex-start'}}
                        imageSize={20}
                        readonly={true}
                        startingValue={review.rating}
                      />
                    </View>
                  </View>
                  <Text>{review.review}</Text>

                  <Text>
                    {new Date(
                      new Date(review.createdAt)
                        .toISOString()
                        .slice(0, 10)
                        .replace('T', ' '),
                    ).toDateString()}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default Description;
