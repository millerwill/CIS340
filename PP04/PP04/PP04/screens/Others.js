// Import necessary components
import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const routes = [
  {
    image: 'https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/route1.png',
    description: 'A scenic route through the mountains above the Reservoir',
  },
  {
    image: 'https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/route2.png',
    description: 'A nice local ride around Horsetooth Reservoir!',
  },
  {
    image: 'https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/route3.png',
    description: 'A nice relaxing ride around some of the foothills!',
  },
];

// Functional Component
export default function MotorcycleRoutesScreen() {
  const [index, setIndex] = useState(0);
  const currentRoute = routes[index];

  const goNext = () => {
    setIndex((index + 1) % routes.length);
  };

  const goPrevious = () => {
    setIndex((index - 1 + routes.length) % routes.length);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: currentRoute.image }} style={styles.image} />

      <Text style={styles.description}>{currentRoute.description}</Text>

      <View style={styles.buttonRow}>
        <Button title="Previous" onPress={goPrevious} />
        <Button title="Next" onPress={goNext} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
