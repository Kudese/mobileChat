import { useState } from "react";
import { useDispatch } from "react-redux";
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
import styles from "./LoginScreen.style";
import { loginThunk } from "../../../Redux/redux";
import { useSelector } from "react-redux";
export default function LoginScreeen({ navigation }) {
  const [isShowekeybord, setisShowekeybord] = useState(false);
  const [isShowePassWord, setisShowePassWord] = useState(true);

  const [userEmail, setUserEmail] = useState("");
  const [userPassWord, setUserPassWord] = useState("");
  const token = useSelector((state) => state.accessToken);
  const dispatch = useDispatch();

  if (token) {
    navigation.navigate("HomeScreen");
  }

  const keybordHiden = () => {
    Keyboard.dismiss();
    setisShowekeybord(false);
  };

  const submitForm = () => {

    dispatch(loginThunk({ userEmail, userPassWord }));


    setUserEmail("");
    setUserPassWord("");
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        keybordHiden();
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          style={styles.background_images}
          source={require("../../../Screens/images/photoBG.jpg")}
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
                <TouchableOpacity>
                  <Text style={styles.btnText}>Увійти</Text>
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={styles.loginScren}>
                  Немає акаунту? Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
