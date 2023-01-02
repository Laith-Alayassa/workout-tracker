import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  writeUserData,
  getUserData,
  writeFormData,
} from "../../data/firestopreRealTime";
import { data, fillTemplate } from "../../formFormatter";

const BottomBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.BottomBar}>
      <TouchableOpacity
        style={styles.barIcons}
        onPress={() => {
          writeFormData(fillTemplate(data));
        }}
      >
        <Ionicons name="person" size={24} color="white" />
        <Text style={{ color: "white" }}>Person</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.barIcons}
        onPress={() => {
          writeUserData("3", "laith", "plzwork");
          getUserData("3");
        }}
      >
        <Ionicons name="time" size={24} color="white" />
        <Text style={{ color: "white" }}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.barIcons}
        onPress={() => navigation.navigate("CreateTemplate")}
      >
        <Ionicons name="add-circle" size={24} color="white" />
        <Text style={{ color: "white" }}>New Gainz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.barIcons}>
        <Ionicons name="settings" size={24} color="white" />
        <Text style={{ color: "white" }}>settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.barIcons}>
        <Ionicons name="book" size={24} color="white" />
        <Text style={{ color: "white" }}>Booky</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  BottomBar: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-around",
    left: 0,
    right: 0,
    bottom: 0,
    height: 55,
    backgroundColor: "#1B1B1B",
  },
  barIcons: {
    alignItems: "center",
  },
});

export default BottomBar;
