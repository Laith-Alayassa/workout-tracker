import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SingleWorkoutLog = (exercise) => {
  return (
    <View>
      <Text>{exercise.exercise.name}</Text>
      <Text>Shawerma</Text>
    </View>
  );
};

const WorkoutScreen = ({ route }) => {
  const { title, lastPreformed, exercises } = route.params;
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {exercises.map((exercise) => {
        return <SingleWorkoutLog exercise={exercise}></SingleWorkoutLog>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 20,
  },
});
export default WorkoutScreen;
