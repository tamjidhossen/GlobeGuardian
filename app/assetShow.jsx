import React from "react";
import { useRouter } from 'expo-router';
import {
  TouchableOpacity,
  Image,
  View,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";

export default function AssetShow() {
  const router = useRouter();  // Use router from expo-router

  const DATA = [
    { id: '1', image: require('../assets/images/Asset 2.png'), route: '/A' },
    { id: '2', image: require("../assets/images/Asset 3.png"), route: '/B' },
    { id: '3', image: require("../assets/images/Asset 4.png"), route: '/C' },
    { id: '4', image: require("../assets/images/Asset 5.png"), route: '/D' },
    { id: '5', image: require("../assets/images/Asset 6.png"), route: '/buyAsset' },
    { id: '6', image: require('../assets/images/Asset 7.png'), route: '/F' },
    { id: '7', image: require("../assets/images/Asset 8.png"), route: '/E' },
    { id: '8', image: require('../assets/images/Asset 9.png'), route: '/F' },
  ];

  // Create an Item component
  const Item = ({ image, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );

  // Render each item with the appropriate navigation action
  const renderItem = ({ item }) => {
    return <Item image={item.image} onPress={() => router.push(item.route)} />;
  };

  return (
    <View style={styles.container}>
      {/* Top Bar with Heading */}
      <View style={styles.headerBar}>
        <Text style={styles.headerText}>Shop</Text>
      </View>

      {/* Grid of Images */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={4}  // Set number of columns to 4
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.contentContainer} // Add some padding to the content
      />
    </View>
  );
}

// Move styles outside the component for optimization
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#8B4513',
  },
  headerBar: {
    width: '100%',
    height: 60,
    backgroundColor: '#402108', // Darker shade for the header
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5, // Adds a drop shadow for Android
  },
  headerText: {
    fontSize: 32, // Slightly smaller for a modern look
    fontWeight: 'bold',
    color: 'white',
  },
  item: {
    flex: 1,
    margin: 8,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#4f2f0b', // Semi-transparent background for items
    
    
    //elevation: 1, // Adds shadow for Android
  },
  image: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  contentContainer: {
    paddingBottom: 20, // Adds padding to the bottom
  },
});
