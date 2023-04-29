import { React } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useNavigation, Navigation } from "@react-navigation/native";

export default function App() {
  const Navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#F1F9FE" }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
          color: "green",
        }}
      >
        Select Flight
      </Text>
      <View style={{ margin: 3 }}>
        <Text
          style={{
            color: "#BEC2C5",
            fontWeight: "bold",
            margin: 2,
            fontSize: 18,
          }}
        >
          Your Trip
        </Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={{ fontWeight: "bold", fontSize: 28, margin: 2 }}>
          JPR-DEL
        </Text>
        </View>
        <Text
          style={{
            color: "#BEC2C5",
            fontWeight: "bold",
            margin: 2,
            fontSize: 18,
          }}
        >
          27APR 2020
        </Text>
      </View>

      <ScrollView>
        <View style={styles.view1}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "red", fontSize: 18, fontStyle: "italic" }}>
                Spicejet
              </Text>
              <Text style={{ color: "green", fontSize: 18, marginLeft: 250 }}>
                Rs 3000
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 12 }}>
              <Text style={{ fontSize: 18 }}>8:15PM</Text>
              <Text
                style={{
                  marginLeft: 40,
                  color: "#D4D6DB",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                ----------
              </Text>
              <Text style={{ marginLeft: 40, fontSize: 18 }}>10:25PM</Text>
              <Text style={{ marginLeft: 40, fontSize: 18 }}>SP27</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#BEC2C5", fontWeight: "bold" }}>
                JPR,MON
              </Text>
              <Text
                style={{
                  marginLeft: 159,
                  color: "#BEC2C5",
                  fontWeight: "bold",
                }}
              >
                DEL,MON
              </Text>
              <Text
                style={{ marginLeft: 40, color: "#BEC2C5", fontWeight: "bold" }}
              >
                Flight No.
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 40 }}>
              <Text style={{ color: "#BEC2C5", fontWeight: "bold" }}>
                Duration :
              </Text>
              <Text
                style={{ marginLeft: 12, color: "#666666", fontWeight: "bold" }}
              >
                02h:10min
              </Text>
              <Text
                style={{ marginLeft: 20, color: "#BEC2C5", fontWeight: "bold" }}
              >
                | Non-Stop
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.view1}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ color: "blue", fontSize: 18, fontStyle: "italic" }}
              >
                Indigo
              </Text>
              <Text style={{ color: "green", fontSize: 18, marginLeft: 260 }}>
                Rs 3200
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 12 }}>
              <Text style={{ fontSize: 18 }}>6:10PM</Text>
              <Text
                style={{
                  marginLeft: 40,
                  color: "#D4D6DB",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                ----------
              </Text>
              <Text style={{ marginLeft: 40, fontSize: 18 }}>08:25PM</Text>
              <Text style={{ marginLeft: 40, fontSize: 18 }}>IG72</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#BEC2C5", fontWeight: "bold" }}>
                JPR,MON
              </Text>
              <Text
                style={{
                  marginLeft: 159,
                  color: "#BEC2C5",
                  fontWeight: "bold",
                }}
              >
                DEL,MON
              </Text>
              <Text
                style={{ marginLeft: 40, color: "#BEC2C5", fontWeight: "bold" }}
              >
                Flight No.
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 40 }}>
              <Text style={{ color: "#BEC2C5", fontWeight: "bold" }}>
                Duration :
              </Text>
              <Text
                style={{ marginLeft: 12, color: "#666666", fontWeight: "bold" }}
              >
                02h:15min
              </Text>
              <Text
                style={{ marginLeft: 20, color: "#BEC2C5", fontWeight: "bold" }}
              >
                | Non-Stop
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.view1}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ color: "#4de", fontSize: 18, fontStyle: "italic" }}
              >
                Vistara
              </Text>
              <Text style={{ color: "green", fontSize: 18, marginLeft: 260 }}>
                Rs 4200
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 12 }}>
              <Text style={{ fontSize: 18 }}>6:30AM</Text>
              <Text
                style={{
                  marginLeft: 40,
                  color: "#D4D6DB",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                ----------
              </Text>
              <Text style={{ marginLeft: 40, fontSize: 18 }}>08:50AM</Text>
              <Text style={{ marginLeft: 40, fontSize: 18 }}>VS72</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#BEC2C5", fontWeight: "bold" }}>
                JPR,MON
              </Text>
              <Text
                style={{
                  marginLeft: 159,
                  color: "#BEC2C5",
                  fontWeight: "bold",
                }}
              >
                DEL,MON
              </Text>
              <Text
                style={{ marginLeft: 40, color: "#BEC2C5", fontWeight: "bold" }}
              >
                Flight No.
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 40 }}>
              <Text style={{ color: "#BEC2C5", fontWeight: "bold" }}>
                Duration :
              </Text>
              <Text
                style={{ marginLeft: 12, color: "#666666", fontWeight: "bold" }}
              >
                02h:20min
              </Text>
              <Text
                style={{ marginLeft: 20, color: "#BEC2C5", fontWeight: "bold" }}
              >
                | Non-Stop
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "42%",
    borderWidth: 1,
    backgroundColor: "#FFFFF7",
    padding: 15,
    marginTop: 10,
    marginLeft: 2,
    fontWeight: "bold",
    fontSize: 16,
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 20,
  },
  view1: {
    height: "35%",
    borderWidth: 1,
    backgroundColor: "#FFFFF7",
    padding: 15,
    margin: 10,
    borderColor: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    borderRadius: 20,
  },
});
