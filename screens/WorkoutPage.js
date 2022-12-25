import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ExerciseLog from "../components/singleWorkout/ExerciseLog";

const WorkoutScreen = ({ route }) => {
  const { title, lastPreformed, exercises } = route.params;
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>⚓️ {title} ⚓️</Text>
      </View>
      {exercises.map((exercise) => {
        return <ExerciseLog exercise={exercise}></ExerciseLog>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
export default WorkoutScreen;
