import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // For responsive design

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

        <TouchableOpacity style={styles.nasaButton}>
          <Text style={styles.nasaButtonText}>Buy</Text>
        </TouchableOpacity>
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
    width: 140,
    height: 140,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageTextWrapper: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  imageText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  priceTag: {
    backgroundColor: 'green',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: 'absolute',
    bottom: 5,
  },
  priceText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionWrapper: {
    flex: 2,
    paddingLeft: 10,
  },
  descriptionText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'left',
  },
  nasaButton: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  nasaButtonText: {
    color: '#8B4513',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
