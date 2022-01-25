import * as React from 'react';
import {View} from 'react-native';
import {BottomNavigation, Text} from 'react-native-paper';
import Account from './Account';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Home = () => {
  const HomeRoute = () => <Text>Home</Text>;

  const CartRoute = () => <Text>Cart</Text>;

  const ExploreRoute = () => <Text>Explore</Text>;
  const OfferRoute = () => <Text>Offer</Text>;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      icon: props => <Icon {...props} name="home" />,
    },
    {
      key: 'explore',
      title: 'Explore',
      icon: props => <Icon {...props} name="search" />,
    },
    {
      key: 'cart',
      title: 'Cart',
      icon: props => <Icon {...props} name="shopping-cart" />,
    },
    {
      key: 'offer',
      title: 'Offer',
      icon: props => <Icon {...props} name="tag" />,
    },
    {
      key: 'account',
      title: 'Account',
      icon: props => <Icon {...props} name="user" />,
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    explore: ExploreRoute,
    cart: CartRoute,
    offer: OfferRoute,
    account: Account,
  });

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <BottomNavigation
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </View>
    </>
  );
};

export default Home;
