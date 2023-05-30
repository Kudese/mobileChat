import { useState } from "react";
import * as Font from "expo-font";
import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreeen from "./Screens/AuthSreen/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/AuthSreen/RegistrationScreen/RegistrationScreen";
import HomeScreen from "./Screens/MainScreen/HomeScreen/HomeScreen";


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
         <MainStack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen}/>
        {/* <MainStack.Screen
          name="PostScreen"
          component={PostsScreen}
          options={{
            headerTitleAlign: "center",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {console.log("TODO")}}
                style={{ marginRight: 10 }}
              >
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("./Screens/images/log_out.png")}
                />
              </TouchableOpacity>
            ),
            title: "Публікації",
            headerTitleStyle: {
              backgroundColor: "#fff",
              fontFamily: "RobotoMediun",
              fontSize: 17,
            },
          }}
        /> */}
        {/* <MainStack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{ title: "Створити публікацію" }}
        /> */}
        {/* <MainStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
