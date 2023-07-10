import { IRoute } from "../../routes";
import Products from "./index";

const config: IRoute[] = [
  {
    path: "/products",
    pageTitle: "Products",
    key: "products",
    exact: true,
    title: "Products",
    //   icon: SVGContacts,
    element: Products,
    //   tags: ["Contacts"],
  },
];

export default config;
