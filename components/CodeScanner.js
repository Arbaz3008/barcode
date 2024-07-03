import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const Scanner = ({ navigation, route }) => {
  const { onBarcodeScanned } = route.params;
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    if (scanned) {
      navigation.goBack(); // Example: Navigate back after scanning
    }
  }, [scanned]);

  const handleBarCodeScanned = ({ type, data }) => {
    if (!scanned) {
      setScanned(true);
      onBarcodeScanned(data, type);
    }
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <View style={styles.barcodeDataContainer}>
          <Text style={styles.barcodeDataText}>
            Barcode Data: {barcodeData.data}
          </Text>
          <Text style={styles.barcodeTypeText}>
            Barcode Type: {barcodeData.type}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barcodeDataContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 5,
  },
  barcodeDataText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  barcodeTypeText: {
    fontSize: 14,
  },
});

export default Scanner;
