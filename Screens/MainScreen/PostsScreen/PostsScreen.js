import { createStackNavigator } from "@react-navigation/stack";
import CommentsScreen from "../NestedScreen/CommentsScreen/CommentsScreen";
import MapScreen from "../NestedScreen/MapScreen/MapScreen";
import NestedPostScreen from "../NestedScreen/NestedPostScreen/NestedPostScreen";

const NesedScreen = createStackNavigator();
const PostsScreen = () => {
  return (
    <NesedScreen.Navigator>
      <NesedScreen.Screen
        name="NestedPostScreen"
        component={NestedPostScreen}
        options={{ headerShown: false }}
      />
      <NesedScreen.Screen name="CommentScreen" component={CommentsScreen} />
      <NesedScreen.Screen name="MapScreen" component={MapScreen} />
    </NesedScreen.Navigator>
  );
};

export default PostsScreen;
