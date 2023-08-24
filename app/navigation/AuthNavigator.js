import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/Auth/Login";
import StackHeaderAuth from "./utils/StackHeaderAuth";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        header: () => {
          <StackHeaderAuth />;
        },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
