import React from 'react';
import { View, Text, Button } from 'react-native';

const SylhetRegionMain = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sylhet Region Main Screen</Text>
      {/* <Button
        title="Go Back"
        onPress={() => navigation.goBack()} // Example of navigating back
      /> */}
    </View>
  );
};

export default SylhetRegionMain;
