import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Dimensions, ScrollView } from 'react-native';
import ImageButton from '../components/ImageButton';
import LevelButton from '../components/LevelButton';
import GlobePopup from '../components/GlobePopup'; // Import GlobePopup

const { width, height } = Dimensions.get('window');

export default function MapScreen() {
  const [isGlobePopupVisible, setGlobePopupVisible] = useState(false); // State for popup visibility

  const openGlobePopup = () => {
    setGlobePopupVisible(true); // Show the popup
  };

  const closeGlobePopup = () => {
    setGlobePopupVisible(false); // Hide the popup
  };

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
        {/* Globe button to open popup */}
        <ImageButton
          source={require('../assets/images/globeBtn.png')}
          onPress={openGlobePopup}  // Open the popup on press
          style={styles.imageButton}
        />
      </View>
      
      {/* Progress bar */}
      <View style={styles.progressBarContainer}>
        <ImageBackground 
          source={require('../assets/images/progress-bar.png')} 
          style={styles.progressBarContainer}
          resizeMode="contain"
        />
        <LevelButton
          source={require('../assets/images/progress-bar-btn1.png')}
          onPress={() => { console.log('level1 pressed'); }}
          style={styles.level1Btn}
        />
      </View>

      {/* Globe popup modal */}
      {isGlobePopupVisible && (
        <GlobePopup 
          closePopup={closeGlobePopup}  // Pass the close function to the popup
        />
      )}
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
  level1Btn: {
    position: 'absolute',  // Ensure this is absolutely positioned
    top: 10,  // Adjust this value to fine-tune alignment with the button in the progress bar
    left: '19.7%',  // Adjust the horizontal alignment to match the first button
    backgroundColor: 'transparent' // Make sure there's no conflicting background
  }
});
