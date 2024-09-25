import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default function SylhetRegionPage() {
  const [showCloudEndTransition, setShowCloudEndTransition] = useState(true); // Initially show the GIF

  useEffect(() => {
    // Hide the GIF after 1 seconds (adjust the time to the length of your animation)
    const timer = setTimeout(() => {
      setShowCloudEndTransition(false);
    }, 500); // 1000ms = 1 seconds

    // Clear the timer if the component is unmounted during the transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <View style={styles.container}>
        {showCloudEndTransition && (
          // Display the cloud transition ending GIF outside of the main content container
          <Image
            source={require("../assets/gifs/cloud-transition-end.gif")}
            style={styles.cloudTransition} // Apply the full-screen style
            resizeMode="cover" // Ensure the GIF covers the entire screen
          />
        )}
        {/* The main content of the page */}
        {!showCloudEndTransition && (
          <Text style={styles.text}>Welcome to Thamim's Elaka!</Text>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", // Adjust based on your design
  },
  cloudTransition: {
    width: height, // Full width of the screen
    height: width, // Full height of the screen
    position: "absolute", // Ensure it's positioned correctly
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
