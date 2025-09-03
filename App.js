import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  Alert,
  Pressable,
} from "react-native";

const icon = require("./assets/icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://udiscover.mx/cdn/shop/files/ed-maverick-standard.png?v=1755568459&width=1200",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ color: "white" }}>Tenemos aqui la app</Text>
      <Button
        title="pulsa aqui"
        onPress={() => alert("Aceptar terminos y condiciones")}
      />
      <TouchableHighlight
        underlayColor={"white"}
        onPress={() => alert("Hola")}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Boton</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
