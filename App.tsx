import React, {useState} from "react";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {extendTheme, NativeBaseProvider, theme as nbTheme} from "native-base";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import customFonts from './config/customfonts';
import AppLoading from "expo-app-loading";
import {StatusBar} from "expo-status-bar";
import SignIn from "./src/screens/auth/signin";
import Cart, {Dashboard} from "./src/screens/dashboard";
import {ProductDetail} from "./src/screens/productdetail";
import {CartView} from "./src/screens/cart";

const theme = extendTheme({
    colors: {
        primary: nbTheme.colors.violet,
    }
});

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#2579bc',
        flex: 1
    },
}
const Stack = createNativeStackNavigator();

export default function App() {
    const [IsReady, SetIsReady] = useState(false);
    const LoadFonts = async () => {
        await customFonts();
    };

    if (!IsReady) {
        return (
            <AppLoading
                startAsync={LoadFonts}
                onFinish={() => SetIsReady(true)}
                onError={() => {
                }}
            />
        );
    }
    return (

        <NativeBaseProvider>
            <StatusBar style="light"/>
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator mode="modal" screenOptions={{
                    stackAnimation: "fade",
                }}>
                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={{
                            title: 'Sign in',
                            headerShown: false
                        }}
                    />

                    <Stack.Screen
                        name="Dashboard"
                        component={Dashboard}
                        options={({navigation, route}) => ({
                            title: 'Dashboard',
                            headerShown: true,
                            headerHideBackButton: true,
                            headerStyle: {
                                backgroundColor: '#2579bc',
                            },
                            headerTitleStyle: {
                                fontFamily: "WorkSans",
                                fontWeight: "200"
                            },
                            headerTintColor: '#fff',
                        })}
                    />

                    <Stack.Screen
                        name="ProductDetail"
                        component={ProductDetail}
                        options={({navigation, route}) => ({
                            title: 'Product Detail',
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: '#2579bc',
                            },
                            headerTitleStyle: {
                                fontFamily: "WorkSans",
                                fontWeight: "200"
                            },
                            headerTintColor: '#fff',
                        })}
                    />
                    <Stack.Screen
                        name="CartView"
                        component={CartView}
                        options={{
                            title: 'Cart',
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: '#2579bc',
                            },
                            headerTitleStyle: {
                                fontFamily: "WorkSans",
                                fontWeight: "200"
                            },
                            headerTintColor: '#fff',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
