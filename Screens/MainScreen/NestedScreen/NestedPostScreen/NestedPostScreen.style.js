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
  legenda:{
   marginTop:10,
   marginHorizontal:10,
   flexDirection:"row",
   alignContent:"space-around"
  },
  cometns:{
    marginTop:2,
    marginRight:50,
    flexDirection:"row",
  },
  legendatext:{
    fontFamily:"RobotoRegular",
    fontSize:16,
  },
});

export default styles;
