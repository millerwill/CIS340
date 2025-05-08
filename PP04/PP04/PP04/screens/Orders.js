import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

export default function PlaceOrderScreen() {
  const [motorcycle, setMotorcycle] = useState(0);
  const [helmet, setHelmet] = useState(0);
  const [jacket, setJacket] = useState(0);
  const [pants, setPants] = useState(0);
  const [gloves, setGloves] = useState(0);
  const [accessories, setAccessories] = useState(0);

  const placeOrder = () => {
    const total =
      motorcycle + helmet + jacket + pants + gloves + accessories;

    if (total === 0) {
      Alert.alert('No Items Selected', 'Please add items to your order.');
      return;
    }

    Alert.alert(
      'Order Summary',
      ` Motorcycle: ${motorcycle}\n Helmet: ${helmet}\n Jacket: ${jacket}\n Pants: ${pants}\n Gloves: ${gloves}\n Accessories: ${accessories}`
    );
  };

  const resetOrder = () => {
    setMotorcycle(0);
    setHelmet(0);
    setJacket(0);
    setPants(0);
    setGloves(0);
    setAccessories(0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>FoCo Moto - Gear & Ride Order</Text>

      <Item
        label="Motorcycle"
        count={motorcycle}
        image="https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/Motorcycle.webp"
        onAdd={() => setMotorcycle(motorcycle + 1)}
        onRemove={() => motorcycle > 0 && setMotorcycle(motorcycle - 1)}
      />

      <Item
        label="Helmet"
        count={helmet}
        image="https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/Helmet.webp"
        onAdd={() => setHelmet(helmet + 1)}
        onRemove={() => helmet > 0 && setHelmet(helmet - 1)}
      />

      <Item
        label="Jacket"
        count={jacket}
        image="https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/Jacket.webp"
        onAdd={() => setJacket(jacket + 1)}
        onRemove={() => jacket > 0 && setJacket(jacket - 1)}
      />

      <Item
        label="Pants"
        count={pants}
        image="https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/Pants.webp"
        onAdd={() => setPants(pants + 1)}
        onRemove={() => pants > 0 && setPants(pants - 1)}
      />

      <Item
        label="Gloves"
        count={gloves}
        image="https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/Gloves.webp"

        onAdd={() => setGloves(gloves + 1)}
        onRemove={() => gloves > 0 && setGloves(gloves - 1)}
      />

      <Item
        label="Accessories"
        count={accessories}
        image="https://raw.githubusercontent.com/millerwill/CIS340/refs/heads/main/PP04/Accessories.webp"
        onAdd={() => setAccessories(accessories + 1)}
        onRemove={() => accessories > 0 && setAccessories(accessories - 1)}
      />

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.mainButton} onPress={placeOrder}>
          <Text style={styles.mainButtonText}>Place Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.mainButton, styles.resetButton]} onPress={resetOrder}>
          <Text style={styles.mainButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Reusable item component with styled buttons
function Item({ label, count, image, onAdd, onRemove }) {
  return (
    <View style={styles.item}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.label}>
        {label}: {count}
      </Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.circleButton} onPress={onAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton} onPress={onRemove}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
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
  item: {
    alignItems: 'center',
    marginBottom: 25,
  },
  image: {
    width: 120,
    height: 100,
    marginBottom: 10,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circleButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginHorizontal: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actionButtons: {
    marginTop: 30,
    width: '70%',
    alignItems: 'center',
  },
  mainButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 5,
  },
  resetButton: {
    backgroundColor: '#808080',
  },
  mainButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
