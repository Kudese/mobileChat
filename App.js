import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import imagBG from "./Screens/images/photoBG.jpg";
export default function App() {
  // const [fontsLoaded] = useFonts({
  //   'Inter-Black': require('./assets/fonts/'),
  // })

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background_images}
        source={require("./Screens/images/photoBG.jpg")}
      >
        <View style={styles.back_container}>
          <View style={styles.form_container}>
            <Text style={styles.title}> Реєстрація </Text>

            <TextInput placeholder="Логін" style={styles.loginInput} />
            <TextInput
              placeholder="Адреса електронної пошти"
              style={styles.emailInput}
            />
            <TextInput placeholder="Пароль" style={styles.passwordInput} />

            <View style={styles.btncontainer}>
              <TouchableOpacity activeOpacity={0.7} style={styles.btnSingUp}>
                <Text style={styles.btnText}>Зареєстуватися</Text>
              </TouchableOpacity>
              <Text style={styles.loginScren}>Вже є акаунт? Увійти</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#fff",
  },
  background_images: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    resizeMode: "cover",
  },
  back_container: {
    marginTop: "auto",
    justifyContent: "flex-end",
  },
  form_container: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignContent: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 92,
    marginLeft: "auto",
    marginRight: "auto",
    //TODO
  },
  loginInput: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF6C00",
    marginTop: 33,
    marginHorizontal: 16,
    padding: 16,
    height: 50,
  },
  emailInput: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF6C00",
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    height: 50,
  },
  passwordInput: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF6C00",
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    height: 50,
  },
  btnSingUp: {
    height: 51,
    marginHorizontal: 16,
    backgroundColor: "#FF6C00",
    marginTop: 41,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    color: "#FFFFFF",
  },
  btncontainer: {

    justifyContent:"center"
  },
  loginScren: {
    flex:1,
 marginHorizontal: "auto"
  },
});
