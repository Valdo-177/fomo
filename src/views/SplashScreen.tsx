import React, { useEffect } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { RootStackParamList } from "../navigation/types.";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Colors } from "../theme/GlobalStyles";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "SplasScreen">;

const SplashScreen = ({ navigation }: { navigation: HomeScreenNavigationProp }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home")
        }, 1500);
    }, [])

    return (
        <View style={{
            backgroundColor: Colors.primary,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            position: 'relative'
        }}>
            <ActivityIndicator
                size="large"
                color="#FFF"
            />
            <Text style={{
                color: '#FFF',
                fontWeight: '300'
            }}>Fomomania..</Text>
            <Text style={{
                color: '#FFF',
                position: 'absolute',
                bottom: 30
            }}>Power by
                <Text style={{
                    fontWeight: '800',
                }}> CoderLabs. v1.4.0</Text>
            </Text>
        </View>
    );
};

export default SplashScreen;
