import React, { useMemo, useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Switch, Text } from "react-native";
import { NewCalendarList } from "react-native-calendars";
import { getWorkoutDays } from "../data/firestopreRealTime";

const initialDate = "2020-05-16";
// const testIDs = [1, 2, 3, 4, 5, 6];
const NewCalendarListScreen = () => {
  const [selected, setSelected] = useState(initialDate);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    getFormattedWorkoutDays(setMarkedDates);
  }, []);
  const onValueChange = useCallback(
    (value) => {
      setIsHorizontal(value);
    },
    [isHorizontal]
  );

  const onDayPress = useCallback(
    (day) => {
      console.warn("dayPress: ", day);
      setSelected(day.dateString);
    },
    [setSelected]
  );

  const calendarProps = useMemo(() => {
    return {
      markedDates: markedDates,
      onDayPress: onDayPress,
    };
  }, [selected, markedDates, onDayPress]);

  return (
    <View style={styles.container}>
      <View style={styles.switchView}>
        <Text style={styles.switchText}>Horizontal</Text>
        <Switch value={isHorizontal} onValueChange={onValueChange} />
      </View>
      <NewCalendarList
        key={Number(isHorizontal)} // only for this example - to force rerender
        horizontal={isHorizontal}
        staticHeader
        // initialDate={initialDate}
        // scrollRange={10}
        calendarProps={calendarProps}
        // testID={testIDs.horizontalList.CONTAINER}
      />
    </View>
  );
};

export default NewCalendarListScreen;

function getFormattedWorkoutDays(setMarkedDates) {
  const workoutDays = getWorkoutDays();
  let formattedData = {};
  setTimeout(function () {
    workoutDays.forEach((date) => {
      formattedData[date] = { selected: true, marked: true };
    });
    setMarkedDates(formattedData);
    return formattedData;
  }, 1000);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switchView: {
    flexDirection: "row",
    height: 70,
    padding: 10,
    paddingBottom: 30,
    backgroundColor: "white",
    alignItems: "center",
    position: "absolute",
    borderTopWidth: 1,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 100,
  },
  switchText: {
    marginRight: 20,
    fontSize: 16,
  },
});
