import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import { useNavigation, Navigation } from "@react-navigation/native";

export default function App() {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#44982F",
          flex: 0.5 / 4,
          borderTopRightRadius: 26,
          borderTopLeftRadius: 26,
          margin: 0,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, margin: 8 }}>
          {" "}
          Your Driver Will Arrive In 5 Mins...
        </Text>
      </View>
      <View style={{ flex: 1 / 4, backgroundColor: "#FFF", borderRadius: 30 }}>
        <Text
          style={{
            fontSize: 26,
            fontStyle: "italic",
            fontWeight: "bold",
            marginTop: 44,
            marginLeft: 10,
          }}
        >
          DL 03 S
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ margin: 10, color: "#454545", fontSize: 16 }}>
            Shrawan Kumar
          </Text>
          <Text
            style={{
              margin: 10,
              color: "#454545",
              fontSize: 16,
              backgroundColor: "#D3D3D3",
            }}
          >
            180 Total Trips
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.img}
            source={require("../image/dialer.gif")}
          ></Image>
          <TouchableOpacity style={styles.btn3}>
            <Text
              style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}
            >
              +91-943XXXX241
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginTop: 30,
          backgroundColor: "#fff",
          flex: 1.1 / 4,
          borderRadius: 30,
        }}
      >
        <View style={{ flexDirection: "row", marginTop: 24 }}>
          <Image
            style={styles.img1}
            source={require("../image/cab.gif")}
          ></Image>
          <TextInput style={styles.input} placeholder="Your Current Location" />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.img1}
            source={require("../image/drop.gif")}
          ></Image>
          <TextInput style={styles.input} placeholder="Your destination" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
  },
  img: {
    width: 50,
    height: 50,
    alignSelf: "auto",
    marginLeft: 8,
    borderRadius: 20,
  },
  img1: {
    width: 70,
    height: 70,
    alignSelf: "auto",
    marginLeft: 8,
    borderRadius: 20,
  },
  btn3: {
    width: "70%",
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E8EBEB",
    backgroundColor: "#FAFAFA",
    padding: 10,
    borderRadius: 20,
    margin: 5,
    borderWidth: 1,
  },
  input: {
    width: "70%",
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E8EBEB",
    backgroundColor: "#FAFAFA",
    padding: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderRadius: 20,
  },
});
