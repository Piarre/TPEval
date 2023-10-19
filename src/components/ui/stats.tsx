"use client";

import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { BsFillBuildingFill, BsPersonCheckFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import AnimatedText from "@/components/AnimatedText";
import Tilt from "react-parallax-tilt";

interface StatsCardProps {
  text: string;
  icon: ReactNode;
}

function StatsCard(props: StatsCardProps) {
  const { text, icon } = props;
  return (
    <Tilt
      className="parallax-effect"
      perspective={1000}
      scale={1.1}
      transitionSpeed={1000}
      reset={true}
      transitionEasing={"cubic-bezier(.03,.98,.52,.99)"}
    >
      <Stat
        px={{ base: 2, md: 4 }}
        py={"6"}
        shadow={"xl"}
        _hover={{
          scale: "1.1",
        }}
        border={"1px solid"}
        borderColor={useColorModeValue("gray.600", "gray.500")}
        rounded={"lg"}
        className="bg-white backdrop-blur-xl bg-opacity-60"
      >
        <Flex justifyContent={"space-between"} className="inner-element">
          <Box>
            <StatNumber fontSize={"2xl"} fontWeight={"bold"} mr={"4"}>
              {text}
            </StatNumber>
          </Box>
          <Box
            my={"auto"}
            color={useColorModeValue("gray.800", "gray.200")}
            alignContent={"center"}
            style={{
              transform: "translateZ(60px)",
            }}
          >
            {icon}
          </Box>
        </Flex>
      </Stat>
    </Tilt>
  );
}

export default function BasicStatistics() {
  const [replay, setReplay] = useState(true);
  const placeholderText = [
    { type: "heading1", text: "Habillez Vous chez nous car" },
    { type: "heading2", text: "NexTrend compte déjà" },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"3xl"}
        py={10}
        fontWeight={"bold"}
      >
        <motion.div
          className="App"
          initial="hidden"
          // animate="visible"
          animate={replay ? "visible" : "hidden"}
          variants={container}
        >
          <div className="container">
            {placeholderText.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })}
          </div>
        </motion.div>
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, lg: 10 }}>
        <StatsCard
          text={"+ de 100 000 acheteurs"}
          icon={<BsPersonCheckFill size={"3em"} />}
        />
        <StatsCard
          text={"50 partenaires"}
          icon={<BsFillBuildingFill size={"3em"} />}
        />
        <StatsCard
          text={"15 points de vente"}
          icon={<FaLocationDot size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  );
}
