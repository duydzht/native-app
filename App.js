import { NativeBaseProvider } from "native-base";
import Home from "./app/components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./app/navigation/AuthNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthNavigator  />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
