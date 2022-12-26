import { Text, View } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

const Timer = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <CountdownCircleTimer
      isPlaying
      duration={60}
      colors={["#1A237E", "#A30000"]}
      colorsTime={[7, 0]}
    >
      {({ remainingTime }) => <Text>{remainingTime}</Text>}
    </CountdownCircleTimer>
  </View>
);

export default Timer;
