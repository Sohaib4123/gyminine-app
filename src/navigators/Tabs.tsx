// src/navigation/tabs.tsx
import HomeScreen from "../screens/Home.screen";
import { ClassesScreen } from "../screens/Classes.screen";
import { MembershipsScreen } from "../screens/Membership.screen";
import { BookingsScreen } from "../screens/Booking.screen";
import { ProfileScreen } from "../screens/Profile.screen";

export const tabs = [
  {
    name: "Home",
    component: HomeScreen,
    icon: "home",
    label: "Home",
  },
  {
    name: "Classes",
    component: ClassesScreen,
    icon: "fitness",
    label: "Classes",
  },
  {
    name: "Memberships",
    component: MembershipsScreen,
    icon: "card",
    label: "Memberships",
  },
  {
    name: "Bookings",
    component: BookingsScreen,
    icon: "calendar",
    label: "Bookings",
  },
  {
    name: "Profile",
    component: ProfileScreen,
    icon: "person",
    label: "Profile",
  },
];
