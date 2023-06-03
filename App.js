import { useState } from "react";
import * as Font from "expo-font";
import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import LoginScreeen from "./Screens/AuthSreen/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/AuthSreen/RegistrationScreen/RegistrationScreen";
import HomeScreen from "./Screens/MainScreen/HomeScreen/HomeScreen";
import { persistor, store } from "./Redux/redux";
import { db } from "./FireBase/config";

const fontsLoader = async () => {
  await Font.loadAsync({
    RobotoBoold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoMediun: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });
};

const MainStack = createStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [auth, setAuth] = useState(true);
  
  if (!isReady) {
    return (
      <AppLoading
        startAsync={fontsLoader}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack.Navigator>
            <MainStack.Screen
              name="Login"
              component={LoginScreeen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              options={{ headerShown: false }}
              name="HomeScreen"
              component={HomeScreen}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
