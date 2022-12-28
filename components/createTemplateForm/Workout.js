import { TextInput, View, StyleSheet, Text, Pressable } from "react-native";
import { useState } from "react";
import SetsAddSection from "./SetsAddSection";

const Workout = ({ index: workoutIndex, handleBlur, handleChange }) => {
  const [sets, setSets] = useState(Array(2).fill(0));
  return (
    <>
      <View style={styles.set}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{`Exercise ${workoutIndex + 1}`}</Text>
        </View>
        <TextInput
          placeholder="Exercise Name"
          style={styles.textInput}
          onChangeText={handleChange(`exercise${workoutIndex}`)}
          onBlur={handleBlur(`exercise${workoutIndex}`)}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 8,
            marginRight: 24,
            marginBottom: 8,
          }}
        >
          {/* Margins are to align headers with content better */}
          {/* Should find a better way of doing so */}
          <Text style={{ marginRight: 30 }}>Set</Text>
          <Text style={{ marginRight: 24 }}>Weight</Text>
          <Text style={{ marginRight: 16 }}>Reps</Text>
        </View>
        {sets.map((set, setIndex) => {
          return (
            <SetsAddSection
              workoutIndex={workoutIndex}
              setIndex={setIndex}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
          );
        })}
        <Pressable
          style={styles.button}
          onPress={() => {
            setSets((sets) => {
              let newSets = sets.slice();
              newSets.push(1);
              return newSets;
            });
          }}
          title="Submit"
        >
          <Text style={styles.buttonText}>Add Set</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "rgba(158, 150, 150, .2)",
    borderRadius: 8,
    padding: 5,
    fontSize: 25,
    marginVertical: 16,
  },
  textInputSmall: {
    backgroundColor: "rgba(158, 150, 150, .2)",
    borderRadius: 4,
    padding: 3,
    width: 80,
    marginBottom: 16,

    textAlign: "center",
  },
  set: {
    marginBottom: 24,
    marginHorizontal: 24,
    borderColor: "rgba(158, 150, 150, .5)",
    borderRadius: 15,
    backgroundColor: "white",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,

    elevation: 5,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    color: "white",
  },
  titleContainer: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,

    elevation: 5,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 17,
    color: "rgb(0, 122,225)",
  },
});
export default Workout;
