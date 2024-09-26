import React, {useState} from 'react';
import { router } from 'expo-router';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, Animated, PanResponder,
    ImageBackground,
    ScrollView,
    Dimensions, // Import Dimensions to get the screen width
} from 'react-native'; 

export default function Home() {
  const [pan] = useState(new Animated.ValueXY());

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      pan.flattenOffset();
    },
  });

  const screenWidth = Dimensions.get('window').width; // Get device width

  return (
    <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <ImageBackground
            source={require("../assets/images/sylhet-map.png")}
            style={[styles.background, { width: screenWidth }]} // Use screenWidth for the background width
            resizeMode="cover"
          />
        </ScrollView>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.imageContainer]}
      >
        <Image
          source={require('../assets/images/water-resovoir.png')}
          style={styles.image}
        />
      </Animated.View>
      <View style={styles.assetButton}>
        <TouchableOpacity onPress={() => { router.push('/assetShow'); }} style={styles.shopButton}>
          <Image
            source={require('../assets/images/shop-icon.png')}
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
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  background: {
    flex: 1,
    height: 693, // Adjust as needed for your map's height
    justifyContent: "center",
    alignItems: "center",
  },
  assetButton: {
    position: 'absolute',
    bottom: 20,
    left: 160,
  },
  shopButton: {
    bottom: -5,
    left: 470,
    
  },
});
