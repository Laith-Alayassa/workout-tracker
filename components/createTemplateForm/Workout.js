import { TextInput, View, StyleSheet, Text, Pressable } from "react-native";
import { useState } from "react";
import SetsAddSection from "./SetsAddSection";

const Workout = ({ index, handleBlur, handleChange }) => {
  const [sets, setSets] = useState(Array(2).fill(0));
  return (
    <>
      <View style={styles.set}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{`Exercise ${index + 1}`}</Text>
        </View>
        <TextInput
          placeholder="Exercise Name"
          style={styles.textInput}
          onChangeText={handleChange(`exercise${index}`)}
          onBlur={handleBlur(`exercise${index}`)}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <Text>Set</Text>
          <Text>Weight (KG)</Text>
          <Text>Reps</Text>
        </View>
        {sets.map((set, index) => {
          return <SetsAddSection index={index} />;
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
  },
  textInputSmall: {
    backgroundColor: "rgba(158, 150, 150, .2)",
    borderRadius: 4,
    padding: 3,
    width: 80,
    marginBottom: 15,

    textAlign: "center",
  },
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
  title: {
    fontWeight: "500",
    fontSize: 18,
    color: "white",
  },
  titleContainer: {
    backgroundColor: "#007AFF",
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

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 17,
    color: "rgb(0, 122,225)",
  },
});
export default Workout;
