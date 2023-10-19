"use client";

import { FormEvent, ChangeEvent, useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  Heading,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial"
  );
  const [error, setError] = useState(false);

  return (
    <Flex align={"center"} justify={"center"} py={"15"} pt={"4"}>
      <Container
        boxShadow={"xl"}
        rounded={"xl"}
        p={6}
        className="bg-[#805AD5] bg-opacity-30 backdrop-blur-xl"
      >
        <Heading
          as={"h2"}
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign={"center"}
          mb={1}
        >
          Abonnez-vous à notre Newsletter
        </Heading>
        <Text
          as={"p"}
          fontSize={"xl"}
          fontWeight={"semibold"}
          textAlign={"center"}
          mb={4}
        >
          Pour ne rien manquer !
        </Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            setError(false);
            setState("submitting");

            setTimeout(() => {
              if (email === "fail@example.com") {
                setError(true);
                setState("initial");
                return;
              }

              setState("success");
            }, 1000);
          }}
        >
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={"gray.300"}
              id={"email"}
              type={"email"}
              required
              placeholder={"Votre Email"}
              aria-label={"Votre Email"}
              rounded={"xl"}
              value={email}
              disabled={state !== "initial"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button
              colorScheme={state === "success" ? "green" : "blue"}
              isLoading={state === "submitting"}
              w="100%"
              type={state === "success" ? "button" : "submit"}
            >
              {state === "success" ? <CheckIcon /> : "S'abonner"}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={"center"}
          color={error ? "red.500" : "gray.500"}
        >
          {error
            ? "Oh non, une erreur s'est produite ! 😢 Veuillez réessayer plus tard."
            : "Vous ne recevrez pas de spam ! ✌️"}
        </Text>
      </Container>
    </Flex>
  );
}
