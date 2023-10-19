import BasicStatistics from "./ui/stats";
import Newsletter from "./ui/newsletter";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { Articles } from "@/lib/types";
import Article from "./Merch/Article";
const inter = Inter({ subsets: ["latin"] });

const Main = () => {
  return (
    <>
      <div
        className={clsx("flex flex-col items-center pt-24", inter.className)}
      >
        <a href="http://www.mon-compteur.fr">
          <Image
            src="http://www.mon-compteur.fr/html_c01genv2-239706-2"
            border="0"
          />
        </a>

        <BasicStatistics />
        <Heading className="font-semibold text-2xl mt-16 mb-8">
          Nos articles les plus vendus
        </Heading>
        <SimpleGrid columns={3} gap={5} pl={"72"} pr={"72"}>
          <Article
            key={Articles[0].uuid}
            description={Articles[0].description}
            uuid={Articles[0].uuid}
            name={Articles[0].name}
            price={Articles[0].price}
            images={Articles[0].images}
            alt={Articles[0].alt}
            sizes={Articles[0].sizes}
          />
          <Article
            key={Articles[2].uuid}
            description={Articles[2].description}
            uuid={Articles[2].uuid}
            name={Articles[2].name}
            price={Articles[2].price}
            images={Articles[2].images}
            alt={Articles[2].alt}
            sizes={Articles[2].sizes}
          />
          <Article
            key={Articles[4].uuid}
            description={Articles[4].description}
            uuid={Articles[4].uuid}
            name={Articles[4].name}
            price={Articles[4].price}
            images={Articles[4].images}
            alt={Articles[4].alt}
            sizes={Articles[4].sizes}
          />
        </SimpleGrid>
        <Newsletter />
      </div>
    </>
  );
};

export default Main;
