import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Settings = () => {
  const [highResolution, setHighResolution] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.text}>High Resolution Camera</Text>
        <Switch
          value={highResolution}
          onValueChange={setHighResolution}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    setting: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    text: {
      fontSize: 16,
    },
  });
  
  export default Settings;
  