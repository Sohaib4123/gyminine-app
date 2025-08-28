type PackageType = {
  id: string;
  title: string;
  price: string;
  details: string[];
};

export const packagesData: Record<string, PackageType[]> = {
  All: [
    {
      id: "1",
      title: "10 Classes",
      price: "QAR 3,000",
      details: ["10 classes of pilates.", "including vat.", "1 week freezing"],
    },
    {
      id: "2",
      title: "1 month",
      price: "QAR 4,000",
      details: [
        "unlimited classes of pilates.",
        "including vat.",
        "1 week freezing",
      ],
    },
    {
      id: "3",
      title: "2 Months",
      price: "QAR 5,000",
      details: [
        "unlimited classes of pilates.",
        "including vat.",
        "1 week freezing",
      ],
    },
    {
      id: "4",
      title: "10 Private Sessions",
      price: "QAR 6,000",
      details: [
        "private classes of pilates.",
        "including vat.",
        "1 week freezing",
      ],
    },
  ],
  Packages: [
    {
      id: "5",
      title: "5 Classes Package",
      price: "QAR 2,000",
      details: ["5 pilates classes.", "including vat."],
    },
    {
      id: "6",
      title: "Monthly Package",
      price: "QAR 4,500",
      details: ["Unlimited pilates classes.", "including vat.", "No freezing."],
    },
  ],
  "Personal Training": [
    {
      id: "7",
      title: "5 PT Sessions",
      price: "QAR 7,000",
      details: ["5 personal training sessions.", "including vat."],
    },
    {
      id: "8",
      title: "10 PT Sessions",
      price: "QAR 12,000",
      details: ["10 personal training sessions.", "including vat."],
    },
  ],
  Classes: [
    {
      id: "9",
      title: "Drop-in Class",
      price: "QAR 500",
      details: ["Single pilates class.", "including vat."],
    },
  ],
  Membership: [
    {
      id: "10",
      title: "Annual Membership",
      price: "QAR 20,000",
      details: ["Unlimited pilates classes for a year.", "including vat."],
    },
  ],
};
