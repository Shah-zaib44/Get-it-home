import * as React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {Chip, Avatar, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SliderBox} from 'react-native-image-slider-box';
import {Rating} from 'react-native-ratings';
import {SafeAreaView} from 'react-native-safe-area-context';
const ViewProduct = () => {
  const [images] = React.useState([
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree', // Network image
    require('../../assets/user.png'), // Local image
  ]);

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: 'white',
        }}>
        <ScrollView>
          <SliderBox images={images} />
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <Text>Basic Earphone Supported to all mobile phones</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Icon style={{color: 'black'}} size={30} name="heart" />
            </View>
          </View>
          <Rating readonly={true} style={{paddingVertical: 10}} />
          <Text>RS 500/-</Text>
          <Text>Description</Text>
          <Text>
            The Nike Air Max 270 React ENG combines a full length React foam
            midsoal with a 270 max .
          </Text>
          <Text>Type</Text>

          <View
            style={{
              flexWrap: 'wrap',
              margin: 5,
            }}>
            <Chip>Handfree</Chip>
          </View>
          <Text>Brand</Text>

          <View
            style={{
              flexWrap: 'wrap',
              margin: 5,
            }}>
            <Chip>VMA</Chip>
          </View>
          <Text>Warranty Type</Text>

          <View
            style={{
              flexWrap: 'wrap',
              margin: 5,
            }}>
            <Chip>No Warranty</Chip>
          </View>
          <Text>Colour</Text>

          <View
            style={{
              flexWrap: 'wrap',
              margin: 5,
            }}>
            <Chip>Black</Chip>
          </View>
          <Text>Product Review</Text>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <View>
              <Avatar.Image
                size={40}
                source={require('../../assets/user.png')}
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
              source={require('../../assets/user.png')}
            />
            <Image
              style={{width: 50, height: 50, margin: 10}}
              source={require('../../assets/user.png')}
            />
            <Image
              style={{width: 50, height: 50, margin: 10}}
              source={require('../../assets/user.png')}
            />
          </View>
          <Text>December 10, 2016</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ViewProduct;
