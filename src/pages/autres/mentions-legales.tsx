import NavBar from "@/components/Nav/Navbar";
import { Heading, Text } from "@chakra-ui/react";
import clsx from "clsx";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const aProposDeNous = () => {
  return (
    <>
      <div
        className={clsx(
          "flex flex-col h-full items-center pt-28 py-44",
          inter.className
        )}
      >
        <div className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#946263]"></div>
        <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#ffafcc]"></div>
        <div className="absolute top-[10rem] -z-10 left-[-15rem] h-[40.25rem] w-[40rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#abc4ff]"></div>
        <NavBar />
        <Heading>MENTIONS LÉGALES</Heading>
        <Text className="font-bold text-2xl py-5">- NEXTREND -</Text>
        <Text className="font-semibold text-xl pb-1">
          NEXTREND, Société par actions simplifiées immatriculée sous le numéro
          SIREN 125698753, RCS PONTOISE et a pour l’Activités comptables (code
          APE 6920Z).
        </Text>
        <Text className="font-semibold text-xl pb-1">
          N°TVA INTRACOMMUNAUTAIRE : FR65161515115
        </Text>
        <Text className="font-semibold text-xl pb-1">
          Le siège social est situé 5 Avenue du Général de Gaulle, 93440 Dugny
        </Text>
        <Text className="font-semibold text-xl pb-1">
          Capital social 4500 €.
        </Text>
        <Text className="font-semibold text-xl pb-1">
          N° déclarant d’activité (NDA) : 15425962547851
        </Text>
        <Text className="font-semibold text-xl pb-1">
          Pour tout renseignements complémentaires, merci de contacter P. IDE à
          l’adresse mail « contact@nextrend.fr ».
        </Text>
      </div>
    </>
  );
};

export default aProposDeNous;
