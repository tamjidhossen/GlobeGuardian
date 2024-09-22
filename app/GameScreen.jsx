// app/GameScreen.jsx
import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import ImageButton from '../components/ImageButton';

export default function GameScreen() {
    const router = useRouter();  // Use the router to navigate

    return (
        <ImageBackground source={require('../assets/images/bangla-map.jpg')} style={styles.background}>
            <View style={styles.buttonContainer}>
                <ImageButton
                    source={require('../assets/images/globeBtn.png')}
                    onPress={() => { router.push('/VillageScreen'); }}  // Navigate to VillageScreen
                    style={styles.imageButton}
                />
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
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    imageButton: {
        // Add your custom button styles here
    },
});
