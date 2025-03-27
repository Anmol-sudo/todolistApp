import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <TouchableNativeFeedback
        onPress={() => Alert.alert("TouchableNativeFeedback pressed")}
      >
        <View style={styles.leftContainer}>
          <Ionicons name="add" size={30} color="#126ed6" />
          <Text style={styles.footerText}>New List</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableOpacity
        style={styles.rightContainer}
        onPress={() => Alert.alert("TouchableOpacity pressed")}
      >
        <MaterialCommunityIcons
          name="clipboard-plus-outline"
          size={30}
          color="#126ed6"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    paddingLeft: 8,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderColor: "#e7e7e7",
    alignItems: "stretch", // Ensures children stretch to fill the container height
  },
  leftContainer: {
    flex: 1, // Takes all available space except that taken by the TouchableOpacity
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 12, // Ensure some space for touchable area
  },
  footerText: {
    color: "#126ed6",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Footer;
