import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons
import BarChartDivisionRain from './bar_chart_division_rain';

const { width, height } = Dimensions.get("window");

export default function GlobePopup({ closePopup }) {
  // Track the current popup
  const [currentPopup, setCurrentPopup] = useState("main");

  // Function to handle back to the main popup
  const handleBackToMain = () => {
    setCurrentPopup("main");
  };

  // Function to open the GLOBE website
  const handleContributeClick = () => {
    Linking.openURL("https://www.globe.gov/");
  };

  // Main popup content
  const renderMainPopup = () => (
    <View>
      <Text style={styles.title}>GLOBE Visualization System</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => setCurrentPopup("atmosphere")}
        >
          <Image
            source={require("../assets/images/atmosphere-sec.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => setCurrentPopup("biosphere")}
        >
          <Image
            source={require("../assets/images/biosphere-sec.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => setCurrentPopup("hydrosphere")}
        >
          <Image
            source={require("../assets/images/hydrosphere-sec.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => setCurrentPopup("pedosphere")}
        >
          <Image
            source={require("../assets/images/pedosphere-sec.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  // Atmosphere popup content with more buttons
  const renderAtmospherePopup = () => (
    <View>
      <Text style={styles.title}>Atmosphere Data</Text>
      {/* Align all four buttons in a single row */}
      <View style={styles.singleButtonRow}>
        <TouchableOpacity
          style={styles.prettyButton}
          onPress={() => console.log("Air Temperature pressed")}
        >
          <Image
            source={require("../assets/images/air-temp-btn.png")}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.prettyButton}
          onPress={() => console.log("Clouds pressed")}
        >
          <Image
            source={require("../assets/images/clouds-btn.png")}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.prettyButton}
          onPress={() => setCurrentPopup("precipitation")}
        >
          <Image
            source={require("../assets/images/precipitation-btn.png")}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.prettyButton}
          onPress={() => console.log("Humidity pressed")}
        >
          <Image
            source={require("../assets/images/humidity-btn.png")}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
  
      {/* Contribute to GLOBE Data button */}
      <View style={styles.contributeButtonContainer}>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.globe.gov/")}
        >
          <Image
            source={require("../assets/images/contributation-to-globe-btn.png")}
            style={styles.contributionBtn}
          />
        </TouchableOpacity>
      </View>

  
      {/* Back button with an icon */}
      <TouchableOpacity onPress={handleBackToMain} style={styles.backButtonIcon}>
        <Icon name="arrow-left" size={20} color="#8B4513" />
      </TouchableOpacity>
    </View>
  );

  const renderPrecipitationPopup = () => (
    <View>
      <Text style={styles.title}>How Much Rain Per Region</Text>
      <Image
        source={require('../assets/images/bd-rain-chart.png')}
        style={styles.chartImage}
        resizeMode="contain"
      />
      <TouchableOpacity
        onPress={handleBackToMain}
        style={styles.backButtonIcon}
      >
        <Icon name="arrow-left" size={20} color="#8B4513" />
      </TouchableOpacity>
    </View>
  );

  // Similar popups for other categories like Biosphere, Hydrosphere, etc.
  const renderBiospherePopup = () => (
    <View>
      <Text style={styles.title}>Biosphere Data</Text>
      <Image
        source={require('../assets/images/bd-rain-chart.png')}
        style={styles.chartImage}
        resizeMode="contain"
      />
      <TouchableOpacity
        onPress={handleBackToMain}
        style={styles.backButtonIcon}
      >
        <Icon name="arrow-left" size={20} color="#8B4513" />
      </TouchableOpacity>
    </View>
  );

  // Render popup content based on state
  const renderPopupContent = () => {
    switch (currentPopup) {
      case "main":
        return renderMainPopup();
      case "atmosphere":
        return renderAtmospherePopup();
      case "biosphere":
        return renderBiospherePopup();
      case "precipitation":
        return renderPrecipitationPopup();
      // Add more cases for other popups (hydrosphere, pedosphere, etc.)
      default:
        return renderMainPopup();
    }
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.popupContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={closePopup}>
          <View style={styles.closeCircle}>
            <Text style={styles.closeText}>X</Text>
          </View>
        </TouchableOpacity>

        {/* Render dynamic content based on the popup state */}
        {renderPopupContent()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  popupContainer: {
    width: width * 0.9,
    height: height * 0.8,
    backgroundColor: "#8B4513",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "white",
    padding: 20,
    alignItems: "center",
    position: "relative",
    
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  closeCircle: {
    backgroundColor: "white",
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  closeText: {
    fontSize: 20,
    color: "#8B4513",
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,

    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
    top: -10,
  },
  buttonIcon:{
    height:100,
    width:100,
  },
  
  imageButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  // Pretty button styling for the smaller buttons like 'Precipitation'
  singleButtonRow: {
    flexDirection: "row",
    justifyContent: "space-around", // Distributes buttons evenly
    alignItems: "center",
    width: "100%",
    marginVertical: 20, // Adjust spacing as needed
    paddingHorizontal: 5,
  },

  prettyButton: {
    flex: 1,
    backgroundColor: "transparent", // Button background color
    
    justifyContent: "center",
    alignItems: "center",
   
    
  },

  // Adjusted button icon styling for a uniform size
  buttonIcon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },

  contributeButton: {
    flexDirection: "row",
    
    
    borderRadius: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.8,
    borderColor: "white",
    borderWidth: 4,
  },

  backButtonIcon: {
    position: "absolute",
    top: -10,
    left: -10,
    backgroundColor: "white",
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  contributeButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  contributionBtn: {
    height: 54,
    width: 500,
    resizeMode: "contain",
  },

  contributeText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  globeIcon: {
    marginRight: 10,
  },
  chartImage: {
    width: height * 0.7,
    height: width * 0.6,
    borderRadius: 100,
    alignItems: "center",
    position: "relative",
  },
});
