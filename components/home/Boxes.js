import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { getFormData } from "../../data/firestopreRealTime";

export default function Boxes({ setWorkouts }) {
  const navigation = useNavigation();
  return (
    <View style={styles.boxesContainer}>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <View style={[styles.heroBox, { backgroundColor: "#1B1B1B" }]}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/template2.png")}
          ></Image>
        </View>
        <Text>Template</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("CreateTemplate", { setWorkouts })}
      >
        <View style={styles.heroBox}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/newFolder.png")}
          ></Image>
        </View>
        <Text>Create New</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center" }} onPress={getFormData}>
        <View style={styles.heroBox}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/history.png")}
          ></Image>
        </View>
        <Text>History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <View style={styles.heroBox}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/weights.png")}
          ></Image>
        </View>
        <Text>Exercises</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  boxesContainer: {
    margin: 24,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heroBox: {
    width: 65,
    height: 65,
    borderRadius: 15,
    borderColor: "#ECECEA",
    borderWidth: 1,
    marginBottom: 8,

    justifyContent: "center",
    alignItems: "center",
  },
  icon: { width: 32, height: 32 },
});
