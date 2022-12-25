import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import ExerciseLog from "../components/singleWorkout/ExerciseLog";

const WorkoutScreen = ({ route }) => {
  const { title, lastPreformed, exercises } = route.params;
  return (
    <ScrollView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>⚓️ {title} ⚓️</Text>
      </View>
      {exercises.map((exercise) => {
        return <ExerciseLog exercise={exercise}></ExerciseLog>;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
export default WorkoutScreen;
