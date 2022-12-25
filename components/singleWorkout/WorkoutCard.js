import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const WorkoutCard = ({ workout }) => {
  const navigation = useNavigation();
  const title = workout.item.title;
  const lastPreformed = workout.item.lastPreformed;
  const exercises = workout.item.exercises;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("WorkoutScreen", { name: "test name" })
      }
    >
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>💪 {title}</Title>
          <Paragraph style={styles.paragraph}>
            Last Performed: {lastPreformed}
          </Paragraph>
          <View style={styles.horizontalLine} />
          <View>
            {exercises.map((exercise) => {
              return (
                <Paragraph style={styles.paragraph}>🏋️‍♀️{exercise}</Paragraph>
              );
            })}
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
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
    marginBottom: 5,
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
  },
});

export default WorkoutCard;
