import { View, Text, StyleSheet, ScrollView } from "react-native";
import ExerciseLog from "../components/singleWorkout/ExerciseLog";

const WorkoutScreen = ({ route }) => {
  const { title, exercises } = route.params;
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
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
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 32,
  },
  title: {
    fontWeight: "bold",
    fontFamily: "LexendDeca_400Regular",
    fontSize: 24,
    color: "#1B1B1B",
  },
});
export default WorkoutScreen;
