import { useState } from "react";
import { TextInput, View, StyleSheet, Text, ScrollView } from "react-native";
import { Formik } from "formik";
import Workout from "../components/createTemplateForm/Workout";
import EndFormButtons from "../components/createTemplateForm/EndFormButtons";
import { writeFormData } from "../data/firestopreRealTime";
import { formatFormForFirebaseUpload } from "../formFormatter";
import { useNavigation } from "@react-navigation/native";

const submitForm = (values, navigation) => {
  const form = formatFormForFirebaseUpload(values);
  writeFormData(form);
  navigation.navigate("Home");
};
const CreateTemplateScreen = () => {
  const navigation = useNavigation();
  const [workoutsNum, setWorkoutsNum] = useState(Array(3).fill(0));

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{}}
      onSubmit={(values) => submitForm(values, navigation)}
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
                {
                  marginHorizontal: 24,
                  marginBottom: 24,
                  fontFamily: "LexendDeca_400Regular",
                },
              ]}
              placeholder="Push Workout V1"
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
    fontFamily: "LexendDeca_400Regular",
    fontWeight: "bold",
    fontSize: 24,
  },
  workoutTitleContainer: {
    marginVertical: 24,
    alignItems: "center",
  },
});

export default CreateTemplateScreen;
