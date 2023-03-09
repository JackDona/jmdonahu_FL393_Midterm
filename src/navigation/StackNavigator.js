import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Main Stack Screens
import Home from "../Home";

//Stack navigator for the main stack (Home Screen)
const Stack = createStackNavigator();

/* Defines what screens are contained in the main stack */
const StackNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      > 
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  };

  /* Exports the stack screens in a navigation container to be rendered by App.js */
export default StackNavigator;