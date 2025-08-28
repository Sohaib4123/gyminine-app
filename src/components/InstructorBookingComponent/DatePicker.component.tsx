// import React, { useState } from "react";
// import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
// import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
// import { Ionicons } from "@expo/vector-icons";
// import $Text from "../UI/customText.component";

// interface DatePickerInputProps {
//   date: Date;
//   onChange: (date: Date) => void;
// }

// const DatePickerInput: React.FC<DatePickerInputProps> = ({ date, onChange }) => {
//   const [show, setShow] = useState(false);

//   const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
//     setShow(Platform.OS === "ios");
//     if (selectedDate) {
//       onChange(selectedDate);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <$Text style={styles.heading} size="xl" weight="bold">Session Date</$Text>
//       <TouchableOpacity style={styles.input} onPress={() => setShow(true)}>
//         <$Text style={styles.inputText} size="md">{date.toLocaleDateString()}</$Text>
//         <Ionicons name="calendar-outline" size={20} color="gray" />
//       </TouchableOpacity>
//       {show && (
//         <DateTimePicker
//           value={date}
//           mode="date"
//           display={Platform.OS === "ios" ? "spinner" : "default"}
//           onChange={onDateChange}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 16,
//   },
//   heading: {
//     marginBottom: 8,
//   },
//   input: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#F3F3F3",
//     padding: 14,
//     borderRadius: 10,
//   },
//   inputText: {
//     color: "#333",
//   },
// });

// export default DatePickerInput;


import React, { useState } from "react";
import { View, TouchableOpacity, Platform } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import tw from "../../utils/tailwind";
import $Text from "../UI/customText.component";

interface DatePickerInputProps {
  label?: string;
  date: Date;
  onChange: (date: Date) => void;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({ label, date, onChange }) => {
  const [show, setShow] = useState(false);

  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(Platform.OS === "ios");
    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  return (
    <View style={tw`mt-1`}>
      {label && (
        <$Text style={tw`mb-2`} size="lg" weight="bold">
        {label}
      </$Text>
      )}
      <TouchableOpacity
        style={tw`flex-row justify-between items-center bg-gray-100 p-3.5 rounded-xl`}
        onPress={() => setShow(true)}
      >
        <$Text style={tw`text-gray-800`} size="md">
          {date.toLocaleDateString()}
        </$Text>
        <Ionicons name="calendar-outline" size={20} color="gray" />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onDateChange}
        />
      )}
    </View>
  );
};

export default DatePickerInput;
