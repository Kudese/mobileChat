import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  conteineruser: {
      display: "flex",
      flexDirection: "row",
      marginTop: 32,
      marginLeft:16,

  },
  userphoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  textcontainer: {
    marginLeft:8,
  },
  username: {
    fontFamily: "RobotoBoold",
    fontSize: 13,
  },
  useremail: {
    fontFamily: "RobotoRegular",
    fontSize: 11,
  },
});

export default styles;
