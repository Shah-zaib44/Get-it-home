import * as React from 'react';
import {
  Card,
  Title,
  ActivityIndicator,
  Colors,
  List,
  Button,
} from 'react-native-paper';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-ratings';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
const Catalogue = ({navigation}) => {
  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };
  const [isLoading, setLoading] = React.useState(true);

  const {colors} = useTheme();

  const [data, setData] = React.useState([]);
  const getProduct = () => {
    fetch('http://10.0.2.2:8080/api/products')
      .then(response => response.json())
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(error => console.error(error));
  };
  const toggleShow = id => {
    navigation.navigate('Description', {
      id: id,
    });
  };
  const handleCart = data => {
    console.log('Catalogue data:', data);
    navigation.navigate('Cart', {
      data: data,
    });
  };
  React.useEffect(() => {
    getProduct();
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
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Filter');
              }}>
              <List.Icon icon={require('../assets/filter.png')} />
            </TouchableOpacity>
          </View>

          <ScrollView>
            <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
              {data.map((data, index) => {
                return (
                  <TouchableOpacity
                    style={{flexBasis: '50%'}}
                    key={index}
                    onPress={() => toggleShow(data.id)}>
                    <Card style={{width: '80%', marginLeft: 20}}>
                      <Card.Cover
                        key={index}
                        source={{
                          uri:
                            data.productImage != null &&
                            JSON.parse(data.productImage)[0],
                        }}
                      />

                      <Card.Content>
                        <Title>{data.productName}</Title>
                        <Rating
                          onFinishRating={ratingCompleted}
                          style={{paddingVertical: 10}}
                          imageSize={30}
                        />
                        <Title>RS {data.productPrice}/-</Title>
                        <Button
                          style={{backgroundColor: colors.button}}
                          labelStyle={{fontSize: 12}}
                          mode="contained"
                          onPress={() => {
                            handleCart(data);
                          }}>
                          Add to Cart
                        </Button>
                      </Card.Content>
                    </Card>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default Catalogue;
