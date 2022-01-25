import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {Rating} from 'react-native-ratings';
import {Appbar, TextInput, Button, Chip} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
        <Appbar.Header>
          <Icon
            size={20}
            color={'white'}
            name="chevron-left"
            onPress={() => {}}
          />
          <Appbar.Content title="Filter" />
        </Appbar.Header>
        <View style={styles.container}>
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

          <MultiSlider
            values={[this.state.values[0], this.state.values[1]]}
            sliderLength={280}
            onValuesChange={this.multiSliderValuesChange}
            min={0}
            max={10}
            step={1}
          />

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

          <Text>Type</Text>
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
  button: {width: '90%'},
  input: {
    textAlign: 'center',
    width: '90%',
    backgroundColor: 'white',
  },
});
export default Filter;
