import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Ionicons } from "@expo/vector-icons";

import { Dimensions } from "react-native";

const Timer = () => {
  const [seconds, setSeconds] = useState(30);
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ margin: 50 }}>
        <CountdownCircleTimer
          isPlaying
          duration={seconds}
          size={Dimensions.get("window").width * 0.75}
          strokeWidth={17}
          colors={["#1A237E", "#A30000", "red"]}
          colorsTime={[10, 3, 0]}
          onComplete={() => {
            // it doesn't go back if I keep taking the count to zero!
            navigation.goBack();
          }}
        >
          {({ remainingTime }) => <Text>{remainingTime}</Text>}
        </CountdownCircleTimer>
      </View>

      <View style={styles.buttonsContainer}>
        {/* Styling to increase the pressable area */}
        <TouchableOpacity
          onPress={() => {
            setSeconds((seconds) => Math.max(seconds - 10, 0));
          }}
        >
          <View style={styles.iconBackground}>
            <Text style={{ color: "#007AFF", fontSize: 40 }}> - </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSeconds((seconds) => seconds + 10);
          }}
        >
          <View style={styles.iconBackground}>
            <Ionicons name="add" size={35} color="#007AFF" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    width: 200,
    backgroundColor: "white",
    borderRadius: 15,
    height: 90,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  // increasing touchable space for touchable opacity
  iconBackground: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Timer;
