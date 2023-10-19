import { Link } from "./types";

export const links: Link[] = [
  {
    name: "Accueil",
    hash: "/",
  },
  {
    name: "Merch",
    hash: "/merch",
  },
  {
    name: "A Propos",
    hash: "",
    subMenu: [
      {
        name: "Nous contacter",
        hash: "/autres/nous-contacter",
      },
      {
        name: "Mentions léglaes",
        hash: "/autres/mentions-legales",
      },
    ],
  },
];

export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
