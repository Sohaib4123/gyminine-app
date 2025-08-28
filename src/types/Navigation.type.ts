// navigation/types.ts
import { NavigatorScreenParams } from "@react-navigation/native";

export type MainNavigatorParamList = {
  mainTab: NavigatorScreenParams<TabParamList>;
  classCategory: undefined;
  instructors: undefined;
  instructorBook: { instructorId: string };
  instructorProf: { instructorId?: string; instructorName?: string };
  termsAndCond: undefined;
  bookingConfirm: undefined;
  bookingDetail: {
    id: string;
    status:
      | "Active / Upcoming"
      | "Membership"
      | "Passed"
      | "Cancel"
      | "Waiting List"
      | "Frozen";
    className: string;
    bookingNo: string;
    type: string;
    from: string;
    to: string;
  };
  cancelBooking: undefined;
  freezeBooking: undefined;
  languageSetting: undefined;
};

export type AuthNavigatorParamList = {
  visit: undefined;
  login: undefined;
  Ename: undefined;
  Enumber: undefined;
  Eemail: undefined;
  otp: undefined;
  main: NavigatorScreenParams<MainNavigatorParamList>;
};

export type editNavigatorParamList = {
  Ename: undefined;
  Enumber: undefined;
  Eemail: undefined;
  otp: undefined;
  main: NavigatorScreenParams<MainNavigatorParamList>;
};

export type ClassesNavigatorParamList = {
  ClassesList: undefined;
  ClassDetails: {
    id: string;
    title: string;
    time: string;
    trainer: string;
    date: string;
    price: string;
    image: string;
  };
};

export type TabParamList = {
  Home: undefined;
  Classes: NavigatorScreenParams<ClassesNavigatorParamList>;
  Memberships: undefined;
  Bookings: undefined;
  Profile: undefined;
};
