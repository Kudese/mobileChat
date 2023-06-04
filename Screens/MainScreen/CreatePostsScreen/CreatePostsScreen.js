import { Image, Text,  View } from "react-native";
import { Camera, CameraType } from "expo-camera";
import styles from "./CreatePostsScreen,style";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as Location from "expo-location";
import {  useState } from "react";
import { db, storage } from "../../../FireBase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection } from "@firebase/firestore";
import { useSelector } from "react-redux";

const CreatePostsScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState(null);
  const [location, setLocation] = useState(null);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const userId = useSelector((state) => state.userid);
  const [status, requestPermission] = Camera.useCameraPermissions();
  
  console.log("userId",userId)
  
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
    let keys = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    const place = await Location.reverseGeocodeAsync(keys);
    place.find((p) => p.city);

    const { country, region } = place[0];
    setAdress({ country, region });
  };
  const createAddres = () => {
    if (adress) {
      return `${adress.region},${adress.country}`;
    }
    return "";
  };
  const deletPhoto = () => {
    setCamera(null), setPhoto(null);
  };
  const clearPost = () => {
    setAdress(null), setPhoto(null);
    setCamera(null), setLocation(null), setTitle("");
  };
  const uploadPhoto = async () => {
    const file = await (await fetch(photo)).blob();
    const metadata = {
      contentType: "image/jpeg",
    };

    const storageRef = ref(storage, "images/" + Date.now().toString());
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    return uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
        }
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log({
            title,
            adress,
            location,
            userId,
            urlPhoto: downloadURL
          })
          writeDataToFirestore({
            title,
            adress,
            location,
            userId,
            urlPhoto: downloadURL,
            idPhoto: Date.now().toString()
          });
        } catch (error) {
          console.log("Error:", error);
        }
      }
    );
  };

  const writeDataToFirestore = async (data) => {

    try {
      const docRef = await addDoc(collection(db, "posts"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  };

  const postsend = async () => {
    uploadPhoto();
   
    await navigation.navigate("NestedPostScreen", {
      photo,
      title,
      adress,
      location,
    });
  };
  return (
    <View style={styles.conteiner}>
      <View style={styles.cameraconteiner}>
        {!photo ? (
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
        ) : (
          <Image style={styles.makedPhoto} source={{ uri: photo }} />
        )}
        <TouchableOpacity onPress={() => deletPhoto()}>
          <Text style={styles.makephoto}>
            {!camera ? "Редагувати фото" : "Завантажте фото"}
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.inputname}
        onChangeText={(value) => setTitle(value)}
        value={title}
        placeholder="Назва..."
      />
      <TextInput
        inlineImageLeft="../../images/mapPin.png"
        onChangeText={(value) => setLocation(value)}
        style={styles.inputlocation}
        value={createAddres()}
        placeholder="Місцевість..."
      />
      <TouchableOpacity style={styles.sendPost} onPress={() => postsend()}>
        <Text style={styles.sendText}>Опубліковати</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deletPost} onPress={clearPost}>
        <Image
          style={styles.trashcont}
          source={require("../../images/trashcont.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostsScreen;
