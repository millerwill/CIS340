import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import authentication screens
import LoginScreen from './auth/LoginScreen';
import SignupScreen from './auth/SignupScreen';

// Import app screens
import Info from './screens/Info';
import Menu from './screens/Menu';
import Orders from './screens/Orders';
import Offers from './screens/Offers';
import Feedback from './screens/Feedback';
import Others from './screens/Others';

const Stack = createStackNavigator();

function HomeScreen({ route, navigation }) {
  const userName = route.params?.userName || 'Rider';

  const handleLogout = () => {
    Alert.alert('Success', 'Logged out successfully!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Login'),
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      <Text style={styles.text}>Welcome to FoCo Moto, {userName}!</Text>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/FoCo_Moto_Logo.png',
          }}
          style={styles.logo}
          accessibilityLabel="FoCo Moto Logo"
        />
      </View>

      <Text style={styles.title}>My Garage:</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Navigation</Text>

        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Info')}>
          <Text style={styles.cardButtonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.cardButtonText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Orders')}>
          <Text style={styles.cardButtonText}>Place Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Offers')}>
          <Text style={styles.cardButtonText}>Weekly Deals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Feedback')}>
          <Text style={styles.cardButtonText}>Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Others')}>
          <Text style={styles.cardButtonText}>Local Routes</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.cardButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Offers" component={Offers} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="Others" component={Others} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#121212',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#CCCCCC',
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    marginBottom: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#E0E0E0',
    textAlign: 'center',
  },
  cardButton: {
    backgroundColor: '#1F4F66',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  cardButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButton: {
    backgroundColor: '#B00020',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 20,
    alignItems: 'center',
    width: '100%',
  },
});
