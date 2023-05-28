import { useState } from "react";
import {
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
import AppLoading from "expo-app-loading";
const fontsLoader = async () => {
  await Font.loadAsync({
    RobotoBoold: require("../../../assets/fonts/Roboto-Bold.ttf"),
    RobotoMediun: require("../../../assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("../../../assets/fonts/Roboto-Regular.ttf"),
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