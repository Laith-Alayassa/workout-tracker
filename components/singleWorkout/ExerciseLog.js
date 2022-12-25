import { View, Text, ScrollView } from "react-native";
import React from "react";

const ExerciseLog = ({ exercise }) => {
  const name = exercise.name;
  const reps = exercise.reps;
  const sets = exercise.sets;

  //   Can't use for loop so I have to make a list of sets
  // and use .map in a scroll view to render them
  const setsList = Array(sets).fill(0);
  return (
    <View>
      <Text>
        {name} {reps} X {sets}{" "}
      </Text>
      <ScrollView>
        {setsList.map((set) => {
          return (
            <View>
              <Text>1 set</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ExerciseLog;
