// Import necessary components
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Button, StyleSheet} from 'react-native';


const offers = [
  {
    title: 'Helmet Discount',
    description: '20% off this week!',
    image: 'https://raw.githubusercontent.com/millerwill/CIS340/main/PP04/Helmet.webp',
  },
  {
    title: 'Jacket Discount',
    description: '25% off all jackets!',
    image: 'https://raw.githubusercontent.com/millerwill/CIS340/main/PP04/Jacket.webp',
  },
  {
    title: 'Pants Special',
    description: '20% off all brands!',
    image: 'https://raw.githubusercontent.com/millerwill/CIS340/main/PP04/Pants.webp',
  },
  {
    title: 'Glove Special',
    description: '15% off select gloves!',
    image: 'https://raw.githubusercontent.com/millerwill/CIS340/main/PP04/Gloves.webp',
  },
  {
    title: 'Accessory Special',
    description: 'Buy 1 Get 1 Free!',
    image: 'https://raw.githubusercontent.com/millerwill/CIS340/main/PP04/Accessories.webp',
  },
];

// Functional Component
export default function Offers() {
  // TODO: Use useState, Math.random(), Image, Text, and Button 
  // to create an interactive offer screen
  const [currentOffer, setCurrentOffer] = useState(offers[0]);

  const showRandomOffer = () => {
    const randomIndex = Math.floor(Math.random() * offers.length);
    setCurrentOffer(offers[randomIndex]);
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Weekly Offers</Text>

      <Image source={{ uri: currentOffer.image }} style={styles.image} />

      <Text style={styles.title}>{currentOffer.title}</Text>
      <Text style={styles.description}>{currentOffer.description}</Text>
      <Text style={styles.link}>See Weekly Offer</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="New Offer" onPress={showRandomOffer} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: 'red',
    marginBottom: 8,
  },
  link: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});