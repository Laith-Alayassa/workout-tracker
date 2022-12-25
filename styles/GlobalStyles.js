import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    // 👇 this seems not to be needed when using the navigator default header
    // paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
