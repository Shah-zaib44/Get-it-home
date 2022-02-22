import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  DataTable,
  ActivityIndicator,
  Colors,
  Snackbar,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';
const ViewCoupon = ({navigation}) => {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [visible, setVisible] = React.useState(false);
  const [msg, setMsg] = React.useState('');
  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const viewCoupon = () => {
    fetch('http://10.0.2.2:8080/api/coupons')
      .then(response => response.json())
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(error => console.error(error));
  };
  const toggleShowEdit = data => {
    navigation.navigate('EditCoupon', {
      data: data,
    });
  };
  const deleteCoupon = id => {
    fetch(`http://10.0.2.2:8080/api/coupons/${id}`, {
      method: 'DELETE',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        setMsg('Data has been deleted successfully');
        onToggleSnackBar();
        viewCoupon();
      })
      .catch(error => setMsg('There is some error while deleting data'));
  };
  React.useEffect(() => {
    viewCoupon();
    const willFocusSubscription = navigation.addListener('focus', () => {
      viewCoupon();
    });

    return willFocusSubscription;
  }, []);
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.container}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Id</DataTable.Title>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title>Code</DataTable.Title>
              <DataTable.Title>Amount</DataTable.Title>
              <DataTable.Title>Edit</DataTable.Title>
              <DataTable.Title>Delete</DataTable.Title>
            </DataTable.Header>
            {isLoading ? (
              <ActivityIndicator
                size={'large'}
                animating={true}
                color={Colors.red800}
              />
            ) : (
              data.map((data, index) => {
                index = index + 1;
                return (
                  <DataTable.Row key={index}>
                    <DataTable.Cell>{index}</DataTable.Cell>
                    <DataTable.Cell>{data.name}</DataTable.Cell>
                    <DataTable.Cell>{data.code}</DataTable.Cell>
                    <DataTable.Cell>{data.amount}</DataTable.Cell>

                    <DataTable.Cell>
                      <Icon name="edit" onPress={() => toggleShowEdit(data)} />
                    </DataTable.Cell>
                    <DataTable.Cell>
                      {' '}
                      <Icon
                        name="trash"
                        onPress={() => deleteCoupon(data.id)}
                      />
                    </DataTable.Cell>
                  </DataTable.Row>
                );
              })
            )}
          </DataTable>
          <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
            {msg}
          </Snackbar>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 1,
  },
});
export default ViewCoupon;
