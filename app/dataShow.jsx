import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  View,
  Dimensions,
  FlatList,
  StyleSheet,
} from "react-native";

const { height, width } = Dimensions.get("window");

export default function DataShow() {
  const data = [
    { id: "1", image: require("../assets/images/jan-sat-data.png") },
    { id: "2", image: require("../assets/images/feb-sat-data.png") },
    { id: "3", image: require("../assets/images/mar-sat-data.png") },
    { id: "4", image: require("../assets/images/april-sat-data.png")},
    { id: "5", image: require("../assets/images/may-sat-data.png") },
    { id: "6", image: require("../assets/images/june-sat-data.png") },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();

  const handleScroll = (event) => {
    const x = event.nativeEvent.contentOffset.x;
    setCurrentIndex(Math.round(x / width)); // Better precision for current index
  };

  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.itemContainer,
        { height: currentIndex === index ? height / 2+50 : height / 2 },
      ]}
    >
      <TouchableOpacity disabled={true} style={styles.imageWrapper}>
        <ImageBackground source={item.image} style={styles.imageBackground} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.flatListWrapper}>
        <FlatList
          ref={flatListRef}
          data={data}
          keyExtractor={(item) => item.id} // Ensure the key extractor uses the id
          key = {data.length}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          renderItem={renderItem}
        />
      </View>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                width: currentIndex === index ? 40 : 8,
                height: currentIndex === index ? 10 : 8,
                backgroundColor: currentIndex === index ? "green" : "gray",
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListWrapper: {
    height: height / 2 + 50,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: "90%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  pagination: {
    flexDirection: "row",
    width: width,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  dot: {
    borderRadius: 4,
    margin: 5,
  },
});
