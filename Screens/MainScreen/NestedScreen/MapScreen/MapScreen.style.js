import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
conteiner:{
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
},
map:{
    width: Dimensions.get("window").width-10,
    height: Dimensions.get("window").height-10,
},
})
export default styles