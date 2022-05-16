import React, { useState, useEffect } from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "./src/core/theme";
import { gql } from "babel-plugin-graphql-js-client-transform";
import Client from "graphql-js-client";
import typeBundle from "./src/types";

export const client = new Client(typeBundle, {
  url: "https://quik-demo.myshopify.com/api/graphql",
  fetcherOptions: {
    headers: {
      "X-Shopify-Storefront-Access-Token": "0bc16f07eb5c5501d8d03c90f1af4228",
    },
  },
});
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from "./src/screens";
import { AuthenticationContext } from "./src/service/authentication.context";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
