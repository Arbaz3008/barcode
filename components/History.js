import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ScanHistory = ({ history }) => {
  return (
    <FlatList
      data={history}
      keyExtractor={(item) => item.barcode}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.barcode}</Text>
          <Text style={styles.text}>{item.date}</Text>
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
    item: {
      padding: 10,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    text: {
      fontSize: 16,
    },
  });
  
  export default ScanHistory;
  