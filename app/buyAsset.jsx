import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Access screen width for responsive design

export default function WaterReservoirComponent() {
  const navigation = useNavigation(); // Use navigation instead of router

  return (
    <View style={styles.container}>
      {/* Left section: Water Reservoir Image Button */}
      <TouchableOpacity style={styles.imageButton} onPress={() => navigation.navigate('SylhetRegionMain')}>
        <ImageBackground
          source={require('../assets/images/Asset 6.png')}
          style={styles.imageBackground}
          resizeMode="contain"
        >
        </ImageBackground>
      </TouchableOpacity>

      {/* Right section: Text description and Buy button */}
      <View style={styles.descriptionWrapper}>
        <Text style={styles.descriptionText}>
          Vital for flood prevention, these wetlands act as a natural barrier,
          absorbing excess water and shielding your village from rising waters.
        </Text>

        {/* Positioning button below text */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.nasaButton}>
            <Text style={styles.nasaButtonText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#8B4513',
    padding: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageButton: {
    flex: 1,
    marginRight: 10,
  },
  imageBackground: {
    width: 200, // Increase width of the image
    height: 200, // Increase height of the image
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  descriptionWrapper: {
    flex: 2,
    paddingLeft: 10,
    justifyContent: 'space-between', // Space between text and button container
  },
  descriptionText: {
    color: 'white',
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'left',
  },
  buttonContainer: {
    alignItems: 'center', // Center the button horizontally within the container
    marginTop: 10, // Space between text and button
  },
  nasaButton: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 100,
    borderRadius: 12, // Rounded corners
    borderColor: '#8B4513',
    borderWidth: 2, // Border to add depth
    alignItems: 'center',
    shadowColor: '#000', // Black shadow color
    shadowOffset: { width: 0, height: 5 }, // Offset the shadow vertically
    shadowOpacity: 0.3, // Slight shadow opacity
    shadowRadius: 5, // Rounded shadow edges
    elevation: 10, // For Android shadow
  },
  nasaButtonText: {
    color: '#8B4513',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
