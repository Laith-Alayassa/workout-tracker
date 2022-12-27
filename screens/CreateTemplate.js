import React from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { writeTemplateData } from "../data/firestopreRealTime";

const CreateTemplate = () => {
  return (
    <Formik
      // initialValues={{ templateName: "", exercise1: "", exercise2: "" }}
      onSubmit={(values) => writeTemplateData(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={handleChange("templateName")}
            onBlur={handleBlur("templateName")}
            value={values.templateName}
          />
          <TextInput
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
