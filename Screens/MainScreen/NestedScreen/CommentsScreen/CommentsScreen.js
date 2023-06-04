import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { db } from "../../../../FireBase/config";


const CommentsScreen = ({ route }) => {
  const { title, photo, idpost } = route.params;
  const userid = useSelector((state) => state.userid);
  const [comments, setComments] = useState([]);
  const [feedback, setFeedback] = useState("");

  const sendFeedback = async () => {
    console.log("work ")
    try {
      const docRef = await addDoc(collection(db, "comments"), {
        idpost: idpost,
        owner: userid,
        text: feedback,
      });
      setFeedback("");
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "comments"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        const filteredComments = data.filter((el) => el.idpost === idpost);
        setComments(filteredComments);
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
  
    getComments();
  }, []);

  return (
    <View style={{ backgroundColor: "#eee", flex:1 }}>
      <Image
        source={{ uri: photo }}
        style={{ width: Dimensions.get("window").width - 10, height: 150 }}
      />
      <KeyboardAvoidingView style={{ 
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  }} >

      <FlatList
        style={{  marginHorizontal:10, borderColor:"#ddd" }}
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Text>{item.text}</Text>;
        }}
      />
      <View style={{marginHorizontal:10}} >
        <TextInput
          placeholder="Коментар..."
          value={feedback}
          onChangeText={(value) => {
            setFeedback(value);
          }}
        />
        <TouchableOpacity style={{borderRadius:2, fontSize:15, height:30,}}
          onPress={() => {
            sendFeedback();
          }}
        >
          <Text>Відправити</Text>
        </TouchableOpacity>
      </View>
          </KeyboardAvoidingView>
    </View>
  );
};

export default CommentsScreen;
