export  const amenities = [
  "Cable TV",
  "Ocean View",
  "Disabled Access",
  "Elevator",
  "Floor",
  "Furnishing",
  "Gym",
  "Laundry",
  "Lawn",
  "Media Room",
  "Outdoor Shower",
  "Parking",
  "Swimming Pool",
  "24x7 Security",
  "Smoke Detector",
  "Washer",
  "WiFi",
  "Window Coverings",
];

export const properties = [
  {
    id: 1,
    type: "ownership", // "ownership" | "stays"
    title: "2 BHK Apartment in Marol Naka",
    location: "Marol Naka, Andheri East, Mumbai",
    price: "₹ 1.25 Cr",
    beds: 2,
    baths: 2,
    area: 980,
    views: 245,
    live: true,
    image: "/images/property1.jpg"
  },
  {
    id: 2,
    type: "ownership",
    title: "3 BHK Villa in Juhu",
    location: "Juhu, Mumbai",
    price: "₹ 4.2 Cr",
    beds: 3,
    baths: 3,
    area: 2400,
    views: 512,
    live: true,
    image: "/images/property2.jpg"
  },
  {
    id: 3,
    type: "stays",
    title: "2 BHK Apartment in Bandra",
    location: "Bandra West, Mumbai",
    price: "₹ 75,000 / month",
    beds: 2,
    baths: 2,
    area: 900,
    views: 312,
    live: true,
    image: "/images/property3.jpg"
  },
  {
    id: 4,
    type: "stays",
    title: "Studio Apartment in Andheri",
    location: "Andheri West, Mumbai",
    price: "₹ 22,000 / month",
    beds: 1,
    baths: 1,
    area: 450,
    views: 156,
    live: true,
    image: "/images/property4.jpg"
  }
];

export const propertiesData = [
  {
      id: 1,
      name: "Sea View Residency, Worli",
      location: "Mumbai",
      price: "₹72.5 L",
      beds: 3,
      baths: 2,
      area: 1850,
      views: 197,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmt_WGztYsUjo6oRCc2PEj4Oy-_4xydgFjMQczuXYVWg&s",
      duration: "2:45",
  },
  {
      id: 2,
      name: "Chavan Sky Heights, Andheri",
      location: "Mumbai",
      price: "₹125.0 L",
      beds: 2,
      baths: 2,
      area: 1300,
      views: 246,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmt_WGztYsUjo6oRCc2PEj4Oy-_4xydgFjMQczuXYVWg&s",
      duration: "2:45",
  },
  {
      id: 3,
      name: "Lodha Altamount",
      location: "Mumbai",
      price: "₹95.0 L",
      beds: 4,
      baths: 3,
      area: 3200,
      views: 338,
      image: "https://source.unsplash.com/420x300/?house,architecture,night",
      duration: "2:45",
  },
];


export const cities = [
  { name: "Mumbai", country: "India", value: "mumbai", active: true },
  { name: "Navi Mumbai", country: "India", value: "navi-mumbai", active: true },
  { name: "Thane", country: "India", value: "thane", active: true },

  { name: "New Delhi", country: "India", value: "new-delhi", active: false },
  { name: "Bangalore", country: "India", value: "bangalore", active: false },

  { name: "Dubai", country: "UAE", value: "dubai", active: false },
  { name: "Abu Dhabi", country: "UAE", value: "abu-dhabi", active: false },

  { name: "London", country: "United Kingdom", value: "london", active: false },
  { name: "Manchester", country: "United Kingdom", value: "manchester", active: false },

  { name: "New York", country: "United States", value: "new-york", active: false },
  { name: "Los Angeles", country: "United States", value: "los-angeles", active: false },
  { name: "Miami", country: "United States", value: "miami", active: false },

  { name: "Paris", country: "France", value: "paris", active: false },

  { name: "Singapore", country: "Singapore", value: "singapore", active: false },

  { name: "Hong Kong", country: "Hong Kong", value: "hong-kong", active: false },

  { name: "Tokyo", country: "Japan", value: "tokyo", active: false },

  { name: "Sydney", country: "Australia", value: "sydney", active: false },
  { name: "Melbourne", country: "Australia", value: "melbourne", active: false },

  { name: "Toronto", country: "Canada", value: "toronto", active: false },
  { name: "Vancouver", country: "Canada", value: "vancouver", active: false },
];

export const REPORTS = [
  {
    id: 1,
    title: "Money Report",
    status: "Verified",
    period: "December 2025",
    type: "money",
    metrics: {
      reached: { value: 324, label: "Clicks" },
      interested: { value: 42, label: "Conv." },
      testing: { value: 18, label: "Active" },
      partners: { value: 12, label: "Paid", highlight: true },
    },
  },
  {
    id: 2,
    title: "Success Report",
    status: "Verified",
    period: "Oct - Dec 2025",
    type: "quarterly",
    metrics: {
      reached: { value: 1247, label: "Clicks" },
      interested: { value: 156, label: "Conv." },
      testing: { value: 64, label: "Active" },
      partners: { value: 38, label: "Paid", highlight: true },
    },
  },
  {
    id: 3,
    title: "Money Report",
    status: "Verified",
    period: "November 2025",
    type: "monthly",
    metrics: {
      reached: { value: 286, label: "Clicks" },
      interested: { value: 34, label: "Conv." },
      testing: { value: 12, label: "Active" },
      partners: { value: 8, label: "Paid", highlight: true },
    },
  },
  {
    id: 4,
    title: "Money Report",
    status: "In Progress",
    period: "January 2026",
    type: "monthly",
    metrics: {
      reached: { value: 142, label: "Clicks" },
      interested: { value: 18, label: "Conv." },
      testing: { value: 4, label: "Active" },
      partners: { value: 1, label: "Paid", highlight: true },
    },
  },
];


  export const weeklyData = [
    { day: "Mon", clicks: 234, joined: 28 },
    { day: "Tue", clicks: 189, joined: 22 },
    { day: "Wed", clicks: 156, joined: 19 },
    { day: "Thu", clicks: 201, joined: 25 },
    { day: "Fri", clicks: 178, joined: 21 },
    { day: "Sat", clicks: 143, joined: 17 },
    { day: "Sun", clicks: 146, joined: 24 },
  ];