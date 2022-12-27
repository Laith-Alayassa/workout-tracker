import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { writeTemplateData } from "../data/firestopreRealTime";

const CreateTemplate = () => {
  const [workoutsNum, setWorkoutsNum] = useState(Array(3).fill(0));

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{}}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={handleChange("templateName")}
            onBlur={handleBlur("templateName")}
            value={values.templateName}
          />
          {workoutsNum.map((exercise, i) => {
            return (
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange(`exercise${i}`)}
                onBlur={handleBlur(`exercise${i}`)}
              />
            );
          })}
          {/* <TextInput
            style={styles.textInput}
            onChangeText={handleChange("exercise1")}
            onBlur={handleBlur("exercise1")}
            value={values.exercise1}
          />

          <TextInput
            style={styles.textInput}
            onChangeText={handleChange("exercise2")}
            onBlur={handleBlur("exercise2")}
            value={values.exercise2}
          /> */}
          <Button
            onPress={() =>
              setWorkoutsNum((workoutsNum) => {
                let newWorkouts = workoutsNum.slice();
                newWorkouts.push(1);
                console.log(newWorkouts);
                return newWorkouts;
              })
            }
            title="add"
          />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "grey",
    borderColor: "blue",
    borderWidth: 1,
  },
});

export default CreateTemplate;
