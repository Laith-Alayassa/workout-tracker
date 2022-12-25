import { View, Text, FlatList } from "react-native";
import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import BottomBar from "../components/shared/BottomBar";

const workouts = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];

const HomeScreen = () => {
  const renderItem = () => {
    return (
      <Card
        style={{
          backgroundColor: "#E7F6F2",
          marginTop: 40,
          marginHorizontal: 18,
        }}
      >
        <Card.Content>
          <Title style={{ color: "#395B64" }}> 💪 Back Workout</Title>
          <Paragraph style={{ color: "#395B64" }}>
            Last Performed : 2 days ago
          </Paragraph>
          <View>
            <Paragraph style={{ color: "#395B64" }}>
              Beck Press: 2 X 4
            </Paragraph>
            <Paragraph style={{ color: "#395B64" }}>
              triceps cable pulldown: 2 X 4
            </Paragraph>
            <Paragraph style={{ color: "#395B64" }}>
              Cable Press: 2 X 4
            </Paragraph>
          </View>
        </Card.Content>
        <Card.Actions>
          <Button>Start</Button>
        </Card.Actions>
      </Card>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#395B64" }}>
      <FlatList
        data={workouts}
        renderItem={renderItem}
        style={{ marginBottom: 80 }}
      />
      <BottomBar></BottomBar>
    </View>
  );
};

export default HomeScreen;
