import React from 'react';
import { View, ImageBackground, StyleSheet,StatusBar, } from 'react-native';

export default function VillageScreen() {
  return (
    
    <ImageBackground 
      source={require('../assets/images/village-1.png')} 
      style={styles.background}
      resizeMode="cover" // Ensure the image scales correctly
    >
      <View style={styles.buttonContainer}>
        {/* Add your button or content here */}
        <StatusBar hidden/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,                // Make sure the background covers the entire screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    // Your button container styles
  },
});