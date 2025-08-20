// import React from "react";
// import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

// type Props = { data: { id: string; title: string; time: string; instructor: string; image: string }[] };

// export default function TodayClassesList({ data }: Props) {
//   return (
//     <FlatList
//       data={data.slice(0, 3)} // only 3 items
//       keyExtractor={(item) => item.id}
//       renderItem={({ item }) => (
//         <View
//           style={{
//             flexDirection: "row",
//             padding: 12,
//             marginVertical: 6,
//             borderRadius: 12,
//             backgroundColor: "#fff",
//             shadowOpacity: 0.1,
//             shadowRadius: 4,
//           }}
//         >
//           <Image source={{ uri: item.image }} style={{ width: 60, height: 60, borderRadius: 8 }} />
//           <View style={{ flex: 1, marginLeft: 10 }}>
//             <Text style={{ fontWeight: "600" }}>{item.title}</Text>
//             <Text>{item.time}</Text>
//             <Text>{item.instructor}</Text>
//           </View>
//           <TouchableOpacity
//             style={{
//               backgroundColor: "#6b776b",
//               paddingHorizontal: 16,
//               paddingVertical: 6,
//               borderRadius: 8,
//               alignSelf: "center",
//             }}
//           >
//             <Text style={{ color: "white" }}>Book</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     />
//   );
// }

import React from "react";
import { Image, Text, TouchableOpacity, View, ImageSourcePropType} from "react-native";

type Props = {
  data: { id: string; title: string; time: string; instructor: string; image: ImageSourcePropType }[];
};

export default function TodayClassesList({ data }: Props) {
  return (
    <View>
      {data.slice(0, 3).map((item) => (
        <View
          key={item.id}
          style={{
            flexDirection: "row",
            padding: 12,
            marginVertical: 6,
            borderRadius: 12,
            backgroundColor: "#fff",
            shadowOpacity: 0.1,
            shadowRadius: 4,
            shadowOffset: { width: 0, height: 2 },
            elevation: 2,
          }}
        >
          <Image
            source={ item.image }
            style={{ width: 60, height: 60, borderRadius: 8 }}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={{ fontWeight: "600" }}>{item.title}</Text>
            <Text>{item.time}</Text>
            <Text>{item.instructor}</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#6b776b",
              paddingHorizontal: 16,
              paddingVertical: 6,
              borderRadius: 8,
              alignSelf: "center",
            }}
          >
            <Text style={{ color: "white" }}>Book</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
