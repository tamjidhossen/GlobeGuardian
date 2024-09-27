import React from "react";
import { useRouter } from 'expo-router';
import {
  TouchableOpacity,
  Image,
  View,
  FlatList,
  StyleSheet,
} from "react-native";

export default function AssetShow() {
  const router = useRouter();  // Use router from expo-router

  const DATA = [
    { id: '1', image: require('../assets/images/Asset 2.png'), route: '/A' },
    { id: '2', image: require("../assets/images/Asset 3.png"), route: '/B' },
    { id: '3', image: require("../assets/images/Asset 4.png"), route: '/C' },
    { id: '4', image: require("../assets/images/Asset 5.png"), route: '/D' }, // Add more as needed
    { id: '5', image: require("../assets/images/Asset 6.png"), route: '/buyAsset' },
    { id: '6', image: require('../assets/images/Asset 7.png'), route: '/F' },
    { id: '7', image: require("../assets/images/Asset 8.png"), route: '/E' },
    { id: '8', image: require('../assets/images/Asset 9.png'), route: '/F' },
  ];

  // Create an Item component
  const Item = ({ image, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <Image source={image} style={styles.image} />
      </View>
    </TouchableOpacity>
  );

  // Render each item with the appropriate navigation action
  const renderItem = ({ item }) => {
    return <Item image={item.image} onPress={() => router.push(item.route)} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={4}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

// Move styles outside the component for optimization
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    flex: 1,
    margin: 8,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

