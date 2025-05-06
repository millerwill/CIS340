// Import React and necessary hooks from the React library
import React, { useState, useEffect } from "react";

// Import React Native components used in the app
import {
  Text,
  View,
  SectionList,
  ActivityIndicator,
  Alert,
} from "react-native";

// Main functional component
export default function StatesApp() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  const githubUrl = "https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/main/Cities.txt";

  useEffect(() => {

    fetch(githubUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      return response.text();
    })
    .then((text) => {
      let cities = text
      .split('\n')
      .map((c) => c.trim())
      .filter((c) => c !== "")
      .sort();

      let groups = {};
      cities.forEach((city) => {
        let letter = city[0].toUpperCase();
        if(!groups[letter]) {
          groups[letter] = [];
        }
        groups[letter].push(city);
      });
      let formatted = Object.keys(groups)
      .sort()
      .map((letter) => ({
        title: letter,
        data: groups[letter],
      }));
      setSections(formatted);
    })
    .catch((error) => {
      console.error(error);
      Alert.alert("Error");
    })
    .finally(() =>{
      setLoading(false);
    })
  }

);

if(loading) {
  return (
    <View 
      style={{flex: 1, justifyContent: "center", alignItems: "center"}}
      >
        <ActivityIndicator size="large" color= "blue" />
      </View>
  );
}
return(
  <View style={{ flex: 1, paddingTop: 22, paddingHorizontal: 10}}>
    <SectionList
        sections = {sections}

        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Text style = {{padding: 10, fontSize: 20}}> {item}</Text>
        )}

        renderSectionHeader={({section}) => (
          <Text
            style={{
              padding: 5,
              fontSize: 16,
              fontWeight: "bold",
              backgroundColor: "lightblue",
              color: "white",
            }}
            >
              {section.title}
            </Text>
        )}
        />
  </View>
);

}
