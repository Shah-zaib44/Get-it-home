import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthHeader = async () => {
  const user = await AsyncStorage.getItem('user');

  if (JSON.parse(user).token) {
    console.log('$inside user.token', JSON.parse(user).token);
    return {authorization: 'Bearer ' + JSON.parse(user).token};
  } else {
    return {};
  }
};
export default AuthHeader;
