import React, { SVGProps } from "react";

export interface IRoute {
  path?: string;
  pageTitle?: string;
  exact: boolean;
  key: string;
  element: React.ComponentType<any>;
  // shouldVisible?: (user: User) => boolean;  update this value when we configure user section
  title?: string;
  description?: string;
  headingComponent?: React.ElementType;
  icon?: React.FunctionComponent<SVGProps<SVGSVGElement>>;
  isHome?: boolean;
  hideNavbar?: boolean;
  hideTopbar?: boolean;
  view?: "unauthenticated" | "authenticated";
  // tags: Array<RoutesTags>;
  bottom?: boolean;
}

const index = () => {
  return <div>index</div>;
};

export default index;
