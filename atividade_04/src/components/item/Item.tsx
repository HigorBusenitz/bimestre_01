import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Item {
  name: string;
  description: string;
  html_url: string;
}

const Item = ({name, description, html_url}: Item) => {
  return (
    <View style={styles.item}>
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>{html_url}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 4,
    fontSize: 18,
  },
});

export default Item;
