import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const WorkoutCard = ({ workout }) => {
  const navigation = useNavigation();
  const title = workout.item.title;
  const lastPreformed = workout.item.lastPreformed;
  const exercises = workout.item.exercises;

  return (
    <Card
      style={styles.card}
      onPress={() =>
        navigation.navigate("WorkoutScreen", {
          title,
          lastPreformed,
          exercises,
        })
      }
    >
      <Card.Content>
        <View style={styles.titleContainer}>
          <Title style={styles.title}>💪 {title}</Title>
        </View>
        <Paragraph style={styles.paragraph}>
          Last Performed: {lastPreformed}
        </Paragraph>
        <View style={styles.horizontalLine} />
        <View>
          {exercises.map((exercise) => {
            return (
              <Paragraph style={styles.paragraph}>
                🏋️‍♀️ {exercise.name} {exercise.reps} X {exercise.sets}
              </Paragraph>
            );
          })}
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  home: { flex: 1, backgroundColor: "white" },
  card: {
    backgroundColor: "white",
    marginTop: 40,
    marginHorizontal: 18,
  },
  titleContainer: {
    backgroundColor: "#304FFE",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  title: { color: "white" },
  paragraph: {
    color: "#395B64",
    marginBottom: 10,
    fontSize: 16,
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
  },
});

export default WorkoutCard;
