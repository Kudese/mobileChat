import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./NestedPostScreen.style";
const user = {
  createdAt: "2023-05-29T21:24:01.039Z",
  name: "Laurie Steuber",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/842.jpg",
  email: "Geraldine_Fay@gmail.com",
  id: "1",
};
const NestedPostScreen = ({ route,navigation }) => {
  const [posts, setPosts] = useState([
    {
      adress: { country: "Україна", region: "Дніпропетровська область" },
      photo:
        "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FmobileChat-243b868f-901f-4ccd-9e44-93af081fd69b/Camera/fd329d86-67a2-4771-a767-3e0c58057456.jpg",
      title: "Про",
    },
  ]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [
        ...prevState,
        {
          adress: route.params.adress,
          photo: route.params.photo,
          title: route.params.title,
        },
      ]);
    }
  }, [route.params]);

  return (
    <View style={styles.conteiner}>
      <View style={styles.conteineruser}>
        <Image style={styles.userphoto} source={{ uri: user.avatar }} />
        <View style={styles.textcontainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.useremail}>{user.email}</Text>
        </View>
      </View>
      <FlatList
        style={{marginTop:10}}
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {console.log("post", posts)}
            <Image
              source={{ uri: item.photo }}
              style={{ width: 350, height: 200 }}
            />
            <View>
              <Text style={styles.legendatext}>{item.title}</Text>
              <View style={styles.legenda}>
                <TouchableOpacity onPress={()=>{navigation.navigate("CommentScreen",{photo:item.photo,title:item.title})}} style={styles.cometns}>
                  <Image
                    style={{ width: 18, height: 18 }}
                    source={require("../../../images/Shape.png")}
                  /><Text style={{marginLeft:4}}>0</Text>
                </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{navigation.navigate("MapScreen",{ location:route.params.location})}} >
                <Text>

                  <Image
                    style={{ width: 16, height: 18 }}
                    source={require("../../../images/mapPin.png")}
                    />
                    {item.adress.region},{item.adress.country}
                </Text>
                    </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default NestedPostScreen;
