import { IRoute } from "../../routes";
import Home from "./index";

const config: IRoute[] = [
  {
    path: "/",
    pageTitle: "Home",
    key: "home",
    exact: true,
    title: "Home",
    //   icon: SVGContacts,
    element: Home,
    //   tags: ["Contacts"],
  },
];

export default config;
