import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Vibration,
  Dimensions,
} from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Ionicons } from "@expo/vector-icons";

const Timer = () => {
  const [seconds, setSeconds] = useState(30);
  const [totalSeconds, setTotalSeconds] = useState(30);
  const navigation = useNavigation();
  const [timeChosen, setTimeChosen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const startTimer = (seconds) => {
    setSeconds(seconds);
    setTotalSeconds(seconds);
    setTimeChosen(true);
    setIsPlaying(true);
  };

  let insideCircle;
  if (!timeChosen) {
    insideCircle = () => (
      <View style={styles.timerButtonsContainer}>
        <Button title="00:30" onPress={() => startTimer(30)} />
        <Button title="01:00" onPress={() => startTimer(60)} />
        <Button title="01:30" onPress={() => startTimer(90)} />
        <Button title="02:00" onPress={() => startTimer(120)} />
      </View>
    );
  } else {
    insideCircle = ({ remainingTime }) => (
      <>
        <Text style={styles.remainingTime}>{secondsToHMS(remainingTime)}</Text>
        <Text style={styles.totalSeconds}>{secondsToHMS(totalSeconds)}</Text>
      </>
    );
  }
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
          isPlaying={isPlaying}
          duration={seconds}
          size={Dimensions.get("window").width * 0.9}
          strokeWidth={9}
          colors={["#1A237E", "#A30000", "red"]}
          colorsTime={[10, 7, 0]}
          onComplete={() => {
            Vibration.vibrate(1000);
            navigation.goBack();
          }}
        >
          {insideCircle}
        </CountdownCircleTimer>
      </View>

      <View style={styles.buttonsContainer}>
        {/* Styling to increase the pressable area */}
        <TouchableOpacity
          onPress={() => {
            setSeconds((seconds) => Math.max(seconds - 10, 0));
            setTotalSeconds((totalSeconds) => Math.max(totalSeconds - 10, 0));
          }}
        >
          <View style={styles.iconBackground}>
            <Text style={{ color: "#007AFF", fontSize: 40 }}> - </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSeconds((seconds) => seconds + 10);
            setTotalSeconds((totalSeconds) => totalSeconds + 10);
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
  remainingTime: {
    fontSize: 50,
    fontWeight: "bold",
  },
  totalSeconds: {
    opacity: 0.5,
    fontSize: 25,
  },
  timerButtonsContainer: {
    flex: 1,
    justifyContent: "space-around",
    paddingVertical: 20,
    width: "30%",
  },
});
export default Timer;
function secondsToHMS(duration) {
  // Hours, minutes and seconds
  const hrs = Math.floor(duration / 3600);
  const mins = Math.floor((duration % 3600) / 60);
  const secs = Math.floor(duration % 60);

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}
