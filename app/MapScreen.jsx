import React, { useState } from "react";
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import ImageButton from "../components/ImageButton";
import LevelButton from "../components/LevelButton";
import GlobePopup from "../components/GlobePopup"; // Import GlobePopup
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function MapScreen() {
  const [isGlobePopupVisible, setGlobePopupVisible] = useState(false); // State for popup visibility
  const [showCloudTransition, setShowCloudTransition] = useState(false); // For animation
  const router = useRouter(); // Initialize the router

  const openGlobePopup = () => {
    setGlobePopupVisible(true); // Show the popup
  };

  const closeGlobePopup = () => {
    setGlobePopupVisible(false); // Hide the popup
  };

  // In your MapScreen component where you are navigating:
const handleLevel1Press = () => {
  setShowCloudTransition(true); // Show cloud transition

  // Simulate cloud transition time (2 seconds), then navigate
  setTimeout(() => {
    setShowCloudTransition(false); // Hide cloud transition
    router.push({
      pathname: "/SylhetRegion", 
      params: {}, // If you have params to pass
      options: {
        animation: 'none', // Disable the transition animation
      },
    });
  }, 500); // Adjust the duration for your cloud animation
};

  return (
    <>
      {/* Cloud transition overlay */}
      {showCloudTransition && (
        <Image
          source={require("../assets/gifs/cloud-transition-start.gif")}
          style={styles.cloudTransition} // Full-screen style
          resizeMode="cover"
        />
      )}
      
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <ImageBackground
            source={require("../assets/images/bangla-map.jpg")}
            style={styles.background}
            resizeMode="cover"
          />
        </ScrollView>

        <View style={styles.globeButtonContainer}>
          {/* Globe button to open popup */}
          <ImageButton
            source={require("../assets/images/globeBtn.png")}
            onPress={openGlobePopup} // Open the popup on press
            style={styles.imageButton}
          />
        </View>

        {/* Progress bar */}
        <View style={styles.progressBarContainer}>
          <ImageBackground
            source={require("../assets/images/progress-bar.png")}
            style={styles.progressBarContainer}
            resizeMode="contain"
          />
          <LevelButton
            source={require("../assets/images/progress-bar-btn1.png")}
            onPress={handleLevel1Press}
            style={styles.level1Btn}
          />
        </View>

        {/* Globe popup modal */}
        {isGlobePopupVisible && (
          <GlobePopup
            closePopup={closeGlobePopup} // Pass the close function to the popup
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    width: width, // Full width of the screen in landscape mode
    height: 1000, // Height of the map image
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    height: 1030, // Adjust as needed for your map's height
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  globeButtonContainer: {
    position: "absolute",
    bottom: 5,
    right: 60,
  },
  imageButton: {
    width: 50, // Adjust as needed
    height: 50, // Adjust as needed
  },
  progressBarContainer: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  cloudTransition: {
    position: "absolute",
    top: 0,
    left: 0,
    width: height, // Full width
    height: width, // Full height
    zIndex: 1, // Ensure it's above all other elements
    backgroundColor: "transparent", // Make sure no unwanted background shows
  },
  level1Btn: {
    position: "absolute", // Ensure this is absolutely positioned
    top: 10, // Adjust this value to fine-tune alignment with the button in the progress bar
    left: "16.7%", // Adjust the horizontal alignment to match the first button
    // zIndex: 1,  // Ensure it's on top of other components
    backgroundColor: "transparent", // Make sure there's no conflicting background
  },
});
