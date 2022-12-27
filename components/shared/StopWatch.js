import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Stopwatch } from "react-native-stopwatch-timer";

const StopWatch = () => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(true);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <View style={styles.sectionStyle}>
      <Stopwatch
        laps
        secs
        start={isStopwatchStart}
        //To start
        reset={resetStopwatch}
        //To reset
        options={options}
        //options for the styling
        getTime={(time) => {
          //   console.log(time);
        }}
      />

      {/* Buttons to control timer */}
      {/* <TouchableOpacity
        onPress={() => {
          setIsStopwatchStart(!isStopwatchStart);
          setResetStopwatch(false);
        }}
      >
        <Text style={styles.buttonText}>
          {!isStopwatchStart ? "START" : "STOP"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setIsStopwatchStart(false);
          setResetStopwatch(true);
        }}
      >
        <Text style={styles.buttonText}>RESET</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default StopWatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  sectionStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },
});

const options = {
  container: {
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#007AFF",
    marginLeft: 7,
  },
};
