// Import necessary modules from React and React Native
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

// Main App component
export default function App() {

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
