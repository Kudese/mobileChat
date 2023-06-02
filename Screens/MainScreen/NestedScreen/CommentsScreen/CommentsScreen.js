import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TextInput,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CommentsScreen = ({ route }) => {
  const { title, photo } = route.params;
  const [coments, setComents] = useState([]);
  const [feadBack, setFeatBack] = useState("");

  const sendFeadBack = () => {
    setComents((prevState) => [...prevState, {title:feadBack}]);
    setFeatBack("");
    console.log(coments);
  };
  return (
    <View style={{backgroundColor:"#eee"}}>
      <Image
        source={{ uri: photo }}
        style={{ width: Dimensions.get("window").width - 10, height: 150 }}
      />
      <FlatList style={{flex:1,}}
        data={coments}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
      <View>
        <TextInput
          placeholder="Коментарь.."
          value={feadBack}
          onChangeText={(value) => {
            setFeatBack(value);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            sendFeadBack();
          }}
        >
          <Text>Відправити</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CommentsScreen;
