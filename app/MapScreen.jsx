import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions, ScrollView } from 'react-native';
import ImageButton from '../components/ImageButton';

const { width, height } = Dimensions.get('window');

export default function MapScreen() {

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground 
          source={require('../assets/images/bangla-map.jpg')} 
          style={styles.background}
          resizeMode="cover"
        />
      </ScrollView>
      
      <View style={styles.buttonContainer}>
        <ImageButton
          source={require('../assets/images/globeBtn.png')}
          onPress={() => { console.log('Button pressed'); }}
          style={styles.imageButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    width: width,
    height: 1000, // Height of the map image
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 5,
    right: 60,
  },
  imageButton: {
    width: 50,  // Adjust as needed
    height: 50, // Adjust as needed
  },
});