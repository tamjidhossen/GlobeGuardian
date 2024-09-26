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














// const { height, width } = Dimensions.get("window");

// export default function AssetShow() {
//     const router = useRouter();
//   const [data, setData] = useState([
//     require("../assets/images/cat.png"),
//     require("../assets/images/cat1.png"),
//     require("../assets/images/cat2.png"),
//     require("../assets/images/cat3.png"),
//     require("../assets/images/cat4.png"),
//     require("../assets/images/cat5.png"),
//   ]);

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const flatListRef = useRef();

//   const navigation = useNavigation(); // Hook for navigation

//   // Handle scroll to set current index for pagination
//   const handleScroll = (event) => {
//     const x = event.nativeEvent.contentOffset.x;
//     setCurrentIndex(Math.round(x / width)); // Better precision for current index
//   };

//   // Render each item in the FlatList
//   const renderItem = ({ item, index }) => (
//     <View
//       style={[
//         styles.itemContainer,
//         { height: currentIndex === index ? height / 2+100 : height / 2 },
//       ]}
//     >
//       <TouchableOpacity disabled={true} style={styles.imageWrapper}>
//         <ImageBackground source={item} style={styles.imageBackground} />
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.flatListWrapper}>
//         <FlatList
//           ref={flatListRef}
//           data={data}
//           keyExtractor={(item, index) => index.toString()}
//           horizontal
          
//           showsHorizontalScrollIndicator={false}
//           onScroll={handleScroll}
//           renderItem={renderItem}
//         />
//       </View>

      

//       {/* Buy Button */}
//       <View
//         style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
//       >
//         <TouchableOpacity
//           style={styles.buyButton}
//           onPress={() => {router.push('/buyAsset');}}
//         >
          
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   flatListWrapper: {
//     height: height / 2,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   itemContainer: {
//     width: width,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   imageWrapper: {
//     width: "30%",
//     height: "100%",
//     borderRadius: 10,
//     overflow: "hidden",
//   },
//   imageBackground: {
//     width: "100%",
//     height: "100%",
//   },
//   pagination: {
//     flexDirection: "row",
//     width: width,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   dot: {
//     borderRadius: 4,
//     margin: 5,
//   },
//   buyButton: {
//     width: 100,
//     height: 40,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "blue",
//   },
//   buyButtonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });
