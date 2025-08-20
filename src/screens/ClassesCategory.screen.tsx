import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { classesData } from "../data/classesData";
import { Header } from "../components/UI/header.component";

export default function ClassesCategory({ navigation }) {
  const [selectedClass, setSelectedClass] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setSelectedClass(item)}
    >
      <Image source={ item.image } style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <Header title="Our Classes" onBack={() => navigation.goBack()}/>

      {/* Grid List */}
      <FlatList
        data={classesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />

      {/* Modal */}
      <Modal
        visible={!!selectedClass}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedClass(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Image
              source={ selectedClass?.image }
              style={styles.modalImage}
            />
            <Text style={styles.modalTitle}>{selectedClass?.title}</Text>
            <Text style={styles.modalDesc}>{selectedClass?.description}</Text>
            <Text style={styles.modalLevel}>
              Level: {selectedClass?.level}
            </Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSelectedClass(null)}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#627060",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 12,
  },
  list: {
    padding: 12,
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  title: {
    textAlign: "center",
    padding: 8,
    fontSize: 14,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: 240,
    borderRadius: 12,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 12,
    textTransform: "capitalize",
  },
  modalDesc: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "left",
    color: "#555",
  },
  modalLevel: {
    alignSelf: 'flex-start',
    marginTop: 6,
    fontSize: 14,
    fontWeight: "600",
    color: "#627060",
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: "#627060",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
});
