import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./MapScreen.style";

const MapScreen = ({ route }) => {
  console.log(route.params.location.coords);
  const { latitude, longitude } = route.params.location.coords;
  return (
    <View style={styles.conteiner}>
      <MapView
        style={styles.map}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel = {15}
      >
        <Marker
          title="Photo place"
          coordinate={{ latitude, longitude }}
          description="Hello"
        />
      </MapView>
    </View>
  );
};
export default MapScreen;
