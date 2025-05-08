import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';

export default function CustomerFeedback() {
  const [comments, setComments] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = () => {
    const numericRating = parseInt(rating);
    if (!comments || !rating) {
      Alert.alert('Missing Information', 'Please fill out all fields.');
      return;
    }
    if (isNaN(numericRating) || numericRating < 1 || numericRating > 5) {
      Alert.alert('Invalid Rating', 'Please enter a rating between 1 and 5.');
      return;
    }

    Alert.alert('Thanks for your feedback!');
    setComments('');
    setRating('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>FoCo Moto - Rider Feedback</Text>

      

      <Text style={styles.label}>Your Comments</Text>
      <TextInput
        style={styles.input}
        placeholder="Share your experience with FoCo Moto..."
        multiline
        numberOfLines={4}
        value={comments}
        onChangeText={setComments}
      />

      <Text style={styles.label}>Your Rating (1 to 5)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a number between 1 and 5"
        keyboardType="numeric"
        value={rating}
        onChangeText={setRating}
      />

      <View style={styles.buttonWrapper}>
        <Button title="Submit Feedback" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    borderColor: '#1E90FF',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 10,
  },
});

