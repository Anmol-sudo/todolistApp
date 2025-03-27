import {
  View,
} from "react-native";
import ListSection from "@/components/ListSection";
import Footer from "@/components/Footer";
import { defaultItems } from "@/data/defaultItems";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <ListSection items={defaultItems} />
      <Footer />
    </View>
  );
}

