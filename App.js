import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import GlobalStyles from "./styles/GlobalStyles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { theme } from "./styles/theme";
import WorkoutScreen from "./screens/WorkoutPage";
import TimerScreen from "./screens/TimerScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="WorkoutScreen"
              component={WorkoutScreen}
              options={{
                headerTitleAlign: "center",
                title: "Workout Time",
              }}
            />
            <Stack.Screen
              name="Timer"
              component={TimerScreen}
              options={{
                headerTitleAlign: "center",
                title: "Timer",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}
