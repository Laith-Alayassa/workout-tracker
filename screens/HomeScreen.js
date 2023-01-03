import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import WorkoutCard from "../components/singleWorkout/WorkoutCard";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  LexendDeca_300Light,
  LexendDeca_400Regular,
  LexendDeca_500Medium,
  LexendDeca_700Bold,
} from "@expo-google-fonts/lexend-deca";
import { useNavigation } from "@react-navigation/native";
import Boxes from "../components/home/Boxes";
import { useEffect, useState } from "react";
import {
  deleteDocument,
  getFormData,
  updateLastPerformedDate,
} from "../data/firestopreRealTime";
import {
  Menu,
  MenuOptions,
  MenuOption,
  renderers,
  MenuTrigger,
} from "react-native-popup-menu";

const { SlideInMenu } = renderers;

export function createWorkoutObjects(actualData) {
  let workoutObjectsArray = [];
  for (let index = 0; index < actualData.length; index++) {
    let workoutObject = {};
    workoutObject.name = actualData[index].name;
    workoutObject.exercises = actualData[index].exercises;
    workoutObject.lastPerformed = actualData[index].lastPerformed;
    workoutObject.key = actualData[index].key;

    workoutObjectsArray.push(workoutObject);
  }
  return workoutObjectsArray;
}

const HomeScreen = () => {
  const [workouts, setWorkouts] = useState([]);
  const [itemChange, SetItemChange] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    setDataFromDB(setWorkouts);
    setDataLoaded(true);
  }, [itemChange]);

  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    LexendDeca_300Light,
    LexendDeca_400Regular,
    LexendDeca_500Medium,
    LexendDeca_700Bold,
  });
  const renderItem = (workout) => {
    return <WorkoutCard workout={workout} />;
  };

  if (fontsLoaded && dataLoaded) {
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
                const title = workout.name;
                const lastPreformed = workout.lastPerformed;
                const exercises = workout.exercises;
                const key = workout.key;
                return (
                  // TODO: Make this a component
                  workoutCardWithPressMenu(
                    workout,
                    navigation,
                    title,
                    lastPreformed,
                    exercises,
                    key,
                    SetItemChange,
                    itemChange,
                    SetItemChange
                  )
                );
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
function workoutCardWithPressMenu(
  workout,
  navigation,
  title,
  lastPreformed,
  exercises,
  key,
  SetItemDeleted,
  itemDeleted,
  SetItemChange
) {
  return (
    <View key={workout.key}>
      <Menu renderer={SlideInMenu}>
        <MenuTrigger
          customStyles={{
            TriggerTouchableComponent: TouchableWithoutFeedback,
          }}
        >
          <WorkoutCard workout={workout}></WorkoutCard>
        </MenuTrigger>
        <MenuOptions style={{ marginBottom: 50 }}>
          <MenuOption
            style={{ padding: 36 }}
            onSelect={() => {
              navigation.navigate("WorkoutScreen", {
                title,
                lastPreformed,
                exercises,
                key,
              });
              updateLastPerformedDate(
                workout.key,
                new Date().toLocaleDateString()
              );
              SetItemChange((value) => !value);
            }}
            text="Start workout"
          />
          <MenuOption
            style={{ padding: 36 }}
            onSelect={() => {
              deleteDocument("users", key).then(SetItemDeleted(!itemDeleted));
            }}
          >
            <Text style={{ color: "red" }}>Delete</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
}

export function setDataFromDB(setWorkouts) {
  const data = getFormData();
  // The time out is for the data to load
  setTimeout(async function () {
    let actualData = data["_z"];
    const workoutObjectsArray = createWorkoutObjects(actualData);
    setWorkouts(workoutObjectsArray);
  }, 1000);
}
