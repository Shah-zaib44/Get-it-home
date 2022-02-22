import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Snackbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthHeader from '../services/auth-header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from '@react-navigation/native';
import {Rating} from 'react-native-ratings';
const ReviewAndRating = ({navigation, route}) => {
  const {id, fullName, profileImage} = route.params;
  console.log(fullName);
  console.log(profileImage);
  const {colors} = useTheme();
  const [review, setReview] = React.useState('');
  const [rating, setRating] = React.useState(0);
  const [msg, setMsg] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const ratingCompleted = rating => {
    // console.log(rating);
    setRating(parseInt(rating));
  };
  const postReview = async e => {
    fetch(`http://10.0.2.2:8080/api/reviews/`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: id,
        review: review,
        rating: rating,
        fullName: fullName,
        profileImage: profileImage,
      }),
    })
      .then(response => response.json())
      .then(response => {
        setMsg('Data has been submitted successfully');
        onToggleSnackBar();
      })
      .catch(error => setMsg('There is some error while submitting data'));
  };

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'space-evenly',
        }}>
        <View>
          <Rating
            onFinishRating={ratingCompleted}
            style={{paddingVertical: 10}}
            imageSize={30}
          />

          <TextInput
            label="Review"
            value={review}
            onChangeText={review => setReview(review)}
            style={styles.input}
          />
          <Button
            style={{backgroundColor: colors.button}}
            mode="contained"
            onPress={e => postReview(e)}>
            Submit
          </Button>
          <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
            {msg}
          </Snackbar>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
  },
});
export default ReviewAndRating;
