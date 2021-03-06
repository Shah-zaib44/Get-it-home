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
const Description = ({navigation, route}) => {
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

  const handleReviewAndRating = () => {
    navigation.navigate('ReviewAndRating', {
      id: id,
      fullName: userName,
      profileImage: profileImage,
    });
  };
  const getReviews = () => {
    fetch(`http://10.0.2.2:8080/api/reviews/productId/${id}`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setReviews(response.data);
      })
      .catch(error => console.error(error));
  };

  const getData = async () => {
    const user = await AsyncStorage.getItem('user');
    if (user != null) {
      setuserName(JSON.parse(user).user.fullName);
      setprofileImage(JSON.parse(JSON.parse(user).user.profileImage)[0]);
    }
  };

  const avg = () => {
    var sum = 0;
    for (var i = 0; i < reviews.length; i++) {
      sum += parseInt(reviews[i].rating); //don't forget to add the base
    }

    var avg = sum / reviews.length;

    return avg;
  };
  console.log(avg());
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
            <Rating
              startingValue={reviews.length != 0 && avg()}
              readonly={true}
              style={{paddingVertical: 10}}
            />
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
            <View style={{flexDirection: 'row'}}>
              <Text>Product Review</Text>
            </View>
            {reviews.map((review, index) => {
              return (
                review.productId == id && (
                  <View style={{marginBottom: 10}} key={index}>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      {console.log(review.profileImage)}
                      <View>
                        <Avatar.Image
                          size={40}
                          source={{uri: JSON.parse(review.profileImage)}}
                        />
                      </View>
                      <View>
                        <Text style={{marginLeft: 10}}>{review.fullName}</Text>
                        <Rating
                          style={{marginLeft: 10, alignItems: 'flex-start'}}
                          imageSize={20}
                          readonly={true}
                          startingValue={review.rating}
                        />
                      </View>
                    </View>
                    <Text>{review.review}</Text>

                    {/* <Text>
                      {new Date(
                        new Date(review.createdAt)
                          .toISOString()
                          .slice(0, 10)
                          .replace('T', ' '),
                      ).toDateString()}
                    </Text> */}
                  </View>
                )
              );
            })}
            <Button
              onPress={() => {
                handleReviewAndRating();
              }}
              style={{backgroundColor: colors.button}}
              mode="contained">
              Add Review and Rating
            </Button>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default Description;
