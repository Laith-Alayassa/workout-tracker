import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  useFonts,
  LexendDeca_300Light,
  LexendDeca_400Regular,
  LexendDeca_500Medium,
  LexendDeca_700Bold,
  useEffect,
  useState,
  WorkoutCardWithPressMenu,
  getFormData,
  Boxes,
  StyleSheet,
} from "../components/home/homeBarrel";

const HomeScreen = () => {
  const [workouts, setWorkouts] = useState([]);
  const [itemChange, SetItemChange] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  let [fontsLoaded] = useFonts({
    LexendDeca_300Light,
    LexendDeca_400Regular,
    LexendDeca_500Medium,
    LexendDeca_700Bold,
  });

  useEffect(() => {
    setDataFromDB(setWorkouts);
    setDataLoaded(true);
  }, [itemChange]);

  if (fontsLoaded && dataLoaded) {
    return (
      <>
        <View style={styles.home}>
          <ScrollView>
            <Text style={styles.heroText}>Hi Laith 👋</Text>
            <Text style={styles.subHeroText}>What are we hitting today?</Text>

            <Boxes setWorkouts={setWorkouts} />

            {workouts.map((workout) => {
              return (
                <WorkoutCardWithPressMenu
                  key={workout.key}
                  workout={workout}
                  SetItemChange={SetItemChange}
                />
              );
            })}
          </ScrollView>
        </View>
        {/* <BottomBar /> */}
      </>
    );
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
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
});

export default HomeScreen;

export function setDataFromDB(setWorkouts) {
  const data = getFormData();
  // The time out is for the data to load
  setTimeout(async function () {
    let actualData = data["_z"];
    const workoutObjectsArray = createWorkoutObjects(actualData);
    setWorkouts(workoutObjectsArray);
  }, 1000);
}

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
