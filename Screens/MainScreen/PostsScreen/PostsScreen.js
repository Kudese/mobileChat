import { Image, Text, View } from "react-native";
import styles from "./PostsScreen.style";
const user = {
  createdAt: "2023-05-29T21:24:01.039Z",
  name: "Laurie Steuber",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/842.jpg",
  email: "Geraldine_Fay@gmail.com",
  id: "1",
};
const PostsScreen = () => {
  return (
    <View style={styles.conteiner}>
    <View style={styles.conteineruser}>
      <Image style={styles.userphoto} source={{uri:user.avatar}} />
      <View style={styles.textcontainer}>
        <Text style={styles.username}>{user.name}</Text>
        <Text style={styles.useremail}>{user.email}</Text>
      </View>
    </View>
    </View>
  );
};

export default PostsScreen;
