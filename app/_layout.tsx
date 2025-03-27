import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "",
        headerLeft: () => (
          <TouchableNativeFeedback>
            <View style={styles.headerLeftContainer}>
              <View>
                <Image
                  width={40}
                  height={40}
                  source={{ uri: "https://avatar.iran.liara.run/public" }}
                />
              </View>
              <View style={styles.userDetailsContainer}>
                <View style={styles.userNameContainer}>
                  <Text>Krishna Weber</Text>
                  <Ionicons name="chevron-down" size={22} />
                </View>
                <View>
                  <Text
                    style={styles.userEmail}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    krishnaweber9@outlook.com
                  </Text>
                </View>
              </View>
            </View>
          </TouchableNativeFeedback>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Ionicons name="search" size={22} color="#246ec6" />
          </TouchableOpacity>
        ),
      }}
    />
  );
}

const styles = StyleSheet.create({
  headerLeftContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  userDetailsContainer: {},
  userNameContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: -4,
  },
  userEmail: {
    color: "#62748e",
  },
});
