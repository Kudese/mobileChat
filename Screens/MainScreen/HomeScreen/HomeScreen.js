import { Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { useDispatch } from "react-redux";

import { logoutThunk } from "../../../Redux/redux";
const TabStack = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {
 const dispatch = useDispatch()

  const logout=()=>{
    
dispatch(logoutThunk())
navigation.navigate("Login")
  }
  return (
    <TabStack.Navigator tabBarOptions={{ showLabel: false }}>
      <TabStack.Screen
        name="PostScreen"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Image
                style={{ width: 24, height: 24}}
                source={require("../../images/grid.png")}
              />
            );
          },
          tabBarActiveBackgroundColor:"#FF6C00",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                logout();
              }}
              style={{ marginRight: 10 }}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../images/log_out.png")}
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
      />
      <TabStack.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../images/add.png")}
              />
            );
          },
          tabBarActiveBackgroundColor:"#FF6C00",
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerTitleStyle: {
            backgroundColor: "#fff",
            fontFamily: "RobotoMediun",
            fontSize: 17,
          },
        }}
      />
      <TabStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../images/user.png")}
              />
            );
          },
          tabBarActiveBackgroundColor:"#FF6C00",
          headerShown: false,
          title: "Портфоліо",
        }}
      />
    </TabStack.Navigator>
  );
};
export default HomeScreen;
