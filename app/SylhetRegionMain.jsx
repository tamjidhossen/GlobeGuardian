import React, {useState,useEffect} from 'react';
import { router } from 'expo-router';
import * as Font from 'expo-font';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, Animated, PanResponder,
    ImageBackground,
    ScrollView,
    Dimensions, // Import Dimensions to get the screen width
} from 'react-native'; 

export default function Home() {
  // const [fontLoaded, setFontLoaded] = useState(false);
  // useEffect(() => {
  //   async function loadFont() {
  //     await Font.loadAsync({
  //       'Kavoon-Regular': require('../assets/fonts/Kavoon-Regular.ttf'),
  //     });
  //     setFontLoaded(true);
  //   }

  //   loadFont();
  // }, []);
//   const [pan] = useState(new Animated.ValueXY());

//   const panResponder = PanResponder.create({
//     onMoveShouldSetPanResponder: () => true,
//     onPanResponderGrant: () => {
//       pan.setOffset({
//         x: pan.x._value,
//         y: pan.y._value,
//       });
//       pan.setValue({ x: 0, y: 0 });
//     },
//     onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
//       useNativeDriver: false,
//     }),
//     onPanResponderRelease: () => {
//       pan.flattenOffset();
//     },
//   });

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
      {/* <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.imageContainer]}
      >
        <Image
          source={require('../assets/images/water-resovoir.png')}
          style={styles.image}
        />
      </Animated.View> */}
      
      <View style={styles.assetButton}>
        <TouchableOpacity onPress={() => { router.push('/assetShow'); }} style={styles.shopButton}>
          <Image
            source={require('../assets/images/shop-icon.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.assetButton}>
          <Image
            source={require('../assets/images/village-progress-bar.png')}
            style={styles.progessBar}
          />
      </View>
      
      <View style={styles.assetButton}>
          <Image
            source={require('../assets/images/coin-board.png')}
            style={styles.coinBoard}
          />
          <Text style={styles.coinBoardText}>500</Text>
      </View>
      <View style={styles.assetButton}>
        <TouchableOpacity >
          <Image
            source={require('../assets/images/community-icon.png')}
            style={styles.communityIcon}
          />
        </TouchableOpacity>  
      </View>
      <View style={styles.assetButton}>
       <TouchableOpacity >
          <Image
            source={require('../assets/images/home-icon.png')}
            style={styles.homeIcon}
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
  progessBar:{
    bottom: 272,
    right:170,
  },
  communityIcon:{
    right:170,
    bottom:50,
  },
  homeIcon:{
    right:170,
    top:10,
  },
  coinBoard:{
    bottom:230,
    left:400,
  },
  coinBoardText:{
    bottom:295,
    left:450,
    bold:true,
    fontSize:25,
    color:'#eee',
    fontWeight: 'bold',
    // fontFamily:'Kavoon-Regular',
    },

});
