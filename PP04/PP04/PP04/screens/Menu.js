// Import necessary components
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
// Functional Component
export default function MenuScreen() {
  // TODO: Create a menu screen using components like:
  // ScrollView, Image, Text, and StyleSheet

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View style={styles.card}> 
          <Image
            style={styles.image}
            source={{
              uri: 'https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/Motorcycle.webp',
            }}
          />

            <Text style={styles.title}>Motorcycles</Text>
            <Text style={styles.description}>
              Pick from a selection of different brands of motorcycles.
            </Text>
        </View>

        <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/Helmet.webp',
              }}
            />

            <Text style={styles.title}>Helmets</Text>
            <Text style={styles.description}>
              Pick from a selection of different brands of helmets.
            </Text>

        </View>

        <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/Jacket.webp',
              }}
            />

            <Text style={styles.title}>Jackets</Text>
            <Text style={styles.description}>
              Pick from a selection of different brands of jackets.
            </Text>

        </View>

        <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/Pants.webp',
              }}
            />

            <Text style={styles.title}>Pants</Text>
            <Text style={styles.description}>
              Pick from a selection of different brands of pants.
            </Text>

        </View>

        <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/Gloves.webp',
              }}
            />

            <Text style={styles.title}>Gloves</Text>
            <Text style={styles.description}>
              Pick from a selection of different brands of gloves.
            </Text>

        </View>

        <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/Accessories.webp',
              }}
            />

            <Text style={styles.title}>Accessories</Text>
            <Text style={styles.description}>
              Browse different accessories for your motorcycle.
            </Text>

        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'grey',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 6,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#black',
  },
});
