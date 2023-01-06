import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React from "react";
import { Formik } from "formik";
import { auth } from "../config/firebaseConfig";

export default function LoginScreen() {
  const onLogin = async () => {
    try {
      auth.singinwithEmailAndPassword(email, password);
    } catch (error) {}
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login</Text>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              style={{ backgroundColor: "grey" }}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />
            <TextInput
              style={{ backgroundColor: "grey" }}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
