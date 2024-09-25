import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SylhetRegionPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Thamim's Elaka!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
