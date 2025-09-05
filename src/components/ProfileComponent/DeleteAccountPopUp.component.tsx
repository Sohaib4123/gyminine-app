import React, { useState } from "react";
import {
  Modal,
  View,
  TextInput,
} from "react-native";
import tw from "../../utils/tailwind";
import { Ionicons } from "@expo/vector-icons";
import $Text from "../UI/customText.component";
import $Button from "../UI/customButton.component";
import $RadioButton, {RadioOption}from "../UI/customRadioBtn.component";


interface Props {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteAccountModal: React.FC<Props> = ({ visible, onClose, onConfirm }) => {
  const [confirmation, setConfirmation] = useState("");
  const reasonOptions: RadioOption<string>[] = [
    { label: "The app doesn't suit my needs", value: "1" },
    { label: "I'm not a client anymore", value: "2" },
    { label: "Other reasons", value: "3" },
      ];
  const [selectedReason, setSelectedReason] = useState<string>('1');
  const isDeletable = confirmation.toLowerCase() === "delete";
  

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={tw`flex-1 bg-black/30 justify-center items-center px-6`}>
        <View style={tw`bg-white rounded-3xl w-full p-6`}>
          {/* Top Icon */}
          <View style={tw`items-center mb-4`}>
            <View style={tw`bg-main p-3 rounded-full`}>
              <Ionicons name="person-remove" size={28} color="white" />
            </View>
          </View>

          <$Text style={tw`text-center text-xl font-semibold mb-4`}>
            Delete Account
          </$Text>

          <$Text style={tw`text-dark mb-1`} size='lg'>
            please tell us why you need to delete your account
          </$Text>


          {/* Radio Buttons */}
          <$RadioButton<string>
          options={reasonOptions}
          selected={selectedReason}
          onSelect={setSelectedReason}
          />

          {/* Confirmation Input */}
          <$Text style={tw`text-dark mb-2`}>
            Type the word (delete) to proceed with the deletion
          </$Text>
          <TextInput
            style={tw`border border-light_gray rounded-xl px-4 py-3 mb-5`}
            placeholder="delete"
            value={confirmation}
            onChangeText={setConfirmation}
          />

          {/* Buttons */}
          <View style={tw`flex-row justify-between`}>
            <$Button
              disabled={!isDeletable}
              onPress={onConfirm}
              style={tw`flex-1 mr-2 py-3 rounded-xl ${
                isDeletable ? "bg-main" : "bg-gray-300"
              }`}
            >
              <$Text style={tw`text-center text-white font-semibold`}>
                Delete
              </$Text>
            </$Button>

            <$Button
              onPress={onClose}
              style={tw`flex-1 ml-2 py-3 border-2 border-main rounded-xl bg-glass`}
            >
              <$Text style={tw`text-center text-main font-semibold`}>
                Cancel
              </$Text>
            </$Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteAccountModal;
