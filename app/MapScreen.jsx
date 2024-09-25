import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions, ScrollView } from 'react-native';
import ImageButton from '../components/ImageButton';
import LevelButton from '../components/LevelButton';

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
      
      <View style={styles.globeButtonContainer}>
        <ImageButton
          source={require('../assets/images/globeBtn.png')}
          onPress={() => { console.log('Globe vis Button pressed'); }}
          style={styles.imageButton}
        />
      </View>
      <View style={styles.progressBarContainer}>
        <ImageBackground 
          source={require('../assets/images/progress-bar.png')} 
          style={styles.progressBarContainer}
          resizeMode="contain"
        />
        <LevelButton
          source={require('../assets/images/progress-bar-btn1.png')}
          onPress={() => { console.log('level1 pressed'); }}
          style={styles.leve1Btn}
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
  globeButtonContainer: {
    position: 'absolute',
    bottom: 5,
    right: 60,
  },
  imageButton: {
    width: 50,  // Adjust as needed
    height: 50, // Adjust as needed
  },
  progressBarContainer : {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leve1Btn: {
    position: 'absolute',  // Ensure this is absolutely positioned
    top: 10,  // Adjust this value to fine-tune alignment with the button in the progress bar
    left: '19.7%',  // Adjust the horizontal alignment to match the first button
    zIndex: 1,  // Ensure it's on top of other components
    backgroundColor: 'transparent' // Make sure there's no conflicting background
  }
});