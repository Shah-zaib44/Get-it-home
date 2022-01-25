import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
const ViewCoupon = () => {
  const optionsPerPage = [2, 3, 4];
  const [page, setPage] = React.useState(Number(0));
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <>
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

          <DataTable.Row>
            <DataTable.Cell>0</DataTable.Cell>
            <DataTable.Cell>FIRST</DataTable.Cell>
            <DataTable.Cell>24980</DataTable.Cell>
            <DataTable.Cell>100</DataTable.Cell>

            <DataTable.Cell>
              <Icon name="edit" />
            </DataTable.Cell>
            <DataTable.Cell>
              {' '}
              <Icon name="trash" />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>0</DataTable.Cell>
            <DataTable.Cell>FIRST</DataTable.Cell>
            <DataTable.Cell>24980</DataTable.Cell>
            <DataTable.Cell>100</DataTable.Cell>

            <DataTable.Cell>
              <Icon name="edit" />
            </DataTable.Cell>
            <DataTable.Cell>
              {' '}
              <Icon name="trash" />
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>0</DataTable.Cell>
            <DataTable.Cell>FIRST</DataTable.Cell>
            <DataTable.Cell>24980</DataTable.Cell>
            <DataTable.Cell>100</DataTable.Cell>

            <DataTable.Cell>
              <Icon name="edit" />
            </DataTable.Cell>
            <DataTable.Cell>
              {' '}
              <Icon name="trash" />
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 1,
    flex: 1,
    backgroundColor: 'white',
  },
});
export default ViewCoupon;
