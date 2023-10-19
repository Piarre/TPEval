/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { useRouter } from "next/router";
import { ArticleItem, Articles } from "@/lib/types";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import NavBar from "@/components/Nav/Navbar";

const inter = Inter({ subsets: ["latin"] });

const page = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState("" as string);

  const router = useRouter();
  const UUID = router.query.uuid as string;

  let selectedArticle: any;

  selectedArticle = Articles.find(
    (article) => article.uuid === UUID
  ) as ArticleItem;

  if (typeof window !== "undefined" && !selectedArticle) {
    router.push("/merch");
    return null;
  }

  return (
    <>
      <div className="absolute top-[-6rem] opacity-50 -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#3a86ff]"></div>
      <div className="absolute top-[-1rem] opacity-50 -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#ff006e]"></div>
      <div className="absolute top-[12rem] opacity-50 -z-10 right-[2rem] h-[31.25rem] w-[31.25rem] rounded-full  blur-[10rem]  sm:w-[68.75rem] bg-[#fff75e]"></div>

      <Container maxW={"7xl"} className={`pt-10 ${inter.className}`}>
        <NavBar />
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              rounded={"xl"}
              bg={"#ededed"}
              alt={"product image"}
              src={
                (isHovered
                  ? (selectedArticle as ArticleItem)?.images.back
                  : (selectedArticle as ArticleItem)?.images.front) as string
              }
              align={"center"}
              w={"80%"}
              // h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={700}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {selectedArticle?.name}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                <div className="text-2xl font-bold flex pt-2">
                  {selectedArticle?.price}
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
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  {selectedArticle?.description}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("blue.500", "blue.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Tailles
                </Text>

                <SimpleGrid columns={{ base: 3, md: 7 }} spacing={5}>
                  {Object.keys((selectedArticle as ArticleItem)?.sizes).map(
                    (size) => (
                      <Button
                        key={size}
                        rounded={"lg"}
                        w={"70px"}
                        height={"70px"}
                        size={"lg"}
                        bg={
                          selectedArticle?.sizes[size]
                            ? useColorModeValue("gray.900", "black")
                            : "blackAlpha.400"
                        }
                        color={
                          selectedArticle?.sizes[size]
                            ? useColorModeValue("white", "gray.900")
                            : ""
                        }
                        textTransform={"uppercase"}
                        style={{
                          transition: "all",
                          transitionDuration: "0.2s",
                          transform:
                            selectedSize === size ? "translateY(-7px)" : "",
                          scale: selectedSize === size ? "1.1" : "1",
                        }}
                        _hover={{
                          bg: size ? "blackAlpha.700" : "blackAlpha.500",
                          transform: selectedArticle.sizes[size]
                            ? "translateY(-2px)"
                            : "translateY(2px)",
                          boShadow: "lg",
                          cursor: selectedArticle.sizes[size]
                            ? "pointer"
                            : "not-allowed",
                        }}
                        _active={{
                          transform: selectedArticle.sizes[size]
                            ? "translateY(7px)"
                            : "",
                        }}
                        onClick={() => {
                          if (selectedArticle?.sizes[size]) {
                            setSelectedSize(size);
                          } else if (selectedSize === size) {
                            setSelectedSize("");
                          }
                        }}
                      >
                        {size}
                      </Button>
                    )
                  )}
                </SimpleGrid>
              </Box>
            </Stack>

            <Button
              rounded={"lg"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Ajouter au panier
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>Livré en 3 jours ouvré</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default page;
