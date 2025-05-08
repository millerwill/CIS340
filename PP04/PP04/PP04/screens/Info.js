import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';

export default function MotorcycleOverviewScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>FoCo Moto - Motorcycle Companion App</Text>
      <Text style={styles.tagline}>"Ride local. Ride connected."</Text>

      <Image
        source={{
          uri: 'https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/FoCo_Moto_Logo.png',
        }}
        style={styles.image}
        accessibilityLabel="FoCo Moto logo with a motorcycle in Fort Collins"
      />

      <Text style={styles.section}> Location</Text>
      <Text style={styles.text}>Fort Collins, Colorado</Text>

      <Text style={styles.section}> About</Text>
      <Text style={styles.text}>
        FoCo Moto helps motorcycle enthusiasts track rides, discover routes, connect with other riders, and stay updated on motorcycle events. Designed by riders, for riders.
      </Text>

      <Text style={styles.section}> Contact</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('tel:1800FoCoMoto')}>
        Phone: 1-800-FoCoMoto
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://www.instagram.com/FoCo_Moto')}>
        Instagram: @FoCo_Moto
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL('mailto:support@focomotoapp.com')}>
        Email: support@focomotoapp.com
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  section: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    textAlign: 'center',
    color: '#1E90FF',
    marginBottom: 10,
  },
});
