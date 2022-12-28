import { StyleSheet, Text, Platform, Button, Pressable } from "react-native";
import React from "react";

export default function EndFormButtons({
  handleSubmit,
  workoutsNum,
  setWorkoutsNum,
}) {
  const addField = () => {
    setWorkoutsNum((workoutsNum) => {
      let newWorkouts = workoutsNum.slice();
      newWorkouts.push(1);
      console.log(newWorkouts);
      return newWorkouts;
    });
  };
  return (
    <>
      {Platform.OS === "ios" ? (
        <>
          <Button onPress={addField} title="Add Exercise" />
          <Button style={styles.button} onPress={handleSubmit} title="Submit" />
        </>
      ) : (
        <>
          <Pressable style={styles.button} onPress={addField}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={handleSubmit}
            title="Submit"
          >
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
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
