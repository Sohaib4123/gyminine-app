import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import $Text from "../UI/customText.component";

interface TimeSelectorProps {
  times: string[];
  selected: string;
  onSelect: (time: string) => void;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ times, selected, onSelect }) => {
  return (
    <View style={styles.container}>
      <$Text style={styles.heading} size="xl" weight="bold">Time</$Text>
      <View style={styles.row}>
        {times.map((time) => (
          <TouchableOpacity
            key={time}
            onPress={() => onSelect(time)}
            style={[styles.timeBox, selected === time && styles.timeBoxActive]}
          >
            <$Text style={selected === time && styles.timeTextActive} size="md" color='dark'>
              {time}
            </$Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  timeBox: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 25,
    margin: 6,
  },
  timeBoxActive: {
    backgroundColor: "#66706A",
    borderColor: "#66706A",
  },
  timeText: {
    color: "#000",
  },
  timeTextActive: {
    color: "#FFF",
  },
});

export default TimeSelector;
