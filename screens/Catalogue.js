import * as React from 'react';
import {Card, Title} from 'react-native-paper';
import {View, ScrollView} from 'react-native';
import {Rating} from 'react-native-ratings';
const Catalogue = () => {
  ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };
  return (
    <>
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            flexDirection: 'row',
            paddingVertical: 10,
          }}>
          <View style={{flex: 1}}>
            <Card style={{width: '80%', marginLeft: 20}}>
              <Card.Cover source={require('../assets/handfreeImage.jpg')} />
              <Card.Content>
                <Title>View Coupon</Title>
                <Rating
                  onFinishRating={ratingCompleted}
                  style={{paddingVertical: 10}}
                  imageSize={30}
                />
                <Title>RS 299/-</Title>
              </Card.Content>
            </Card>
          </View>
          <View style={{flex: 1}}>
            <Card style={{width: '80%', marginLeft: 20}}>
              <Card.Cover source={require('../assets/handfreeImage.jpg')} />
              <Card.Content>
                <Title>View Coupon</Title>
                <Rating
                  onFinishRating={ratingCompleted}
                  style={{paddingVertical: 10}}
                  imageSize={30}
                />
                <Title>RS 299/-</Title>
              </Card.Content>
            </Card>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            flexDirection: 'row',
            paddingVertical: 10,
          }}>
          <View style={{flex: 1}}>
            <Card style={{width: '80%', marginLeft: 20}}>
              <Card.Cover source={require('../assets/handfreeImage.jpg')} />
              <Card.Content>
                <Title>View Coupon</Title>
                <Rating
                  onFinishRating={ratingCompleted}
                  style={{paddingVertical: 10}}
                  imageSize={30}
                />
                <Title>RS 299/-</Title>
              </Card.Content>
            </Card>
          </View>
          <View style={{flex: 1}}>
            <Card style={{width: '80%', marginLeft: 20}}>
              <Card.Cover source={require('../assets/handfreeImage.jpg')} />
              <Card.Content>
                <Title>View Coupon</Title>
                <Rating
                  onFinishRating={ratingCompleted}
                  style={{paddingVertical: 10}}
                  imageSize={30}
                />
                <Title>RS 299/-</Title>
              </Card.Content>
            </Card>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            flexDirection: 'row',
            paddingVertical: 10,
          }}>
          <View style={{flex: 1}}>
            <Card style={{width: '80%', marginLeft: 20}}>
              <Card.Cover source={require('../assets/handfreeImage.jpg')} />
              <Card.Content>
                <Title>View Coupon</Title>
                <Rating
                  onFinishRating={ratingCompleted}
                  style={{paddingVertical: 10}}
                  imageSize={30}
                />
                <Title>RS 299/-</Title>
              </Card.Content>
            </Card>
          </View>
          <View style={{flex: 1}}>
            <Card style={{width: '80%', marginLeft: 20}}>
              <Card.Cover source={require('../assets/handfreeImage.jpg')} />
              <Card.Content>
                <Title>View Coupon</Title>
                <Rating
                  onFinishRating={ratingCompleted}
                  style={{paddingVertical: 10}}
                  imageSize={30}
                />
                <Title>RS 299/-</Title>
              </Card.Content>
            </Card>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Catalogue;
