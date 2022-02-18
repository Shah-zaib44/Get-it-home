import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Rating} from 'react-native-ratings';
import {Appbar, TextInput, Button, Chip, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {SafeAreaView} from 'react-native-safe-area-context';
const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    bottom: '#40BFFF',
    header: '#40BFFF',
    button: '#40BFFF',
    slider: '#40BFFF',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
class Filter extends React.Component {
  ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };
  state = {
    text: '',
  };
  state = {
    values: [0, 10],
  };

  multiSliderValuesChange = values => {
    this.setState({
      values,
    });
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <View>
            <Text>Price Range</Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{flex: 1}}>
                <TextInput
                  style={styles.input}
                  value={String(this.state.values[0])}
                  onChangeText={() => this.setState({text: this.state.text})}
                />
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  style={styles.input}
                  value={String(this.state.values[1])}
                  onChangeText={() => this.setState({text: this.state.text})}
                />
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <MultiSlider
                values={[this.state.values[0], this.state.values[1]]}
                sliderLength={280}
                onValuesChange={this.multiSliderValuesChange}
                min={0}
                max={10}
                step={1}
              />
            </View>
            <Text>Rating</Text>
            <Rating
              onFinishRating={this.ratingCompleted}
              style={{paddingVertical: 10}}
            />
            <Text>Color</Text>
            <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>Red</Chip>
              </View>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>Black</Chip>
              </View>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>White</Chip>
              </View>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>Blue</Chip>
              </View>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>Yellow</Chip>
              </View>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>Green</Chip>
              </View>
            </View>

            <Text>Brand</Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>VMA</Chip>
              </View>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>VMAX</Chip>
              </View>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>VMA PLUS</Chip>
              </View>
            </View>

            <Text>Warranty Type</Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>No Warranty</Chip>
              </View>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>Brand Warranty</Chip>
              </View>
            </View>

            <Text>Category</Text>
            <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>Charger</Chip>
              </View>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>Headphones</Chip>
              </View>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>Handfree</Chip>
              </View>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>Protector</Chip>
              </View>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>Bluetooth</Chip>
              </View>
              <View
                style={{
                  margin: 5,
                }}>
                <Chip>Pouches</Chip>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{flex: 1}}>
                <Button
                  style={styles.button}
                  mode="contained"
                  onPress={() => console.log('Pressed')}>
                  Reset
                </Button>
              </View>
              <View style={{flex: 1}}>
                <Button
                  style={styles.button}
                  mode="contained"
                  onPress={() => console.log('Pressed')}>
                  Done
                </Button>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  button: {width: '90%', backgroundColor: MyTheme.colors.button},
  input: {
    textAlign: 'center',
    width: '90%',
    backgroundColor: 'white',
  },
});
export default Filter;
