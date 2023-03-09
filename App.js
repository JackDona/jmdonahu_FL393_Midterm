import React from "react";
import StackNavigator from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { useFonts } from 'expo-font';
import { LogBox } from "react-native";



  /* Delegates control to the app navigator, this file must be present for the app to function */
  const App = () => {
    LogBox.ignoreLogs(['Failed %s type: %s%s, prop, Invalid prop']);
    const[loaded] = useFonts({
        Ubuntu_400Regular: require('./assets/Ubuntu-Regular.ttf'),
        Ubuntu_700Bold: require('./assets/Ubuntu-Bold.ttf'),
        Ubuntu_300Light: require('./assets/Ubuntu-Light.ttf'),
    })
    if (!loaded) {
      return null;
    }

    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      );
  };
export default App;
