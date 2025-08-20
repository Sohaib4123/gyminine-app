// import React from "react";
// import { ImageSourcePropType, TouchableOpacity } from "react-native";
// import { Dimensions, Image } from "react-native";
// import Carousel from "react-native-reanimated-carousel";
// import { useNavigation } from "@react-navigation/native";

// const { width } = Dimensions.get("window");

// type Props = { data: { id: string; image: ImageSourcePropType}[] };

// export default function AppCarousel({ data }: Props) {
//   const navigation = useNavigation();
//   return (
//     <Carousel
//       loop
//       autoPlay
//       autoPlayInterval={3000}
//       width={width * 0.95}
//       height={220}
//       data={data}
//       scrollAnimationDuration={1000}
//       renderItem={({ item }) => (
//         <TouchableOpacity onPress = {() => navigation.navigate('classCategory')}>
//           <Image
//             source={item.image}
//             style={{ width: "100%", height: 220, borderRadius: 12 }}
//           />
//         </TouchableOpacity>
//       )}
//     />
//   );
// }



import React from "react";
import {
  ImageSourcePropType,
  TouchableOpacity,
  Dimensions,
  Image,
  View,
} from "react-native";
import Carousel, { Pagination } from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";
import { useSharedValue } from "react-native-reanimated";

const { width, height} = Dimensions.get("window");

type Props = { data: { id: string; image: ImageSourcePropType }[] };

export default function AppCarousel({ data }: Props) {
  const navigation = useNavigation();
  const progress = useSharedValue(0);

  return (
    <View style={{ alignItems: "center" }}>
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
                style={{ width: "100%", height: 220, borderRadius: 12 }}
              />
            </TouchableOpacity>
          )}
        />

        {/* 🔹 Pagination inside carousel */}
        <View
          style={{
            position: "absolute",
            top: height * 0.24, // place near top
            alignSelf: "center",
          }}
        >
          <Pagination.Basic
            progress={progress}
            data={data}
            dotStyle={{
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 4,
              backgroundColor: "rgba(255,255,255,0.5)", // inactive: faded white
            }}
            activeDotStyle={{
              backgroundColor: "#fff", // active: pure white
              transform: [{ scale: 1.2 }],
            }}
          />
        </View>
      </View>
    </View>
  );
}

