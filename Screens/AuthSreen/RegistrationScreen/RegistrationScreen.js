import { useState } from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as Font from "expo-font";
import styles from "./RegistrationSreen.style"
import AppLoading from "expo-app-loading";
const fontsLoader = async () => {
  await Font.loadAsync({
    RobotoBoold: require("../../../assets/fonts/Roboto-Bold.ttf"),
    RobotoMediun: require("../../../assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("../../../assets/fonts/Roboto-Regular.ttf"),
  });
};

export default function RegistrationScreen() {
  const [isReady, setIsReady] = useState(false);
  const [isShowekeybord, setisShowekeybord] = useState(false);
  const [isShowePassWord, setisShowePassWord] = useState(true);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassWord, setUserPassWord] = useState("");

  const keybordHiden = () => {
    Keyboard.dismiss();
    setisShowekeybord(false);
  };
  const submitForm = () => {
    console.log(userName);
    console.log(userEmail);
    console.log(userPassWord);
    setUserName("");
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
              <View>
                <Image
                  style={styles.userphoto}
                  source={require("./Screens/images/rectangle.jpg")}
                />
              </View>
              <Text style={styles.title}> Реєстрація </Text>

              <TextInput
                onFocus={() => {
                  setisShowekeybord(true);
                }}
                onBlur={() => {
                  setisShowekeybord(false);
                }}
                onChangeText={(value) => {
                  setUserName(value);
                }}
                value={userName}
                placeholder="Логін"
                style={styles.loginInput}
              />
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
                <Text style={styles.btnText}>Зареєстуватися</Text>
              </TouchableOpacity>
              <Text style={styles.loginScren}>Вже є акаунт? Увійти</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}