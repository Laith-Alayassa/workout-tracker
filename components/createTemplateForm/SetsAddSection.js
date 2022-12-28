import { TextInput, View, StyleSheet, Text } from "react-native";

export default function SetsAddSection({ index }) {
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
}

const styles = StyleSheet.create({
  textInputSmall: {
    backgroundColor: "rgba(150, 150, 150, .1)",
    borderRadius: 4,
    padding: 3,
    width: 80,
    marginBottom: 15,
    textAlign: "center",
  },
});
