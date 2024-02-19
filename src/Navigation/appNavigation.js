import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import SplashScreen from "../Screens/SplashScreen";
import ProductScreen from "../Screens/ProductScreen";
const Stack = createNativeStackNavigator();

function Appnavigation () {
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Splashscreen"
            screenOptions={{headerShown: false}}>
<Stack.Screen name="Home" component={Home} />
<Stack.Screen name="Splashscreen" component={SplashScreen} />
<Stack.Screen name="Product" component={ProductScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Appnavigation;