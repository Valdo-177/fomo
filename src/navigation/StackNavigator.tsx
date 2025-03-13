import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../views/HomeScreen";
import { RootStackParamList } from "./types.";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../views/ProfileScreen";
import SettingsScreen from "../views/SettingsScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "../views/SplashScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplasScreen" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="SplasScreen" component={SplashScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{
            title: 'Configuracin'
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default StackNavigator;
