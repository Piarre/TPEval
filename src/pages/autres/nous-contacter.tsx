"use client";

import NavBar from "@/components/Nav/Navbar";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export default function ContactFormWithSocialButtons() {
  return (
    <>
      <div className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#3a86ff]"></div>
      <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#ff006e]"></div>
      <div className="absolute top-[12rem] -z-10 right-[2rem] h-[31.25rem] w-[31.25rem] rounded-full  blur-[10rem]  sm:w-[68.75rem] bg-[#fff75e]"></div>
      <NavBar />
      <Flex
        // bg={useColorModeValue("gray.100", "gray.900")}
        align="center"
        justify="center"
        id="contact"
      >
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}
        >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{
                  base: "4xl",
                  md: "5xl",
                }}
              >
                Prenez contact
              </Heading>

              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: "column", md: "row" }}
              >
                <Box
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="base"
                >
                  <VStack spacing={5} w={"3xl"}>
                    <FormControl isRequired>
                      <FormLabel>Nom</FormLabel>

                      <InputGroup>
                        <InputLeftElement>
                          <BsPerson />
                        </InputLeftElement>
                        <Input type="text" name="nom" placeholder="Votre Nom" />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement>
                          <MdOutlineEmail />
                        </InputLeftElement>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Votre Email"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Votre Message"
                        rows={6}
                        resize="none"
                      />
                    </FormControl>

                    <Button
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: "blue.500",
                      }}
                      width="full"
                    >
                      Envoyer
                    </Button>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
