import { TextInput, View, StyleSheet, Text } from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";

export default function SetsAddSection({
  workoutIndex,
  setIndex,
  handleBlur,
  handleChange,
  setFieldValue,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
      }}
    >
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          fontFamily: "LexendDeca_400Regular",
        }}
      >
        {setIndex + 1}
      </Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
          keyboardType="numeric"
          style={styles.textInputSmall}
          placeholder="Weight"
          onChangeText={handleChange(
            `weight Workout: ${workoutIndex}, S: ${setIndex}`
          )}
          onBlur={handleBlur(`weight Workout: ${workoutIndex} S: ${setIndex}`)}
        />
      </View>
      {/* 
      
      // * Having scroll view for weight means that we need to have increments
      // * by 0.5 pounds, loading the array of these weights is very slow
      */}
      {/* <View style={styles.scrollPickerContainer}>
        <ScrollPicker
          dataSource={weightsArray}
          selectedIndex={51}
          renderItem={(data, index) => {
            return <Text>{data}</Text>;
          }}
          onValueChange={(data, selectedIndex) => {
            // handleChange(`weight Workout: ${workoutIndex}, S: ${setIndex}`);
            setFieldValue(
              `weight Workout: ${workoutIndex}, S: ${setIndex}`,
              data
            );
          }}
          wrapperHeight={100}
          wrapperWidth={10}
          wrapperColor="#FFFFFF"
          // itemHeight={60}
          highlightColor="#d8d8d8"
          highlightBorderWidth={2}
        />
      </View> */}
      <View style={styles.scrollPickerContainer}>
        <ScrollPicker
          dataSource={Array.from({ length: 20 }, (_, i) => i + 1)}
          selectedIndex={10}
          renderItem={(data, index) => {
            return <Text>{data}</Text>;
          }}
          onValueChange={(data, selectedIndex) => {
            // handleChange(`reps Workout: ${workoutIndex}, S: ${setIndex}`);
            setFieldValue(
              `reps Workout: ${workoutIndex}, S: ${setIndex}`,
              data
            );
          }}
          wrapperHeight={91}
          wrapperWidth={10}
          wrapperColor="#FFFFFF"
          // itemHeight={60}
          highlightColor="#d8d8d8"
          highlightBorderWidth={2}
        />
      </View>
      {/* 
      <TextInput
        keyboardType="numeric"
        style={styles.textInputSmall}
        placeholder="Weight"
        onChangeText={handleChange(
          `weight Workout: ${workoutIndex}, S: ${setIndex}`
        )}
        onBlur={handleBlur(`weight Workout: ${workoutIndex} S: ${setIndex}`)}
      ></TextInput>
      <TextInput
        keyboardType="numeric"
        style={styles.textInputSmall}
        placeholder="Reps"
        onChangeText={handleChange(
          `reps Workout: ${workoutIndex}, S: ${setIndex}`
        )}
        onBlur={handleBlur(`reps Workout: ${workoutIndex} S: ${setIndex}`)}
      ></TextInput> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textInputSmall: {
    fontFamily: "LexendDeca_400Regular",
    backgroundColor: "rgba(150, 150, 150, .1)",
    borderRadius: 4,
    padding: 3,
    width: 80,
    marginBottom: 8,
    textAlign: "center",
  },
  scrollPickerContainer: { width: 60, margin: 5, flex: 1 },
});
