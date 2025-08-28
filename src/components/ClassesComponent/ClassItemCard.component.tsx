// import React from "react";
// import { View, Image, StyleSheet } from "react-native";
// import $Text from "../UI/customText.component";
// import $Button from "../UI/customButton.component";
// import { useNavigation, NavigationProp } from "@react-navigation/native";
// import { ClassesNavigatorParamList } from "../../types/Navigation.type";

// interface GymClass {
//   id: string;
//   title: string;
//   time: string;
//   trainer: string;
//   date: string;
//   image: any;
// }
// type Props = {
//   gymClass : GymClass
// }

// export default function ClassItemCard({ gymClass }: Props) {
//   const navigation = useNavigation<NavigationProp<ClassesNavigatorParamList>>()
//   return (
//     <View style={styles.card}>
//       <Image source={gymClass.image} style={styles.image} />
//       <View style={styles.info}>
//         <$Text style={styles.title}>{gymClass.title}</$Text>
//         <$Text style={styles.time}>{gymClass.time}</$Text>
//         <$Text style={styles.trainer}>{gymClass.trainer}</$Text>
//       </View>
//       <$Button style={styles.bookBtn} onPress={() => navigation.navigate('ClassDetails', {
//             id: gymClass.id,
//             title: gymClass.title,
//             time: gymClass.time,
//             trainer: gymClass.trainer,
//             date: gymClass.date,
//             price: "175 qar",
//             image: Image.resolveAssetSource(gymClass.image).uri,
//           })}>
//         <$Text style={styles.bookText}>book</$Text>
//       </$Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 12,
//     marginHorizontal: 16,
//     marginVertical: 6,
//     borderRadius: 12,
//     backgroundColor: "#fff",
//     elevation: 2,
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   image: {
//     width: 70,
//     height: 70,
//     borderRadius: 8,
//     marginRight: 12,
//   },
//   info: { flex: 1 },
//   title: { fontSize: 16, fontWeight: "600", marginBottom: 2 },
//   time: { fontSize: 14, color: "#555" },
//   trainer: { fontSize: 14, color: "#777" },
//   bookBtn: {
//     backgroundColor: "#5E6D5B",
//     paddingVertical: 6,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     marginRight: 8,
//   },
//   bookText: { color: "#fff", fontWeight: "600" },
// });


import React from "react";
import { View, Image } from "react-native";
import $Text from "../UI/customText.component";
import $Button from "../UI/customButton.component";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { ClassesNavigatorParamList } from "../../types/Navigation.type";
import tw from "../../utils/tailwind";

interface GymClass {
  id: string;
  title: string;
  time: string;
  trainer: string;
  date: string;
  image: any;
}
type Props = {
  gymClass: GymClass;
};

export default function ClassItemCard({ gymClass }: Props) {
  const navigation = useNavigation<NavigationProp<ClassesNavigatorParamList>>();

  return (
    <View
      style={tw`flex-row items-center p-3 mx-4 my-1.5 rounded-xl bg-white shadow`}
    >
      <Image
        source={gymClass.image}
        style={tw`w-[70px] h-[70px] rounded-lg mr-3`}
      />

      <View style={tw`flex-1`}>
        <$Text style={tw`font-semibold mb-0.5`} size='md'>
          {gymClass.title}
        </$Text>
        <$Text style={tw`text-sm text-main`}>{gymClass.time}</$Text>
        <$Text style={tw`text-sm text-main`}>{gymClass.trainer}</$Text>
      </View>

      <$Button
        style={tw`py-2.5 px-4 rounded-md mr-2`}
        onPress={() =>
          navigation.navigate("ClassDetails", {
            id: gymClass.id,
            title: gymClass.title,
            time: gymClass.time,
            trainer: gymClass.trainer,
            date: gymClass.date,
            price: "175 qar",
            image: Image.resolveAssetSource(gymClass.image).uri,
          })
        }
      >
        <$Text style={tw`text-light font-semibold`}>book</$Text>
      </$Button>
    </View>
  );
}
