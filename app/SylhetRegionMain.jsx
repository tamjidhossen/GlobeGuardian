import React, {useState} from 'react';
import { router } from 'expo-router';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, Animated, PanResponder } from 'react-native'; // Import StyleSheet

export default function Home() {
  const [pan] = useState(new Animated.ValueXY());

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      // Store the current position when the gesture starts
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 }); // Reset the animated values
    },
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      // Flatten the offset so it resets after each release
      pan.flattenOffset();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.imageContainer]}
      >
        <Image
          source={require('../assets/images/Asset 6.png')}
          style={styles.image}
        />
      </Animated.View>
      <View style={styles.assetButton}>
        <TouchableOpacity onPress={() => { router.push('/assetShow'); }} style={styles.ImageButton}>
          <Image
            source={require('../assets/images/globeBtn.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: 130,
    height: 150,
    position: 'absolute', // Allows the image to move freely
  },
  image: {
    width: '100%',
    height: '100%',
  },
  assetButton: {
    position: 'absolute',
    bottom: 20,
    left: 160,
  },
  ImageButton: {
    // Add any additional styles for the ImageButton if needed
  },
});

