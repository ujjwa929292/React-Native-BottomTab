import { StyleSheet, Text, View } from 'react-native';
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f4f4f4'
    },
  });