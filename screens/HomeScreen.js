import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import BottomBar from "../components/shared/BottomBar";
import WorkoutCard from "../components/singleWorkout/WorkoutCard";
import { workouts } from "../data/workouts";

const HomeScreen = () => {
  const renderItem = (workout) => {
    return <WorkoutCard workout={workout} />;
  };
  return (
    <View style={styles.home}>
      <FlatList
        data={workouts}
        renderItem={renderItem}
        key={(item) => item.id}
        style={{ marginBottom: 70 }}
      />
      <BottomBar />
    </View>
  );
};
const styles = StyleSheet.create({
  home: { flex: 1, backgroundColor: "white" },
  card: {
    backgroundColor: "#D6E4E5",
    marginTop: 40,
    marginHorizontal: 18,
  },
  title: { color: "#395B64", marginBottom: 10 },
  paragraph: {
    color: "#395B64",
  },
});

export default HomeScreen;
