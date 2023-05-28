import { StyleSheet } from "react-native/types";

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