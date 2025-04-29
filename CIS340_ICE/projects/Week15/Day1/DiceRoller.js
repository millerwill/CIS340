// Import necessary modules from React and React Native
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

// Main App component
export default function App() {

  const [diceNumber, setDiceNumber] = useState(1);

  const diceImages = {     
    1: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/master/images/dice1.jpg',     
    2: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/master/images/dice2.jpeg',     
    3: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/master/images/dice3.jpg',     
    4: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/master/images/dice4.jpg',     
    5: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/master/images/dice5.jpg',     
    6: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/master/images/dice6.jpg',   
  };

  function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumber);
  }

  return (
    <View style = {styles.container}>

      <Text style = {styles.title}>Dice Roller</Text>

      <Image
        source={{uri: diceImages[diceNumber]}}
        style={styles.diceImage}
      />

      <Text style= {styles.diceNumber}>You rolled: </Text>

      <View style={styles.buttonContainer}>
        <Button title="Roll Dice" onPress={rollDice}/>
      </View>
    </View>
  )

}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,                      // Fill the screen
    justifyContent: 'center',     // Center vertically
    alignItems: 'center',         // Center horizontally
    backgroundColor: '#f0f8ff',   // Light background color
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  diceImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  diceNumber: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    width: 150,
  },
});
