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
import WorkoutScreen from "./screens/WorkoutScreen";
import TimerScreen from "./screens/TimerScreen";
import StopWatch from "./components/shared/StopWatch";
import CreateTemplateScreen from "./screens/CreateTemplateScreen";
import { MenuProvider } from "react-native-popup-menu";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MenuProvider>
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
                  headerTitle: (props) => <StopWatch />,
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
              <Stack.Screen
                name="StopWatch"
                component={StopWatch}
                options={{
                  headerTitleAlign: "center",
                  title: "Timer",
                }}
              />
              <Stack.Screen
                name="CreateTemplate"
                component={CreateTemplateScreen}
                options={{
                  headerTitleAlign: "center",
                  title: "🔨 Create Template 🔨",
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </PaperProvider>
    </MenuProvider>
  );
}
