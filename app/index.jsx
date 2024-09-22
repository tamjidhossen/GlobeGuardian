import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/GameScreen');
    }, 2000); // Duration of the GIF in milliseconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../assets/images/loading.mp4')} style={{ width: '100%', height: '100%' }} />
    </View>
  );
}
