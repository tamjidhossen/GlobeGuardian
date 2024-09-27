import React, { useState, useEffect } from 'react';
import { Image, View, Text, Modal, Dimensions, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router, useRouter } from 'expo-router';


const { width, height } = Dimensions.get("window");
export default function VillageScreen() {
  const navigation = useNavigation();
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false); // Initial state for modal visibility
  const [messageIndex, setMessageIndex] = useState(0);
  const [showCloudEndTransition, setShowCloudEndTransition] = useState(true); // State for showing cloud transition

  const messages = [
    'Welcome to the village!\nThis region in northeastern Bangladesh is famous for its beautiful green hills and rolling landscapes',
    'Sylhet has a subtropical highland climate. You can expect heavy rains during the monsoon.',
    'But watch out! Sylhet is prone to flooding and landslides, especially during the rainy season.'
  ];

  useEffect(() => {
    // Show the cloud transition for 1 second
    const cloudTransitionTimer = setTimeout(() => {
      setShowCloudEndTransition(false); // Hide the cloud transition after 1 second

      // After an additional 500ms, show the modal
      const modalTimer = setTimeout(() => {
        setModalVisible(true);
      }, 500);

      // Clear the modal timer on cleanup
      return () => clearTimeout(modalTimer);
    }, 10);

    // Clear the cloud transition timer on cleanup
    return () => clearTimeout(cloudTransitionTimer);
  }, []);

  const handleNextMessage = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex(messageIndex + 1);
    } else {
      setModalVisible(false); // Close the modal after the last message
      navigation.navigate('SylhetRegionMain'); // Navigate after all messages are read
    }
  };

  const handleSkip = () => {
    setModalVisible(false); // Close the modal immediately when skip is pressed
    navigation.navigate('SylhetRegionMain'); // Navigate immediately when skipped
  };

  return (
    <ImageBackground 
      source={require('../assets/images/village-1.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Show the cloud transition ending GIF if the state is true */}
        {showCloudEndTransition && (
          <Image
            source={require("../assets/gifs/cloud-transition-end.gif")}
            style={styles.cloudTransition}
            resizeMode="cover"
          />
        )}

        {/* Main content of the page, only show if cloud transition has ended */}
        

        {/* Modal for showing the messages */}
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)} // Required for Android back button
        >
          <View style={styles.modalOverlay}>
            <ImageBackground
              source={require('../assets/images/dialog-box.png')}
              style={styles.modalContent}
              resizeMode="contain"
            >
              <Text style={styles.messageText}>{messages[messageIndex]}</Text>

              {/* Buttons positioned in the bottom-right corner */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleNextMessage} style={styles.nextButton}>
                  <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
                  <Text style={styles.skipButtonText}>Skip</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push('/dataShow')}>
                  <Image
                    source={require('../assets/images/nasaDataBtn.png')}
                    style={styles.imageButton}
                  />
                
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 300,
    height: 200, // Adjust this to fit the dialog-box.png
    justifyContent: 'center',
    alignItems: 'center',
    right: 70,
    top: -60,
    padding: 20, // Adds padding around the content
  },
  messageText: {
    fontSize: 15,
    marginBottom: 20,
    padding:15,
    textAlign: 'left',
    color: '#212', // Text color
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 38, // Position the buttons 10 pixels from the bottom of the modal
    right: -40, // Position the buttons 10 pixels from the right of the modal
    flexDirection: 'row',
    margin: 0,
    width: 150,
  },
  nextButton: {
    padding: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  skipButton: {
    padding: 10,
    borderRadius: 5,
  },
  skipButtonText: {
    color: '#542e31',
    fontSize: 16,
  },
  imageButton: {
    top: 140,
    left: 120,
  },
  cloudTransition: {

    top: 0,
    left: 0,
    width:width,
    height: height, // Full height
    zIndex: 1, // Ensure it's above all other elements
  },
  text: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
});
