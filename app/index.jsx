import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      const timer = setTimeout(() => {
        router.push('/MapScreen');
      }, 4000); // Adjust the timer to match GIF duration

      return () => clearTimeout(timer);
    }
  }, [imageLoaded, router]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../assets/gifs/loading-bar.gif')}
        style={{ width: '110%', height: '110%' }}
        onLoad={() => setImageLoaded(true)} // Wait until the GIF is fully loaded
      />
    </View>
  );
}
