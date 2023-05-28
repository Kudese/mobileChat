import { useState } from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
const fontsLoader = async () => {
  await Font.loadAsync({
    RobotoBoold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoMediun: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [isShowekeybord, setisShowekeybord] = useState(false);
  const [isShowePassWord, setisShowePassWord] = useState(true);

  const [userEmail, setUserEmail] = useState("");
  const [userPassWord, setUserPassWord] = useState("");

  const keybordHiden = () => {
    Keyboard.dismiss();
    setisShowekeybord(false);
  };
  const submitForm = () => {

    console.log(userEmail);
    console.log(userPassWord);
    
    setUserEmail("");
    setUserPassWord("");
  };
  if (!isReady) {
    return (
      <AppLoading
        startAsync={fontsLoader}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        keybordHiden();
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          style={styles.background_images}
          source={require("./Screens/images/photoBG.jpg")}
        >
          <View style={styles.back_container}>
            <KeyboardAvoidingView style={styles.form_container}>
            
              <Text style={styles.title}> Увійти </Text>

              <TextInput
                onFocus={() => {
                  setisShowekeybord(true);
                }}
                onBlur={() => {
                  setisShowekeybord(false);
                }}
                onChangeText={(value) => {
                  setUserEmail(value);
                }}
                value={userEmail}
                placeholder="Адреса електронної пошти"
                style={styles.emailInput}
              />
              <View style={styles.inputPassWordConteiner}>
                <TextInput
                  secureTextEntry={isShowePassWord}
                  onFocus={() => {
                    setisShowekeybord(true);
                                
                  }}
                  onBlur={() => {
                    setisShowekeybord(false);
                  }}
                  onChangeText={(value) => {
                    setUserPassWord(value);
                  }}
                  value={userPassWord}
                  placeholder="Пароль"
                  style={styles.passwordInput}
                />

                <Text
                  style={styles.bntShowePassword}
                  onPress={() => {
                    setisShowePassWord(!isShowePassWord);
                  }}
                >
                  Показати
                </Text>
              </View>
            </KeyboardAvoidingView>
            <View
              id="btncontainer"
              style={{
                ...styles.btncontainer,
                marginBottom: isShowekeybord ? -150 : 0,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btnSingUp}
                onPress={() => submitForm()}
              >
                <Text style={styles.btnText}>Увійти</Text>
              </TouchableOpacity>
              <Text style={styles.loginScren}>Немає акаунту? Зареєструватися</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
  },

  title: {
    fontFamily: "RobotoMediun",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 92,
    marginLeft: "auto",
    marginRight: "auto",
    //TODO
  },
  emailInput: {
    fontFamily: "RobotoRegular",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF6C00",
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    height: 50,
  },

  passwordInput: {
    fontFamily: "RobotoRegular",

    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF6C00",
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    height: 50,
  },
  bntShowePassword: {
    fontFamily: "RobotoRegular",
    backgroundColor: "#fff",
    position: "absolute",
    top: 30,
    right: 30,
    color: "#1B4371",
    fontSize: 16,
    fontWeight: 400,
  },

  btnSingUp: {
    fontFamily: "RobotoRegular",
    height: 51,
    marginHorizontal: 16,
    backgroundColor: "#FF6C00",
    marginTop: 41,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    fontFamily: "RobotoRegular",
    color: "#FFFFFF",
  },
  btncontainer: {
    marginBottom: -150,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  loginScren: {
    fontFamily: "RobotoRegular",
    marginLeft: "auto",
    marginRight: "auto",
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: 400,
    paddingBottom: 66,
    color: "#1B4371",
    //todo
  },
});
