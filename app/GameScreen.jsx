// app/GameScreen.jsx
import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import ImageButton from '../components/ImageButton';

export default function GameScreen() {
    return (
        <ImageBackground source={require('../assets/images/bangla-map.jpg')} style={styles.background}>
            <View style={styles.buttonContainer}>
                <ImageButton
                    source={require('../assets/images/globeBtn.png')}  // Corrected file extension
                    onPress={() => { console.log('Button 1 pressed'); }}
                    style={styles.imageButton}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
    },
    imageButton: {
      // Additional styles if needed
    },
  });