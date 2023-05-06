import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AddScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AddScreen</Text>
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
