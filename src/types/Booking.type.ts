export type Booking = {
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

export type Status = "Active / Upcoming" | "Membership" | "Passed";