import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation hook

export default function VillageScreen() {
  const navigation = useNavigation();  // Initialize the navigation hook
  const [modalVisible, setModalVisible] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    'Welcome to the village!',
    'Here, you can build and explore.',
    'Let\'s get started with the first task.'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageIndex(0);
      setModalVisible(true);
    }, 1000);
    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  const handleNextMessage = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex(messageIndex + 1);
    } else {
      setModalVisible(false); // Close the modal after the last message
      navigation.navigate('SylhetRegionMain'); // Navigate to VillageScreen-1 after all messages are read
    }
  };

  const handleSkip = () => {
    setModalVisible(false); // Close the modal immediately when skip is pressed
    navigation.navigate('SylhetRegionMain'); // Navigate to VillageScreen-1 immediately when skipped
  };

  return (
    <ImageBackground 
      source={require('../assets/images/village-1.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Modal for showing the messages */}
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)} // Required for Android back button
        >
          <View style={styles.modalOverlay}>
            <ImageBackground
              source={require('../assets/images/dialog-box.png')} // Dialog box image
              style={styles.modalContent}
              resizeMode="contain" // Ensure the image fits properly
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
    right:70,
    top:-60,
    padding: 20, // Adds padding around the content
  },
  messageText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000', // Text color
  },
  buttonContainer: {
    position: 'absolute',
    bottom: -103, // Position the buttons 10 pixels from the bottom of the modal
    right: -278,  // Position the buttons 10 pixels from the right of the modal
    flexDirection: 'row', // Arrange buttons in a row
    margin: 0,
    width: 150,  // Adjust the width for the two buttons
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginRight: 10, // Add some spacing between the "Next" and "Skip" buttons
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  skipButton: {
    backgroundColor: '#f44336', // Red for the skip button
    padding: 10,
    borderRadius: 5,
  },
  skipButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
