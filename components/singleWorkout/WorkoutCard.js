import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

const WorkoutCard = ({ workout }) => {
  const navigation = useNavigation();
  const title = workout.name;
  const lastPreformed = workout.lastPerformed;
  const exercises = workout.exercises;
  const key = workout.key;
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.lastPerformed}>Performed: {lastPreformed}</Text>
        </View>
        <View>
          {exercises.map((exercise) => {
            return (
              <View style={styles.workoutNameContainer}>
                <View>
                  <Text style={styles.workoutName}>
                    {exercise.exercise.name}
                  </Text>
                </View>
                <View>
                  <Text style={styles.workoutName}>
                    {/* Only # number of sets because # reps could change each set */}
                    X {exercise.exercise.sets.length}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </View>
  );
};

const styles = StyleSheet.create({
  home: { flex: 1, backgroundColor: "white" },
  card: {
    backgroundColor: "white",
    marginTop: 16,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: "#ECECEA",
    borderRadius: 22,
    paddingBottom: 16,
  },
  titleContainer: {
    height: 48,
    backgroundColor: "#1B1B1B",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 16,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { color: "white", fontFamily: "LexendDeca_400Regular", fontSize: 22 },
  lastPerformed: {
    color: "white",
    fontSize: 13,
    fontFamily: "LexendDeca_400Regular",
  },
  workoutNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  workoutName: {
    fontSize: 16,
    fontFamily: "LexendDeca_400Regular",
    marginHorizontal: 24,
    marginBottom: 8,
  },
});

export default WorkoutCard;
