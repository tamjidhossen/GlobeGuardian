import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { useRouter } from 'expo-router';
// import 'react-native-gesture-handler';

export default function Index() {
  const router = useRouter();

  // game loading animation gif
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/MapScreen');
    }, 2000); // Duration of the GIF in milliseconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../assets/gifs/loading-bar.gif')} style={{ width: '110%', height: '110%' }} />
    </View>
  );
}