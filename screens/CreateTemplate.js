import React, { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Platform,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import { writeTemplateData } from "../data/firestopreRealTime";

const SetsAddSection = ({ index }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15,
      }}
    >
      <Text>{index + 1}</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.textInputSmall}
        placeholder="Weight"
      ></TextInput>
      <TextInput
        keyboardType="numeric"
        style={styles.textInputSmall}
        placeholder="Reps"
      ></TextInput>
    </View>
  );
};

const CreateTemplate = () => {
  const [workoutsNum, setWorkoutsNum] = useState(Array(3).fill(0));
  const addField = () => {
    setWorkoutsNum((workoutsNum) => {
      let newWorkouts = workoutsNum.slice();
      newWorkouts.push(1);
      console.log(newWorkouts);
      return newWorkouts;
    });
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{}}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <ScrollView>
          <View>
            <View style={styles.workoutTitleContainer}>
              <Text style={styles.workoutTitle}>⚙️ Workout Title ⚙️</Text>
            </View>
            <TextInput
              style={[
                styles.textInput,
                { marginHorizontal: 20, marginBottom: 20 },
              ]}
              placeholder="Push Workout 1"
              onChangeText={handleChange("templateName")}
              onBlur={handleBlur("templateName")}
              value={values.templateName}
            />

            {workoutsNum.map((exercise, i) => {
              const [sets, setSets] = useState(Array(2).fill(0));
              return (
                <>
                  <View style={styles.set}>
                    <View style={styles.titleContainer}>
                      <Text style={styles.title}>{`Exercise ${i + 1}`}</Text>
                    </View>
                    <TextInput
                      placeholder="Exercise Name"
                      style={styles.textInput}
                      onChangeText={handleChange(`exercise${i}`)}
                      onBlur={handleBlur(`exercise${i}`)}
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
                    {sets.map((set, i) => {
                      return <SetsAddSection index={i} />;
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
                      <Text style={styles.buttonText}>Submit</Text>
                    </Pressable>
                  </View>
                </>
              );
            })}

            {Platform.OS === "ios" ? (
              <>
                <Button onPress={addField} title="Add" />
                <Button
                  style={styles.button}
                  onPress={handleSubmit}
                  title="Submit"
                />
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
          </View>
        </ScrollView>
      )}
    </Formik>
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
  workoutTitle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  workoutTitleContainer: {
    margin: 50,
    marginBottom: 20,
    alignItems: "center",
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
  title: {
    fontWeight: "500",
    fontSize: 18,
    color: "white",
  },
  checkbox: {
    margin: 10,

    backgroundColor: "rgba(158, 150, 150, .2)",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  checkboxAndroid: {
    margin: 10,
  },
  setRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
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

export default CreateTemplate;
