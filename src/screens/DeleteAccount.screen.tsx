// screens/DeleteAccountScreen.tsx
import React, {useState} from "react";
import { View, ScrollView } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MainNavigatorParamList } from "../types/Navigation.type";
import tw from "../utils/tailwind";
import DeleteAccountModal from "../components/ProfileComponent/DeleteAccountPopUp.component";
import { Header } from "../components/UI/header.component";
import $Text from "../components/UI/customText.component";
import $Button from "../components/UI/customButton.component";

const DeleteAccountScreen = () => {
  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={tw`flex-1 bg-background`}>
      
      {/* Header */}
      <Header
        title="Delete Account"
        onBack={() => navigation.goBack()}
      />

      {/* Content */}
      <ScrollView
        contentContainerStyle={tw`px-5 py-6 pt-20`}
        showsVerticalScrollIndicator={false}
      >
        <$Text style={tw`text-dark mb-4 leading-6`}>
          before you go please read the statement below carefully.
        </$Text>

        <$Text style={tw`text-dark mb-4 leading-6`}>
          all your personal information will be deleted, however, your
          subscription data will remain on the app for analysis and advertising
          purposes. you will not be able to use this account to sign in to any
          device. you will not be able to access your previous subscriptions.
        </$Text>

        <$Text style={tw`text-dark mb-4 leading-6`}>
          this deletion is permanent and irreversible. the account profile
          information (gender, date of birth, display name, real name, mobile
          number, email address, etc.) will be deleted. account activity history
          (sign-ins, registration, etc.) will be deleted.
        </$Text>

        <$Text style={tw`text-dark mb-4 leading-6`}>
          the assets (points, coupons, financial assets, etc.) under your id
          will be cleared. deleting your account means you will not be able to
          sign in to your tamarran account and use our services. your account
          cannot be recovered after being deleted. for security, we will verify
          all personal information to be deleted after receiving your deletion
          request, we will disable your account.
        </$Text>

        <$Text style={tw`text-dark mb-4 leading-6`}>
          after the account deletion request is approved, you will no longer be
          able to sign in to the account. your assets associated with your
          account will be cleared, including your cash back and active coupons.
          you have properly handled your assets, such as cashback and coupons
          please note that the deletion of tamarran account is permanent. once
          your account is deleted, your account and related data cannot be
          recovered. please ensure that you have read the statement carefully
          before the deletion.
        </$Text>
      </ScrollView>

      {/* Action Buttons */}
      <View style={tw`px-5 pb-6`}>
        <$Button
          style={tw`bg-main py-sm rounded-lg border-2 border-main mb-2`}
          onPress={() => navigation.goBack()}
        >
          <$Text style={tw`text-center text-white text-lg font-bold`}>
            No, Undo This
          </$Text>
        </$Button>

        <$Button
          style={tw`border-2 border-red-500  py-sm rounded-lg bg-glass mb-2`}
          onPress={() => setModalVisible(true)}
        >
          <$Text style={tw`text-center text-red-500 text-lg font-bold`}>
            Delete Account
          </$Text>
        </$Button>
      </View>

      {/* Modal */}
      <DeleteAccountModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={() => {
          setModalVisible(false);
          navigation.navigate('mainTab', {screen:'Profile'})
        }}
      />
    </View>
  );
};

export default DeleteAccountScreen;
