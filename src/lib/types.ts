import { v4 as uuid } from "uuid";
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type SubMenu = {
  name: string;
  hash: string;
}[];

export type Link = {
  name: string;
  hash: string;
  subMenu?: SubMenu;
};

export interface ArticleItem {
  uuid: string;
  name: string;
  description: string;
  price: string | number;
  discout?: string | number;
  images: {
    front: string | import("next/dist/shared/lib/get-img-props").StaticImport;
    back: string | import("next/dist/shared/lib/get-img-props").StaticImport;
  };
  sizes: {
    XS: boolean;
    S: boolean;
    M: boolean;
    L: boolean;
    XL: boolean;
    XXL: boolean;
    XXXL: boolean;
  };
  alt: string;
}

export const Articles: ArticleItem[] = [
  {
    uuid: "00cce389-2852-4f27-a64f-6903c7bf694b",
    name: "Sportswear Club Fleece",
    description: "Sweat à capuche",
    price: 64.99,
    images: {
      front: "/Images/SweetACapucheSprotswearClubFleecetz1kGP/front.jpg",
      back: "/Images/SweetACapucheSprotswearClubFleecetz1kGP/back.jpg",
    },
    sizes: {
      XS: true,
      S: true,
      M: false,
      L: true,
      XL: true,
      XXL: false,
      XXXL: false,
    },
    alt: "T-shirt",
  },
  {
    uuid: uuid(),
    name: "Angleterre Club",
    description: "Sweat à capuche",
    price: 64.99,
    images: {
      front: "/Images/AngleterreClub/front.jpg",
      back: "/Images/AngleterreClub/back.jpg",
    },
    sizes: {
      XS: false,
      S: false,
      M: true,
      L: true,
      XL: false,
      XXL: false,
      XXXL: true,
    },
    alt: "Sweat à capuche",
  },
  {
    uuid: uuid(),
    name: "Pull Nike Unisex",
    description: "Sweat à capuche",
    price: 59.99,
    discout: 49.99,
    images: {
      front: "/Images/PullNikeUnisex/front.jpg",
      back: "/Images/PullNikeUnisex/back.jpg",
    },
    sizes: {
      XS: false,
      S: false,
      M: true,
      L: false,
      XL: true,
      XXL: true,
      XXXL: true,
    },
    alt: "Sweat à capuche",
  },
  {
    uuid: uuid(),
    name: "Nike Essentials",
    description: "Sweat à capuche",
    price: 59.99,
    discout: 41.99,
    images: {
      front: "/Images/NikeEssentials/front.jpg",
      back: "/Images/NikeEssentials/back.jpg",
    },
    sizes: {
      XS: false,
      S: false,
      M: true,
      L: true,
      XL: false,
      XXL: true,
      XXXL: false,
    },
    alt: "Sweat à capuche",
  },
  {
    uuid: uuid(),
    name: "Jordan Brooklyn Fleece",
    description: "Sweat à capuche pour homme",
    price: 74.99,
    discout: 41.99,
    images: {
      front: "/Images/JordanBrooklyFleece/front.jpg",
      back: "/Images/JordanBrooklyFleece/back.jpg",
    },
    sizes: {
      XS: false,
      S: true,
      M: false,
      L: true,
      XL: true,
      XXL: true,
      XXXL: true,
    },
    alt: "Sweat à capuche pour homme",
  },
  {
    uuid: uuid(),
    name: "Jordan Essentials",
    description: "Sweat à capuche pour homme",
    price: 74.99,
    discout: 41.99,
    images: {
      front: "/Images/JordanEssentials/front.jpg",
      back: "/Images/JordanEssentials/back.jpg",
    },
    sizes: {
      XS: false,
      S: true,
      M: false,
      L: true,
      XL: false,
      XXL: false,
      XXXL: true,
    },
    alt: "Sweat à capuche pour homme",
  },
];
