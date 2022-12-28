import { useState } from "react";
import { TextInput, View, StyleSheet, Text, ScrollView } from "react-native";
import { Formik } from "formik";
import Workout from "../components/createTemplateForm/Workout";
import EndFormButtons from "../components/createTemplateForm/EndFormButtons";

const CreateTemplateScreen = () => {
  const [workoutsNum, setWorkoutsNum] = useState(Array(3).fill(0));

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

            {workoutsNum.map((exercise, index) => {
              return (
                <Workout
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  index={index}
                />
              );
            })}

            <EndFormButtons
              handleSubmit={handleSubmit}
              workoutsNum={workoutsNum}
              setWorkoutsNum={setWorkoutsNum}
            />
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
  workoutTitle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  workoutTitleContainer: {
    margin: 50,
    marginBottom: 20,
    alignItems: "center",
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

export default CreateTemplateScreen;
