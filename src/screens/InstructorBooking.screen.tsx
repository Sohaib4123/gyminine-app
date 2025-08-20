import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { useNavigation, RouteProp, NavigationProp} from "@react-navigation/native";
import { Header } from "../components/UI/header.component";
import SessionTypeSelector from "../components/InstructorBookingComponent/SessionSelector.component";
import DatePickerInput from "../components/InstructorBookingComponent/DatePicker.component";
import TimeSelector from "../components/InstructorBookingComponent/TimeSelector.component";
import $Button from "../components/UI/customButton.component";
import $Text from "../components/UI/customText.component";
import theme from "../theme";
import { instructors } from "../data/instructorData";
import { RootStackParamList } from "../types/Navigation.type";

type instructor = {
  id: string;
  name: string;
  speciality: string;
  image: string;
  description: string;
};
type InstructorBookRoute = RouteProp<RootStackParamList, "instructorBook">;

const InstructorBookingScreen: React.FC<{route: InstructorBookRoute}> = ({ route }) => {
  const [sessionType, setSessionType] = useState(3);
  const [date, setDate] = useState(new Date(2023, 10, 22)); // Nov 22, 2023
  const [time, setTime] = useState("9:00 am");
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [instructor, setInstructor] = useState<instructor>();
  const { instructorId } = route.params;
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    try {
      const data = instructors.find((i) => i.id === instructorId);
      setInstructor(data || undefined);
      setLoading(false);
    } catch (error) {
      console.log("Error when getting instructor data!!!", error);
    }
  }, []);

  const getTrimmedText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header
        title={instructor?.name || "Instructor"}
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 20 }}>
        <View>
          <Image
            source={{
              uri: instructor?.image || "https://via.placeholder.com/300x200",
            }}
            style={styles.image}
          />
          <$Text style={styles.special} size="md">{instructor?.speciality}</$Text>
        </View>

        {/* About Section */}
        <View>
          <$Text style={styles.heading} weight="bold" size="xl">About the Instructor</$Text>
          <$Text style={styles.description} weight="regular" size="md">
            {isExpanded
              ? instructor?.description
              : getTrimmedText(instructor?.description || "", 120)}{" "}
            <$Text
              style={styles.link}
              onPress={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "read less" : "read more"}
            </$Text>
          </$Text>
        </View>

        <SessionTypeSelector
          options={[3, 6, 12, 24]}
          selected={sessionType}
          onSelect={setSessionType}
        />

        <DatePickerInput date={date} onChange={setDate} />

        <TimeSelector
          times={["9:00 am", "11:00 am", "12:00 pm", "2:00 pm", "3:00 pm"]}
          selected={time}
          onSelect={setTime}
        />

        <$Button style={styles.button} onPress={() => navigation.navigate('termsAndCond')}>
          <$Text size="lg" weight="bold" color="light">
            Continue
          </$Text>
        </$Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    backgroundColor: "#66706A",
  },
  special: {
    marginTop: 8,
    color: "#444",
  },
  heading: {
    marginBottom: 4,
  },
  description: {
    color: "#444",
    lineHeight: 20,
  },
  link: {
    color: "#1D4ED8",
    textDecorationLine: "underline",
    fontWeight: "500", 
  },
  button: {
    marginTop: 10,
    backgroundColor: theme.colors.main,
    paddingVertical: theme.spacing.md,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default InstructorBookingScreen;
