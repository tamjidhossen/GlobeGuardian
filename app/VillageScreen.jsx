import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, ImageBackground, StyleSheet, StatusBar } from 'react-native';

export default function VillageScreen() {
  const [modalVisible, setModalVisible] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    'Welcome to the village!',
    'Here, you can build and explore.',
    'Let\'s get started with the first task.'
  ];

  // Show the first message after 1 second when the screen loads
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
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/images/village-1.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar hidden />
      <View style={styles.container}>
        {/* Modal for showing the messages */}
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)} // Required for Android back button
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.messageText}>{messages[messageIndex]}</Text>
              <TouchableOpacity onPress={handleNextMessage} style={styles.nextButton}>
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
            </View>
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
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  messageText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
