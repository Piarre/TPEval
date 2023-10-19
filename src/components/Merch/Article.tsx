import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

import hoodie from "@/public/Images/hoodie.png";
import { ArticleItem } from "@/lib/types";
import Link from "next/link";
import { Badge, Center, Image } from "@chakra-ui/react";

const Article = ({ name, price, images, sizes, uuid }: ArticleItem) => {
  return (
    <Link href={`/merch/${uuid}`}>
      <Card className="hover:scale-105 hover:pl-3 hover:pr-3 duration-200 transition-all">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-bold">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold flex">
            {price}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <Image
            src={images.front as string}
            alt="pull"
            width={"full"}
            height={"full"}
            rounded={"xl"}
          />
          <Center>
            <Badge colorScheme="purple" rounded="lg" className="my-4">
              <p className="text-lg font-bold  p-2">
                {Object.entries(sizes)
                  .filter(([size, isAvailable]) => isAvailable)
                  .map(([size, isAvailable], index, array) => {
                    return isAvailable
                      ? index === array.length - 1
                        ? size
                        : size + "/"
                      : null;
                  })
                  .join("")}
              </p>
            </Badge>
          </Center>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Article;
