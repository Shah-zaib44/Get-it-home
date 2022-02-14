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
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const Description = ({route}) => {
  const [data, setData] = React.useState([]);
  const {id} = route.params;
  console.log('id', id);

  const [isLoading, setLoading] = React.useState(true);

  const _goBack = () => console.log('Went back');
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

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View>
                <Avatar.Image
                  size={40}
                  source={require('../assets/PngItem_1468479.png')}
                />
              </View>
              <View>
                <Text style={{marginLeft: 10}}>James Lawson</Text>
                <Rating
                  style={{marginLeft: 10, alignItems: 'flex-start'}}
                  imageSize={10}
                  readonly={true}
                />
              </View>
            </View>
            <Text>
              Air Max are always very comfortable fit clean and just perfect in
              every way. 90's are and will always be one of my favourite
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                style={{width: 50, height: 50, margin: 10}}
                source={require('../assets/PngItem_1468479.png')}
              />
              <Image
                style={{width: 50, height: 50, margin: 10}}
                source={require('../assets/PngItem_1468479.png')}
              />
              <Image
                style={{width: 50, height: 50, margin: 10}}
                source={require('../assets/PngItem_1468479.png')}
              />
            </View>
            <Text>December 10, 2016</Text>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default Description;
