import { banner1, banner2 } from "../assets";

const bannerData = [
  {
    banner: banner1,
  },
  {
    banner: banner2,
  },
];
const stateDistricts = {
  Maharashtra: [
    "Sangli",
    "Satara",
    "Solapur",
    "Kolhapur",
    "Pune",
    "Akola",
    "Amravati",
    " Buldhana",
    "Yavatmal",
    "Washim",
    "Aurangabad",
    " Beed",
    "Jalna",
    " Osmanabad",
    " Nanded",
    " Latur",
    " Parbhani",
    " Hingoli",
  ],
  MadhyaPradesh: ["Bhopal", "Raisen", "Rajgarh","Sehore","Vidisha","Sheopur"],
  // Add more states and districts as needed
};

const indianData = {
  "Andhra Pradesh": {
    districts: {
      "Anantapur": {
        policeStations: ["Station 1", "Station 2", "Station 3"],
        courtdept: ["Dept 1", "Dept 2", "Dept 3"],

      },
      "Chittoor": {
        policeStations: ["Station 4", "Station 5", "Station 6"],
        courtdept: ["Dept 1", "Dept 2", "Dept 3"],

      },
      // Add more districts and police stations for Andhra Pradesh here
    },
  },
  "Telangana": {
    districts: {
      "Adilabad": {
        policeStations: ["Station A", "Station B", "Station C"],
        courtdept: ["Dept 1", "Dept 2", "Dept 3"],

      },
      "Hyderabad": {
        policeStations: ["Station D", "Station E", "Station F"],
        courtdept: ["Dept 4", "Dept 5", "Dept 6"],

      },
      // Add more districts and police stations for Telangana here
    },
  },
  // Add more states with districts and police stations here
};

export default indianData;


export { bannerData, stateDistricts };