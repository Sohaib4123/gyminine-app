import React, { JSX, useState } from "react";
import { View } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Header } from "../components/UI/header.component";
import $RadioButton, {RadioOption} from "../components/UI/customRadioBtn.component";
import { MainNavigatorParamList } from "../types/Navigation.type";
import tw from "../utils/tailwind";

const languageOptions: RadioOption<string>[] = [
  { label: "English", value: "en" },
  { label: "Arabic", value: "ar" },
    ];

const LanguageSetting = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();
  const [selectedLang, setSelectedLang] = useState<string>('en');
  
  return (
    <View style={tw`flex-1 bg-background`}>
      <Header title="Language Settings" onBack={() => navigation.goBack()} />
      <View style={tw`px-4`}>
        <$RadioButton<string>
          heading="Language"
          headingStyle={tw`text-xl`}
          options={languageOptions}
          selected={selectedLang}
          onSelect={setSelectedLang}
        />
      </View>
    </View>
  );
};

export default LanguageSetting;
