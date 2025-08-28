import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import $Text from "../UI/customText.component";
import tw from "../../utils/tailwind";

interface Props {
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

function getWeekDates(): { date: string; day: string; dayNum: string }[] {
  const today = new Date();
  const week: any[] = [];
  for (let i = 0; i < 8; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    week.push({
      date: d.toISOString().split("T")[0],
      day: d.toLocaleDateString("en-US", { weekday: "short" }).toLowerCase(),
      dayNum: String(d.getDate()),
    });
  }
  return week;
}

export default function WeekDatePicker({ selectedDate, onSelectDate }: Props) {
  const weekDates = getWeekDates();

  return (
    <FlatList
      data={weekDates}
      keyExtractor={(item) => item.date}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        const isSelected = item.date === selectedDate;
        return (
          <TouchableOpacity
            style={tw.style(
              "w-12 h-16 rounded-lg justify-center items-center mr-2",
              isSelected && "bg-main"
            )}
            onPress={() => onSelectDate(item.date)}
          >
            <$Text
              style={tw.style("text-dark", isSelected && "text-light")}
              size="md"
            >
              {item.day}
            </$Text>
            <$Text
              style={tw.style("text-dark", isSelected && "text-light")}
              weight="bold"
              size="lg"
            >
              {item.dayNum}
            </$Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}
