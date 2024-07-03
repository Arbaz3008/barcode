import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button, StyleSheet } from 'react-native';
import CodeScanner  from './components/CodeScanner';
import Details from './components/Details';
import Search from './components/Search';
import History from './components/History';
import Share from './components/Share';
import Settings from './screens/Settings';
import { getProductDetails } from './data/product';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [product, setProduct] = useState(null);
  const [history, setHistory] = useState([]);

  const handleBarcodeScanned = (barcode, type) => {
    const Details = getProductDetails(barcode);
    setProduct(Details);
    setHistory((prevHistory) => [
      ...prevHistory,
      { barcode, date: new Date().toLocaleString() },
    ]);
  };

  const handleSearch = (query) => {
    const productDetails = getProductDetails(query);
    setProduct(productDetails);
  };

  return (
    <

View style={styles.container}>
      <Button title="Scan Barcode" onPress={() => navigation.navigate('Scanner', { onBarcodeScanned: handleBarcodeScanned })} />
      <Search onSearch={handleSearch} />
      <Details product={product} />
      {product && <Share barcode={product.name} />}
      <History history={history} />
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};
const Scanner= ({ route, navigation }) => {
  const { onBarcodeScanned } = route.params;

  return <Scanner onBarcodeScanned={(data, type) => {
    onBarcodeScanned(data, type);
    navigation.goBack();
  }} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scanner" component={CodeScanner} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default App;
