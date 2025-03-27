// src/data/defaultItems.ts
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

export const defaultItems: Item[] = [
  {
    emoji: "sunny-outline",
    title: "My Day",
    color: "000",
    count: 0,
    type: "Ionicons",
  },
  {
    emoji: "star-outline",
    title: "Important",
    color: "833f58",
    count: 0,
    type: "Ionicons",
  },
  {
    emoji: "calendar-outline",
    title: "Planned",
    color: "2c665d",
    count: 0,
    type: "Ionicons",
  },
  {
    emoji: "person-outline",
    title: "Assigned to me",
    color: "2c665d",
    count: 0,
    type: "Ionicons",
  },
  {
    emoji: "flag-outline",
    title: "Flagged email",
    color: "b0534e",
    count: 0,
    type: "Ionicons",
  },
  {
    emoji: "home-plus-outline",
    title: "Tasks",
    color: "",
    count: 0,
    type: "MaterialCommunityIcons",
  },
  {
    emoji: "hand-wave",
    title: "Getting started",
    color: "fdc20d",
    count: 0,
    type: "MaterialCommunityIcons",
  },
  {
    emoji: "cart",
    title: "Groceries",
    color: "ef8b0b",
    count: 0,
    type: "Ionicons",
  },
];
