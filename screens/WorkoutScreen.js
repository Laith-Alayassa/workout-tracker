import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import ExerciseLog from "../components/singleWorkout/ExerciseLog";
import { deleteDocument } from "../data/firestopreRealTime";

const WorkoutScreen = ({ route }) => {
  const { title, exercises, key } = route.params;
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ marginTop: 16 }}>
        <Button
          color={"red"}
          title="Delete template"
          onPress={() => {
            deleteDocument("users", key);
          }}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>⚓️ {title} ⚓️</Text>
      </View>
      {exercises.map((exercise) => {
        return <ExerciseLog exercise={exercise.exercise}></ExerciseLog>;
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
