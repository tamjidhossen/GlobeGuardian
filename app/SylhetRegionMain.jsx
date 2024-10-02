import React, {useState,useEffect} from 'react';
import { router } from 'expo-router';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, Animated, PanResponder,
    ImageBackground,
    ScrollView,
    Dimensions, // Import Dimensions to get the screen width
} from 'react-native'; 

const screenWidth = Dimensions.get('window').width; // Get device width

export default function Home() {

  const [sidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility
  const [sidebarAnim] = useState(new Animated.Value(-screenWidth)); // Sidebar starts off-screen

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
      const toValue = sidebarVisible ? - screenWidth : 0; // If visible, slide out; if hidden, slide in
      Animated.timing(sidebarAnim, {
        toValue,
        duration: 300, // Animation duration
        useNativeDriver: true,
      }).start();
      setSidebarVisible(!sidebarVisible); // Toggle visibility state
    };

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

      <Animated.View style={[styles.sidebar, { transform: [{ translateX: sidebarAnim }] }]}>
        {/* Extra Image in Sidebar */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/chatbox.png')} // Extra image visible in sidebar
            style={styles.extraImage}
          />
          {/* Hide button positioned on top of the chatbox */}
          <TouchableOpacity onPress={toggleSidebar} style={styles.hideButtonContainer}>
            <Image
              source={require('../assets/images/hidebutton.png')} // Replace with hide button image
              style={styles.hideButton} // Styling for hide button image
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
      
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
        <TouchableOpacity onPress={toggleSidebar} style={styles.communityIcon}>
          <Image
            source={require('../assets/images/community-icon.png')}
            
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
  // imageContainer: {
  //   width: 130,
  //   height: 150,
  //   position: 'absolute',
  // },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: screenWidth * 0.40, // Sidebar width is 40% of screen width
    zIndex: 1, // Ensure the sidebar is above the main content
    flexDirection: 'row',  // Horizontal alignment
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center',    // Center content vertically if needed
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Ensure it takes full width of the sidebar
  },
  extraImage: {
    position: 'relative',
    width: screenWidth * 0.40,
    height: '100%',
    marginTop: 0,
  },
  hideButtonContainer: {
    position: 'absolute',
    right: -15, // Adjust for padding from the right edge
    zIndex: 2, // Ensure it's above the chatbox

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
