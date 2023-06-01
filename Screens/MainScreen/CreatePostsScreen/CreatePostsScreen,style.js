import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  cameraconteiner: {
    marginHorizontal: 16,
    borderRadius: 8,
  },
  camera: {
    height: 240,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  makephoto: {
    color: "#BDBDBD",
  },
  makedPhoto: {
    height: 240,
    marginHorizontal: 16,
  },
  createPhoto: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  inputname: {
    marginTop: 48,
    marginHorizontal: 16,
    fontFamily: "RobotoMediun",
    fontSize: 16,
  },
  inputlocation: {
    marginTop: 48,
    marginHorizontal: 16,
    fontFamily: "RobotoRegular",
    fontSize: 16,
  },

  sendPost: {
    marginHorizontal: 16,
    height: 56,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop:48,
  },
  sendText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    color: "#FFFFFF",
  },
  deletPost: {
    justifyContent:"center",
    alignItems:"center",
    marginTop:30,
    
  },
  trashcont: {
    width: 24,
    height: 24,
   
  },
});
export default styles;
