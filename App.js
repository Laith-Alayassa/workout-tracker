import { SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import GlobalStyles from "./styles/GlobalStyles";

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <HomeScreen></HomeScreen>
    </SafeAreaView>
  );
}
