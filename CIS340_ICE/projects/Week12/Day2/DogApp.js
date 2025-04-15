// Importing React and necessary components from react-native
import React from 'react';
import { Text, View, Image } from 'react-native';

// Defining the main functional component called CatApp
export default function CatApp() {

    let pic = {
        url: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/master/images/dog2.png'
    };
return(
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>

    <Image
    source={pic}
    style={{width: 200, height: 200}}
    />

    <Text>Hello, here is my dog!</Text>

    </View>
    );
  
}
