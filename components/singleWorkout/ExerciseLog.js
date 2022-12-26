import { View, Text, ScrollView, StyleSheet, Platform } from "react-native";
import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Set = ({ index }) => {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.setRow}>
      <Text>{index} </Text>
      <Text>4 reps</Text>
      <View
        // checkbox have different styles on Android
        // Instead of overriding them -if possible- I will use default Android checkbox for now
        style={Platform.OS === "ios" ? styles.checkbox : styles.checkboxAndroid}
      >
        <Checkbox
          color="#007AFF"
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            if (!checked) {
              navigation.navigate("Timer");
            }
            setChecked(!checked);
          }}
        />
      </View>
    </View>
  );
};

const ExerciseLog = ({ exercise }) => {
  const name = exercise.name;
  const reps = exercise.reps;
  const sets = exercise.sets;

  //   Can't use for loop so I have to make a list of sets
  // and use .map in a scroll view to render them
  const setsList = Array(sets).fill(0);
  return (
    <View style={styles.set}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <ScrollView>
        <View style={styles.setRow}>
          <Text>Set</Text>
          <Text>Reps</Text>
          <Text>Done</Text>
        </View>
        {setsList.map((set, index) => {
          return <Set index={index} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  set: {
    marginBottom: 25,
    marginHorizontal: 25,
    borderColor: "rgba(158, 150, 150, .5)",
    borderRadius: 15,
    backgroundColor: "white",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  titleContainer: {
    backgroundColor: "#6200EA",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    color: "white",
  },
  checkbox: {
    margin: 10,

    backgroundColor: "rgba(158, 150, 150, .2)",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  checkboxAndroid: {
    margin: 10,
  },
  setRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default ExerciseLog;
