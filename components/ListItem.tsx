// ListItem.tsx
import React from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  Alert,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type EmojiTypeIonicons = keyof typeof Ionicons.glyphMap;
type EmojiTypeMaterialCommunity = keyof typeof MaterialCommunityIcons.glyphMap;

export interface Item {
  emoji: EmojiTypeIonicons | EmojiTypeMaterialCommunity;
  title: string;
  color: string;
  count: number;
  type: "Ionicons" | "MaterialCommunityIcons";
}

const ListItem: React.FC<{ item: Item }> = ({ item }) => {
  const renderIcon = () => {
    if (item.type === "Ionicons") {
      return (
        <Ionicons
          name={item.emoji as EmojiTypeIonicons}
          size={24}
          color={`#${item.color || "000"}`} // Default to black if color is empty
        />
      );
    } else if (item.type === "MaterialCommunityIcons") {
      return (
        <MaterialCommunityIcons
          name={item.emoji as EmojiTypeMaterialCommunity}
          size={24}
          color={`#${item.color || "000"}`} // Default to black if color is empty
        />
      );
    }
    return null;
  };

  return (
    <TouchableNativeFeedback
      onPress={() => Alert.alert(`${item.title} clicked`)}
    >
      <View style={styles.btnElementsContainer}>
        <View>{renderIcon()}</View>
        <View style={styles.btnTxtContainer}>
          <Text style={styles.btnTitle}>{item.title}</Text>
          <Text style={styles.btnCount}>{item.count}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  btnElementsContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  btnTxtContainer: {
    flex: 1,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnTitle: {
    fontSize: 18,
  },
  btnCount: {
    fontSize: 18,
    color: "#888",
  },
});

export default ListItem;
