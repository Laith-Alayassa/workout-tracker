import { View, StyleSheet, Text, ScrollView } from "react-native";
import WorkoutCard from "../components/singleWorkout/WorkoutCard";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  LexendDeca_300Light,
  LexendDeca_400Regular,
  LexendDeca_500Medium,
} from "@expo-google-fonts/lexend-deca";
import { useNavigation } from "@react-navigation/native";
import Boxes from "../components/home/Boxes";
import { useEffect, useState } from "react";
import { getFormData } from "../data/firestopreRealTime";

export function createWorkoutObjects(actualData) {
  let workoutObjectsArray = [];
  for (let index = 0; index < actualData.length; index++) {
    let workoutObject = {};
    workoutObject.name = actualData[index].name;
    workoutObject.exercises = actualData[index].exercises;
    workoutObject.lastPerformed = actualData[index].lastPerformed;

    console.log(workoutObject.exercises);
    workoutObjectsArray.push(workoutObject);
    // console.log(actualData[index]);
  }
  return workoutObjectsArray;
}

const HomeScreen = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    setDataFromDB(setWorkouts);
  }, []);

  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    LexendDeca_300Light,
    LexendDeca_400Regular,
    LexendDeca_500Medium,
  });
  const renderItem = (workout) => {
    return <WorkoutCard workout={workout} />;
  };

  if (fontsLoaded) {
    return (
      <>
        <View style={styles.home}>
          <ScrollView>
            <Text style={styles.heroText}>Hi Laith 👋</Text>
            <Text style={styles.subHeroText}>What are we hitting today?</Text>
            <Boxes setWorkouts={setWorkouts} />

            {/* Margin Bottom so bottom navigation doesn't overlap */}
            <View style={{ marginBottom: 80 }}>
              {workouts.map((workout) => {
                // return <Text>Place Holder Workout</Text>;
                return <WorkoutCard workout={workout}></WorkoutCard>;
              })}
            </View>
          </ScrollView>
        </View>
        {/* <BottomBar /> */}
      </>
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
export function setDataFromDB(setWorkouts) {
  const data = getFormData();

  // The time out is for the data to load
  setTimeout(function () {
    let actualData = data["_z"];
    console.log(actualData);
    const workoutObjectsArray = createWorkoutObjects(actualData);
    setWorkouts(workoutObjectsArray);
  }, 1000);
}
