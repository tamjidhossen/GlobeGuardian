import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { FontAwesome5 } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const data = [
  { name: 'Dhaka', precipitation: 120, icon: '🏙️' },
  { name: 'Chittagong', precipitation: 250, icon: '⛰️' },
  { name: 'Rajshahi', precipitation: 80, icon: '🌾' },
  { name: 'Khulna', precipitation: 150, icon: '🌳' },
  { name: 'Barisal', precipitation: 200, icon: '🚣' },
  { name: 'Sylhet', precipitation: 300, icon: '☕' },
  { name: 'Rangpur', precipitation: 100, icon: '🍚' },
  { name: 'Mymensingh', precipitation: 130, icon: '🐟' },
];

const chartData = {
  labels: data.map(item => item.name),
  datasets: [
    {
      data: data.map(item => item.precipitation),
    },
  ],
};

const KidFriendlyPrecipitationChart = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start();
  }, []);

  const animatedStyle = {
    opacity: animatedValue,
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        }),
      },
    ],
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <BarChart
        data={chartData}
        width={screenWidth * 0.85}
        height={250}
        yAxisLabel=""
        yAxisSuffix=" mm"
        chartConfig={{
          backgroundColor: 'transparent',
          backgroundGradientFrom: '#FFF',
          backgroundGradientTo: '#FFF',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(65, 105, 225, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForLabels: {
            fontSize: 8,
            rotation: 45,
          },
          // propsForBackgroundLines: {
          //   strokeDasharray: '',
          //   stroke: '#E0E0E0',
          // },
        }}
        style={styles.chart}
        showValuesOnTopOfBars={true}
        fromZero={true}
        verticalLabelRotation={30}
      />
      <View style={styles.legendContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <Text style={styles.legendIcon}>{item.icon}</Text>
            <Text style={styles.legendText}>{item.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <FontAwesome5 name="cloud-rain" size={24} color="#4169E1" style={styles.icon} />
        <Text style={styles.footerText}>Don't forget your raincoat! 🧥</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontFamily: 'System',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF6B6B',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  legendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 2,
  },
  legendIcon: {
    fontSize: 20,
    marginBottom: 2,
  },
  legendText: {
    fontSize: 10,
    color: '#333',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#F0F8FF',
    borderRadius: 20,
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  footerText: {
    fontFamily: 'System',
    fontSize: 16,
    color: '#4169E1',
    fontWeight: 'bold',
  },
});

export default KidFriendlyPrecipitationChart;