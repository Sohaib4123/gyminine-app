import React from "react";
import {
  ImageSourcePropType,
  TouchableOpacity,
  Dimensions,
  Image,
  View,
} from "react-native";
import Carousel, { Pagination } from "react-native-reanimated-carousel";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MainNavigatorParamList } from "../../types/Navigation.type";
import { useSharedValue } from "react-native-reanimated";
import tw from "../../utils/tailwind";

const { width, height } = Dimensions.get("window");

type Props = { data: { id: string; image: ImageSourcePropType }[] };

export default function AppCarousel({ data }: Props) {
  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();
  const progress = useSharedValue(0);

  return (
    <View style={tw`items-center`}>
      <View>
        <Carousel
          loop
          autoPlay
          autoPlayInterval={3000}
          width={width * 0.95}
          height={220}
          data={data}
          scrollAnimationDuration={1000}
          onProgressChange={progress}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("classCategory")}
            >
              <Image
                source={item.image}
                style={tw`w-full h-56 rounded-xl`}
              />
            </TouchableOpacity>
          )}
        />

        {/* 🔹 Pagination inside carousel */}
        <View
          style={[
            tw`absolute self-center`,
            { top: height * 0.24 }, // dynamic top position
          ]}
        >
          <Pagination.Basic
            progress={progress}
            data={data}
            dotStyle={{
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 4,
              backgroundColor: "rgba(255,255,255,0.5)",
            }}
            activeDotStyle={{
              backgroundColor: "#fff",
              transform: [{ scale: 1.2 }],
            }}
          />
        </View>
      </View>
    </View>
  );
}
