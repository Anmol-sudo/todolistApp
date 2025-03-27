// ListSection.tsx
import React from "react";
import { ScrollView, View } from "react-native";
import ListItem from "./ListItem"; // Adjust the path if necessary
import { Item } from "./ListItem"; // Ensure the Item interface is exported from ListItem.tsx

interface ListSectionProps {
  items: Item[];
}

const ListSection: React.FC<ListSectionProps> = ({ items }) => {
  return (
    <View style={{ flexGrow: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ListSection;
