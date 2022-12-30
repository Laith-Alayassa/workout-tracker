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
          <Text
            style={{ fontFamily: "LexendDeca_400Regular", marginRight: 30 }}
          >
            Set
          </Text>
          <Text
            style={{ fontFamily: "LexendDeca_400Regular", marginRight: 24 }}
          >
            Weight
          </Text>
          <Text
            style={{ fontFamily: "LexendDeca_400Regular", marginRight: 16 }}
          >
            Reps
          </Text>
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
        >
          <Text style={styles.buttonText}>Add Set</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontFamily: "LexendDeca_400Regular",
    backgroundColor: "rgba(158, 150, 150, .2)",
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 5,
    fontSize: 25,
    marginBottom: 16,
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
    backgroundColor: "white",
    marginBottom: 16,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: "#ECECEA",
    borderRadius: 22,
    paddingBottom: 16,
  },
  title: {
    color: "white",
    fontFamily: "LexendDeca_400Regular",
    fontSize: 22,
  },
  titleContainer: {
    height: 48,
    backgroundColor: "#1B1B1B",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingLeft: 8,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
