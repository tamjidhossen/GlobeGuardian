// components/LevelButton.jsx
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function LevelButton({ onPress, source, style }) {
  return (
	<TouchableOpacity onPress={onPress} style={[styles.button, style]}>
	  <Image source={source} style={styles.image} />
	</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
      // width: undefined, // Adjust the width as needed
      // height: undefined, // Adjust the height as needed
      // position: 'absolute',
      // bottom: 20, // Adjust the distance from the bottom as needed
      // right: 20,  // Adjust the distance from the right as needed
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    image: {
      width: 65, // Adjust the width as needed
      height: 65, // Adjust the height as needed
      resizeMode: "contain",
      // backgroundColor: "red"
    },
  });