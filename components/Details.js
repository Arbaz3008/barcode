import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Details = ({ product }) => {
  if (!product) {
    return <Text style={styles.message}>Product not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: 'green',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Details;
