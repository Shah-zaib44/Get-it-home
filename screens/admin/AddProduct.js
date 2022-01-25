import * as React from 'react';

import {Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {TextInput, Button, List} from 'react-native-paper';

const AddProduct = () => {
  const [text, setText] = React.useState('');
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <TextInput
            label="Product Name"
            value={text}
            onChangeText={text => setText(text)}
            style={styles.input}
          />
          <TextInput
            label="Product Description"
            value={text}
            onChangeText={text => setText(text)}
            style={styles.input}
          />
          <Text style={styles.text}> Product Image</Text>
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            Upload Image
          </Button>
          <List.Section title="Category">
            <List.Accordion
              title="Select Category"
              expanded={expanded}
              onPress={handlePress}>
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
          </List.Section>
          <List.Section title="Colour">
            <List.Accordion
              title="Colour"
              expanded={expanded}
              onPress={handlePress}>
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
          </List.Section>
          <List.Section title="Type">
            <List.Accordion
              title="Type"
              expanded={expanded}
              onPress={handlePress}>
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
          </List.Section>
          <List.Section title="Brand">
            <List.Accordion
              title="Brand"
              expanded={expanded}
              onPress={handlePress}>
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
          </List.Section>
          <List.Section title="Warranty Type">
            <List.Accordion
              title="Warranty Type"
              expanded={expanded}
              onPress={handlePress}>
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
          </List.Section>
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            Submit
          </Button>
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
