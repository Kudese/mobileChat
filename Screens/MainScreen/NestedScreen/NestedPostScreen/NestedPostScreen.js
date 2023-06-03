import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./NestedPostScreen.style";
import { useSelector } from "react-redux"
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from "../../../../FireBase/config";

const user = {
  createdAt: "2023-05-29T21:24:01.039Z",
  name: "Laurie Steuber",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/842.jpg",
  email: "Geraldine_Fay@gmail.com",
  id: "1",
};


const NestedPostScreen = ({ route,navigation }) => {
  const [posts, setPosts] = useState([]);
  const email = useSelector(state => state.userEmail);
  const name = useSelector(state => state.name);
  const userphoto = useSelector(state => state.photoURL);

  useEffect(() => {
    const getDataFromFirestore = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'posts'));
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPosts(data);
      } catch (error) {
        console.log(error);
        throw error;
      }
    };

    getDataFromFirestore();
  }, []);

  return (
    <View style={styles.conteiner}>
      <View style={styles.conteineruser}>
        <Image style={styles.userphoto} source={{ uri: userphoto || user.avatar }} />
        <View style={styles.textcontainer}>
          <Text style={styles.username}>{name}</Text>
          <Text style={styles.useremail}>{email}</Text>
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
    
            <Image
              source={{ uri: item.urlPhoto }}
              style={{ width: 350, height: 200 }}
            />
            <View>
              <Text style={styles.legendatext}>{item.title}</Text>
              <View style={styles.legenda}>
                <TouchableOpacity onPress={()=>{navigation.navigate("CommentScreen",{photo:item.urlPhoto,title:item.title, idpost:item.id})}} style={styles.cometns}>
                  <Image
                    style={{ width: 18, height: 18 }}
                    source={require("../../../images/Shape.png")}
                  /><Text style={{marginLeft:4}}>0</Text>
                </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{navigation.navigate("MapScreen",{ location:item.location})}} >
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
