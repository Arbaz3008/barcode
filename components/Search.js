import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter product barcode"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
    },
    input: {
      flex: 1,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10,
      marginRight: 10,
    },
  });
  
  export default Search;
  