import { Text, Touchable, View } from "react-native";
import { Camera,CameraType } from "expo-camera";
import styles from "./CreatePostsScreen,style";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
const CreatePostsScreen = () => {
    const [uriPhoto,setUriPhoto]= useState("")
    const[name, setName]= useState("")
    const [photo ,setPhoto]= useState(null)
   const [location, setLocation]= useState("")

  return (
    <View style={styles.conteiner} >
      <View style={styles.cameraconteiner}>
        <Camera style={styles.camera} type={CameraType.front} ></Camera>
        <TouchableOpacity onPress={()=>{createPhoto()}} >
        </TouchableOpacity>
        <Text>{photo?"Редагувати фото":"Завантажте фото"}</Text>
      </View>
        <TextInput style={styles.inputname} placeholder="Назва..." />
        <TextInput style={styles.inputlocation} placeholder="Місцевість..."/>
    </View>
  );
};

export default CreatePostsScreen;
