import React from "react";
import { motion } from "framer-motion";

const Wrapper = (props: any) => {
  return <span className="word-wrapper">{props.children}</span>;
};

const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
};

const AnimatedCharacters = (props: any) => {
  const item = {
    hidden: {
      y: "200%",
      color: "#797979",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: "#00b4d8",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const splitWords = props.text.split(" ");

  const words: any = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  words.map((word: any) => {
    return word.push("\u00A0");
  });

  const tagMap: { [key: string]: string } = {
    paragraph: "p",
    heading1: "h1",
    heading2: "h2",
  };

  const Tag: any = tagMap[props.type];

  return (
    <Tag>
      {words.map((word: any, index: any) => {
        return (
          <Wrapper key={index}>
            {words[index].flat().map((element: any, index: any): any => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  className="text-7xl font-bold"
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </Tag>
  );
};

export default AnimatedCharacters;
