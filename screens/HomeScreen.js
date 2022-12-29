import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import BottomBar from "../components/shared/BottomBar";
import WorkoutCard from "../components/singleWorkout/WorkoutCard";
import workouts from "../data/workouts";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  LexendDeca_100Thin,
  LexendDeca_200ExtraLight,
  LexendDeca_300Light,
  LexendDeca_400Regular,
  LexendDeca_500Medium,
  LexendDeca_600SemiBold,
  LexendDeca_700Bold,
  LexendDeca_800ExtraBold,
  LexendDeca_900Black,
} from "@expo-google-fonts/lexend-deca";
import { useNavigation } from "@react-navigation/native";
import Boxes from "../components/home/Boxes";

const HomeScreen = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    LexendDeca_100Thin,
    LexendDeca_200ExtraLight,
    LexendDeca_300Light,
    LexendDeca_400Regular,
    LexendDeca_500Medium,
    LexendDeca_600SemiBold,
    LexendDeca_700Bold,
    LexendDeca_800ExtraBold,
    LexendDeca_900Black,
  });
  const renderItem = (workout) => {
    return <WorkoutCard workout={workout} />;
  };

  if (fontsLoaded) {
    return (
      <View style={styles.home}>
        <Text style={styles.heroText}>Hi Laith 👋</Text>
        <Text style={styles.subHeroText}>What are we hitting today?</Text>
        <Boxes />

        <FlatList
          data={workouts}
          renderItem={renderItem}
          key={(item) => item.id}
          style={{ marginBottom: 70 }}
        />
        <BottomBar />
      </View>
    );
  } else {
    return <AppLoading />;
  }
};
const styles = StyleSheet.create({
  home: { flex: 1, backgroundColor: "white" },
  heroText: {
    fontSize: 29,
    fontFamily: "LexendDeca_700Bold",
    marginLeft: 24,
    marginTop: 32,
    marginBottom: 16,
    color: "#1B1B1B",
  },
  subHeroText: {
    fontSize: 16,
    fontFamily: "LexendDeca_400Regular",
    color: "#1B1B1B",
    marginLeft: 24,
    marginBottom: 16,
  },

  title: { color: "#395B64", marginBottom: 10 },
  paragraph: {
    color: "#395B64",
  },
});

export default HomeScreen;
