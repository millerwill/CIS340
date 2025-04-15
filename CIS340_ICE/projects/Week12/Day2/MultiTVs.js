// Importing React and the useState hook to manage state
import React, { useState } from 'react';

// Importing components from react-native
import { Text, View, Button } from 'react-native';


// Main component that renders multiple TVs
function TV(props) {

    //creates state variable to check useState
    const [isOff, setIsOff] = useState(true);

    return (

        <View>
            <Text>
                {/*Display tv name*/}
                This is {props.name} TV, and it is {isOff ? "Off" : "Turned On"};
            </Text>

            <Button
            onPress={() => {
                setIsOff(false);
            }}
            disabled={!isOff}
            title={isOff ? "Turn Me On, Please!" : "Thank You!"}//button text changes
            
            
            
            />

        </View>
    );

}


//Main component that renders multipe TVs

export default function MultiTVs() {

    return(
        <View>
            <TV name = "LG"/>
            <TV name = "Sony"/>

        </View>
    );

}