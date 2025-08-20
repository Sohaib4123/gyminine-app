import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import $Text from "../UI/customText.component";

interface SessionTypeSelectorProps {
  options: number[];
  selected: number;
  onSelect: (value: number) => void;
}

const SessionTypeSelector: React.FC<SessionTypeSelectorProps> = ({
  options,
  selected,
  onSelect,
}) => {
  return (
    <View style={styles.container}>
      <$Text style={styles.heading} size="xl" weight="bold">Session Type</$Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => onSelect(option)}
          style={styles.optionRow}
        >
          <View style={[styles.radio, selected === option && styles.radioActive]}>
            {selected === option && <View style={styles.radioDot} />}
          </View>
          <$Text style={styles.optionText} size="md">{option} sessions</$Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  heading: {
    marginBottom: 8,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#666",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  radioActive: {
    borderColor: "#000",
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#000",
  },
  optionText: {
    color: "#333",
  },
});

export default SessionTypeSelector;
