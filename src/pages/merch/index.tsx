import { ArticleItem, Articles } from "@/lib/types";
import Article from "@/components/Merch/Article";
import img from "public/Images/hoodie.png";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Inter } from "next/font/google";
import NavBar from "@/components/Nav/Navbar";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button, Center, Image, Text, useDisclosure } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import dassonvile from "../../../public/Images/m_dassonville.jpg";

const inter = Inter({ subsets: ["latin"] });

const Merch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e: any) => {
    if (searchInput.toLowerCase().includes("dassonvil") || searchInput.toLowerCase().includes("matthieu")) {
      onOpen();
    }

    console.log(searchInput.toLowerCase());

    const results = Articles.filter((article: ArticleItem) => {
      return article.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    setSearchResults(results as any);
    setSearchInput(e.target.value);
  };

  return (
    <div className={`${inter.className}`}>
      <div className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#f94144]"></div>
      <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#ffa500]"></div>
      <div className="absolute top-[12rem] -z-10 right-[0rem] h-[40.25rem] w-[40rem] rounded-full blur-[10rem]  sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#abc4ff]"></div>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <NavBar />
          <div className="w-[700px] flex pl-80 pt-28 pb-10">
            <Input
              type="text"
              placeholder="Rechercher ici..."
              className=""
              onChange={handleChange}
              value={searchInput}
            />
          </div>

          <div className="flex-col items-center px-80 grid grid-cols-3 gap-4">
            {searchInput.length > 0
              ? searchResults.map((article: any) => (
                  <Article
                    key={article.uuid}
                    description={article.description}
                    uuid={article.uuid}
                    name={article.name}
                    price={article.price}
                    images={article.images}
                    alt={article.alt}
                    sizes={article.sizes}
                  />
                ))
              : Articles.map((article: any) => (
                  <Article
                    key={article.uuid}
                    description={article.description}
                    uuid={article.uuid}
                    name={article.name}
                    price={article.price}
                    images={article.images}
                    alt={article.alt}
                    sizes={article.sizes}
                  />
                ))}
          </div>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody className="">
            <Text className="font-bold text-2xl">Bien trouvé</Text>
            <Center py={"4"}>
              <Image rounded={"15"} src={"/Images/m_dassonville.jpg"} alt="" />
            </Center>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Merch;
