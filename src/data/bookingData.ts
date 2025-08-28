type Booking = {
  id: string;
  status:
    | "Active / Upcoming"
    | "Membership"
    | "Passed"
    | "Cancel"
    | "Waiting List"
    | "Frozen";
  date: string;
  month: string;
  className: string;
  bookingNo: string;
  type: string;
  from: string;
  to: string;
};

export const bookingData: Booking[] = [
  {
    id: "1",
    status: "Active / Upcoming",
    date: "18",
    month: "Aug",
    className: "Reformer Control",
    bookingNo: "bk22-0945873",
    type: "yoga class",
    from: "2025/08/18 03:00 pm",
    to: "2025/08/18 03:45 pm",
  },
  {
    id: "2",
    status: "Active / Upcoming",
    date: "20",
    month: "Aug",
    className: "Pilates Intro",
    bookingNo: "bk22-2334456",
    type: "pilates class",
    from: "2025/08/20 10:00 am",
    to: "2025/08/20 11:00 am",
  },
  {
    id: "3",
    status: "Membership",
    date: "01",
    month: "Sep",
    className: "Full Gym Access",
    bookingNo: "mem-778899",
    type: "membership",
    from: "2025/09/01",
    to: "2026/09/01",
  },
  {
    id: "4",
    status: "Passed",
    date: "05",
    month: "Aug",
    className: "Zumba Dance",
    bookingNo: "bk22-333444",
    type: "dance class",
    from: "2025/08/05 05:00 pm",
    to: "2025/08/05 06:00 pm",
  },
  {
    id: "5",
    status: "Cancel",
    date: "10",
    month: "Aug",
    className: "HIIT Session",
    bookingNo: "bk22-555666",
    type: "hiit class",
    from: "2025/08/10 06:00 pm",
    to: "2025/08/10 06:45 pm",
  },
  {
    id: "6",
    status: "Waiting List",
    date: "22",
    month: "Aug",
    className: "Crossfit Intro",
    bookingNo: "bk22-777888",
    type: "crossfit class",
    from: "2025/08/22 07:00 pm",
    to: "2025/08/22 08:00 pm",
  },
  {
    id: "7",
    status: "Frozen",
    date: "15",
    month: "Jul",
    className: "Premium Membership",
    bookingNo: "mem-000111",
    type: "membership",
    from: "2025/07/01",
    to: "2026/07/01",
  },
];