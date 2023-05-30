import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from "../assets";

export const navlinks = [
  {
    name: "Baqylau taqtasy",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "Qaiyrymdylyq kampaniasyn qūru",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  {
    name: "Bız turaly",
    imgUrl: payment,
    link: "/aboutus",
  },
  {
    name: "Izdeu",
    imgUrl: withdraw,
    link: "/search",
  },
  {
    name: "Profil",
    imgUrl: profile,
    link: "/profile",
  },
  {
    name: "Qosu",
    imgUrl: logout,
    link: "/connect-wallet",
  },
];
