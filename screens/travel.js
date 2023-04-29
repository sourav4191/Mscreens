import { React } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { useNavigation, Navigation } from "@react-navigation/native";


export default function App() {
  const Navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={["#1F3C90", "#2C49A8"]} style={{ flex: 2.8 / 4 }}>
        <View style={{ marginTop: 70, marginLeft: 20 }}>
          <Text style={styles.txt}>Book Any Domenstic</Text>
          <Text style={styles.txt}>and International</Text>
          <Text style={styles.txt}>Flights</Text>
          <View style={{ flexDirection: "row", margin: 15 }}>
            <TouchableOpacity style={styles.btn}>
              <Text style={{ fontSize: 22, color: "#fff" }}>One Way</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1}>
              <Text style={{ fontSize: 22, color: "#fff" }}>Round Trip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1}>
              <Text style={{ fontSize: 22, color: "#fff" }}>Multi City</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TextInput style={styles.input} placeholder="From" />

            <TextInput style={styles.input} placeholder="Destination" />
            <TouchableOpacity
            onPress={() => Navigation.navigate('scrn')}
              style={{ alignItems: "flex-end", marginRight: 29 }}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                NEXT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <View style={{ marginTop: 8 }}>
        <Text style={{ color: "grey", fontSize: 20, fontWeight: "bold", marginLeft: 20 }}>
          Top Hotels in New Delhi
        </Text>
        <TouchableOpacity>
        <View style={{margin: 5, flexDirection: 'row'}}>
        <Image style={styles.img2} source={require("../image/hotel.jpeg")} />
        <Text style={styles.rtd}>4.8*</Text>
        
        </View>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    margin: 6,
  },
  btn: {
    width: "30%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#f3f3",
    backgroundColor: "#4de",
    padding: 8,
    borderRadius: 1,
    margin: 5,
  },
  btn1: {
    width: "35%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#1F3C90",
    padding: 8,
    borderRadius: 1,
    margin: 5,
  },
  input: {
    width: "70%",
    borderWidth: 1,
    backgroundColor: "#FFFFF7",
    padding: 15,
    margin: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  img2: {
    width: 100,
    height: 100,
    alignSelf: 'flex-start',
    margin: 8,
  },
  rtd: {
    width: "10%",
    height: "25%",
    borderWidth: 2,
    borderColor: "#f3f3",
    backgroundColor: "#F29F9E",
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 1,
    margin: 5,
    fontSize: 16
  },
});
