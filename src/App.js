import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

const App = () => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);

  return (
    <View>
      <Text>Welcomrtrtythrtheth!</Text>
    </View>
  );
};

export default App;
