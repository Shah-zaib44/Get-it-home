import * as React from 'react';

import {View, StyleSheet, ScrollView, Image} from 'react-native';
import AuthHeader from './../../services/auth-header';
import {TextInput, Button, List, Snackbar, Text} from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';
import {brands, colours, warrantyTypes, categories} from '../../data';
import {SafeAreaView} from 'react-native-safe-area-context';
const AddProduct = () => {
  const [category, setCategory] = React.useState('Select Category');
  const [colour, setColour] = React.useState('Select Colour');
  const [brand, setBrand] = React.useState('Select Brand');
  const [warrantyType, setWarrantyType] = React.useState(
    'Select Warranty Type',
  );

  const [expandedCategory, setExpandedCategory] = React.useState(false);
  const [expandedColour, setExpandedColour] = React.useState(false);
  const [expandedBrand, setExpandedBrand] = React.useState(false);
  const [expandedwarrantyType, setExpandedwarrantyType] = React.useState(false);
  const handlePressCategory = () => setExpandedCategory(!expandedCategory);
  const handlePressColour = () => setExpandedColour(!expandedColour);
  const handlePressBrand = () => setExpandedBrand(!expandedBrand);
  const handlePresswarrantyType = () =>
    setExpandedwarrantyType(!expandedwarrantyType);
  const [productImage, setproductImage] = React.useState([]);
  const chooseImage = e => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.assets[0].uri) {
        setproductImage(prevState => [...prevState, response.assets[0].uri]);
      }
    });
  };
  console.log('res:', productImage);
  const [productName, setproductName] = React.useState('');
  const [productDescription, setproductDescription] = React.useState('');
  const [productPrice, setproductPrice] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [msg, setMsg] = React.useState('');
  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const addProduct = async e => {
    console.log(await AuthHeader());
    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    headers = {...headers, ...(await AuthHeader())};
    console.log(headers);
    fetch('http://10.0.2.2:8080/api/products', {
      method: 'POST',
      mode: 'no-cors',

      headers,
      body: JSON.stringify({
        productName: productName,
        productPrice: productPrice,
        productDescription: productDescription,
        productImage: productImage,
        category: category,
        colour: colour,
        brand: brand,
        warrantyType: warrantyType,
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
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <TextInput
            label="Product Name"
            value={productName}
            onChangeText={productName => setproductName(productName)}
            style={styles.input}
          />
          <TextInput
            label="Product Price"
            value={productPrice}
            onChangeText={productPrice => setproductPrice(productPrice)}
            style={styles.input}
          />
          <TextInput
            label="Product Description"
            value={productDescription}
            onChangeText={productDescription =>
              setproductDescription(productDescription)
            }
            style={styles.input}
          />
          <Text style={styles.text}> Product Image</Text>
          <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            {productImage.length > 0 &&
              productImage.map((productImage, index) => {
                return (
                  <Image
                    key={index}
                    source={{uri: productImage}}
                    style={{margin: 5, width: 100, height: 100}}
                  />
                );
              })}
          </View>
          <Button mode="contained" onPress={e => chooseImage(e)}>
            Upload Image
          </Button>
          <List.Section title="Category">
            <List.Accordion
              style={styles.input}
              title={category}
              expanded={expandedCategory}
              onPress={handlePressCategory}>
              {categories.map((category, index) => {
                return (
                  <List.Item
                    onPress={e => {
                      setCategory(category.title);
                      handlePressCategory();
                    }}
                    key={index}
                    title={category.title}
                  />
                );
              })}
            </List.Accordion>
          </List.Section>
          <List.Section title="Colour">
            <List.Accordion
              style={styles.input}
              title={colour}
              expanded={expandedColour}
              onPress={handlePressColour}>
              {colours.map((colour, index) => {
                return (
                  <List.Item
                    onPress={e => {
                      setColour(colour.title);
                      handlePressColour();
                    }}
                    key={index}
                    title={colour.title}
                  />
                );
              })}
            </List.Accordion>
          </List.Section>

          <List.Section title="Brand">
            <List.Accordion
              style={styles.input}
              title={brand}
              expanded={expandedBrand}
              onPress={handlePressBrand}>
              {brands.map((brand, index) => {
                return (
                  <List.Item
                    onPress={e => {
                      setBrand(brand.title);
                      handlePressBrand();
                    }}
                    key={index}
                    title={brand.title}
                  />
                );
              })}
            </List.Accordion>
          </List.Section>
          <List.Section title="Warranty Type">
            <List.Accordion
              style={styles.input}
              title={warrantyType}
              expanded={expandedwarrantyType}
              onPress={handlePresswarrantyType}>
              {warrantyTypes.map((warrantyType, index) => {
                return (
                  <List.Item
                    onPress={e => {
                      setWarrantyType(warrantyType.title);
                      handlePresswarrantyType();
                    }}
                    key={index}
                    title={warrantyType.title}
                  />
                );
              })}
            </List.Accordion>
          </List.Section>
          <Button mode="contained" onPress={e => addProduct(e)}>
            Submit
          </Button>
          <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
            {msg}
          </Snackbar>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  input: {
    backgroundColor: 'white',
  },
  text: {
    marginVertical: 10,
  },
});
export default AddProduct;
