import { View, Text } from "react-native";
import React from "react";

const WorkoutScreen = ({ route }) => {
  const { name } = route.params;

  return (
    <View>
      <Text>WorkoutPage {name} a </Text>
    </View>
  );
};

export default WorkoutScreen;
