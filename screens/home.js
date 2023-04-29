import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Button, onPressButton } from "react-native";
import { useNavigation, Navigation} from "@react-navigation/native";

export default function App() {
    const Navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "green", flex: 1 }}>
      <View style={{ marginTop: 15 }}>
        <TouchableOpacity onPress={() => Navigation.navigate('gopay')}
         style={styles.btn1}>
          <Text
            style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}
          >
            Go Pay
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => Navigation.navigate('cab')}
        style={styles.btn1}>
          <Text
            style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}
          >
            Cab
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => Navigation.navigate('travel')}
        style={styles.btn1}>
          <Text
            style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn1: {
    width: "70%",
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "#FFFFF7",
    padding: 10,
    borderRadius: 20,
    margin: 10,
    borderWidth: 1,
  },
});
