import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import GlobalStyles from "./styles/GlobalStyles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { theme } from "./styles/theme";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitleAlign: "center",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}
