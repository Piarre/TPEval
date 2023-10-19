"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { Divider } from "@chakra-ui/react";

export default function NavBar() {
  const [isHover, setIsHover] = useState("Accueil");

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-sky-100 border-opacity-60 bg-sky-50 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
            >
              <div
                className="relative"
                onMouseEnter={() => setIsHover(link.name)}
                onMouseLeave={() => setIsHover("Accueil")}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
                  )}
                  href={link.hash}
                >
                  {link.name}
                </Link>

                {link.subMenu && (
                  <motion.ul
                    className={clsx(
                      "absolute top-10 left-0 w-[11rem] px-4 p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg rounded-lg"
                    )}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: isHover === link.name ? 1 : 0,
                      y: isHover === link.name ? 0 : 10,
                    }}
                  >
                    {link.subMenu.map((subMenuItem) => (
                      <li className="py-2" key={subMenuItem.hash}>
                        <Link href={subMenuItem.hash}>{subMenuItem.name}</Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </div>
              {link.name == isHover && (
                <motion.span
                  className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
