import React from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types.";

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;

const ProfileScreen = ({ route }: { route: ProfileScreenRouteProp }) => {
  return (
    <View>
      <Text>Pantalla de Perfil</Text>
      <Text>Usuario ID: {route.params.userId}</Text>
      <Text>Nombre: {route.params?.name}</Text>
      <Text>como estas?</Text>
    </View>
  );
};

export default ProfileScreen;
