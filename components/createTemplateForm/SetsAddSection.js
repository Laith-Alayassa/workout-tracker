import { TextInput, View, StyleSheet, Text } from "react-native";

export default function SetsAddSection({
  workoutIndex,
  setIndex,
  handleBlur,
  handleChange,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 8,
      }}
    >
      <Text>{setIndex + 1}</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.textInputSmall}
        placeholder="Weight"
        onChangeText={handleChange(
          `weight Workout: ${workoutIndex}, S: ${setIndex}`
        )}
        onBlur={handleBlur(`weight Workout: ${workoutIndex} S: ${setIndex}`)}
      ></TextInput>
      <TextInput
        keyboardType="numeric"
        style={styles.textInputSmall}
        placeholder="Reps"
        onChangeText={handleChange(
          `reps Workout: ${workoutIndex}, S: ${setIndex}`
        )}
        onBlur={handleBlur(`reps Workout: ${workoutIndex} S: ${setIndex}`)}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputSmall: {
    backgroundColor: "rgba(150, 150, 150, .1)",
    borderRadius: 4,
    padding: 3,
    width: 80,
    marginBottom: 8,
    textAlign: "center",
  },
});
