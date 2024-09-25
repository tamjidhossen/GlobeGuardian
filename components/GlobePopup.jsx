import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function GlobePopup({ closePopup }) {
  return (
    <View style={styles.overlay}>
      {/* Popup container */}
      <View style={styles.popupContainer}>
        {/* Close button */}
        <TouchableOpacity style={styles.closeButton} onPress={closePopup}>
            <View style={styles.closeCircle}>
                <Text style={styles.closeText}>X</Text>
            </View>
        </TouchableOpacity>
        
        {/* Popup title */}
        <Text style={styles.title}>GLOBE Visualization System</Text>

        {/* 1st Row of buttons */}
        <View style={styles.buttonRow}>
          {/* Atmosphere button */}
          <TouchableOpacity style={styles.imageButton} onPress={() => console.log('Atmosphere pressed')}>
            <Image 
              source={require('../assets/images/atmosphere-sec.png')} 
              style={styles.image}
            />
            {/* <Text style={styles.buttonText}>Atmosphere</Text> */}
          </TouchableOpacity>

          {/* Biosphere button */}
          <TouchableOpacity style={styles.imageButton} onPress={() => console.log('Biosphere pressed')}>
            <Image 
              source={require('../assets/images/biosphere-sec.png')} 
              style={styles.image}
            />
            {/* <Text style={styles.buttonText}>Biosphere</Text> */}
          </TouchableOpacity>
        </View>

        {/* Second row of buttons */}
        <View style={styles.buttonRow}>
          {/* Hydrosphere button */}
          <TouchableOpacity style={styles.imageButton} onPress={() => console.log('Hydrosphere pressed')}>
            <Image 
              source={require('../assets/images/hydrosphere-sec.png')} 
              style={styles.image}
            />
            {/* <Text style={styles.buttonText}>Hydrosphere</Text> */}
          </TouchableOpacity>

          {/* Lithosphere button */}
          <TouchableOpacity style={styles.imageButton} onPress={() => console.log('Lithosphere pressed')}>
            <Image 
              source={require('../assets/images/pedosphere-sec.png')} 
              style={styles.image}
            />
            {/* <Text style={styles.buttonText}>Pedosphere</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: width * 0.9,
    height: height * 0.8,
    backgroundColor: '#8B4513', // Brown background as per your design
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'white',
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  closeCircle: {
    backgroundColor: 'white',
    width: 30,  // Adjust the size of the circle
    height: 30, // Adjust the size of the circle
    borderRadius: 20,  // Makes the shape circular
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    fontSize: 20,
    color: '#8B4513',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
    top: -10,
  },
  imageButton: {
    flex: 1,    
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    // backgroundColor: 'white',

  },
  image: {
    width: 200,  // Adjust this size as necessary
    height: 100, // Adjust this size as necessary
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  }
});
