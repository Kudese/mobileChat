import { Image, Text, Touchable, View } from "react-native";
import { Camera, CameraType } from "expo-camera";
import styles from "./CreatePostsScreen,style";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

const CreatePostsScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [adress,setAdress]= useState(null)
  const [location, setLocation] = useState(null);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [status, requestPermission] = Camera.useCameraPermissions();
  const takePhoto = async () => {
    requestPermission();

    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync();
    setLocation(location);
    // console.log("photo", photo);
    // console.log("location", location);
   
    let keys = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    const place = await Location.reverseGeocodeAsync(keys);
    place.find((p) => p.city);
    console.log(...place)
    const {country,region}=place[0]
     setAdress({country,region})
    
  };
  const createAddres=()=>{
    console.log(adress)
   if(adress){
    return `${adress.region},${adress.country}`
   }
   return ""
  }
  const deletPhoto= ()=>{
    setCamera(null),
    setPhoto(null)
  }
  const clearPost=()=>{
    setAdress(null),
    setPhoto(null)
    setCamera(null),
    setLocation(null),
    setTitle("")
  }
  const postsend=()=>{
   navigation.navigate("PostScreen",{photo,title,adress,location})
  }
  return (
    <View style={styles.conteiner}>
      <View style={styles.cameraconteiner}>
       { !photo?(

         <Camera style={styles.camera} type={CameraType.back} ref={setCamera}>

         <TouchableOpacity
            style={styles.createPhoto}
            onPress={() => {
              takePhoto();
            }}
          >
            <Image
              style={{ width: 20, height: 18 }}
              source={require("../../images/camera.png")}
              />
          </TouchableOpacity>
        </Camera>
              ):<Image style={styles.makedPhoto} source={{uri:photo}} />
      }
        <TouchableOpacity onPress={()=>deletPhoto()} >
          <Text style={styles.makephoto}>
            {!camera ? "Редагувати фото" : "Завантажте фото"}
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.inputname} onChangeText={value=>setTitle(value)} value={title} placeholder="Назва..." />
      <TextInput inlineImageLeft="../../images/mapPin.png" onChangeText={value=>setLocation(value)} style={styles.inputlocation} value={createAddres()} placeholder="Місцевість..." />
      <TouchableOpacity style={styles.sendPost} onPress={()=>postsend()} ><Text style={styles.sendText} >Опубліковати</Text></TouchableOpacity>
      <TouchableOpacity style={styles.deletPost} onPress={clearPost} ><Image style={styles.trashcont} source={require("../../images/trashcont.png")} /></TouchableOpacity>

    </View>
  );
};

export default CreatePostsScreen;
