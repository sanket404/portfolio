import type { NextPage } from "next";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { motion } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";

const mainVarientsLeft = {
  initial: {
    opacity: 0,
    x:0,
    scale:0.8,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale:1,
    transition: { type: "spring", stiffness: 50 },
  },
};
const mainVarientsRight = {
  initial: {
    opacity: 0,
    x:0,
    scale:0.8,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale:1,
    transition: { type: "spring", stiffness: 50 },
  },
};
const mainVarientsBottom = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { type: "spring", stiffness: 15 },
  },
};

const HomePage: NextPage = () => {
  return (
    <div className="max-w-7xl w-full mx-auto select-none py-24">
      <div className="flex md:flex-row flex-col-reverse justify-center items-center gap-6 lg:gap-0">
        <div className="lg:w-1/2 flex justify-end md:pr-10">
          <motion.div
            variants={mainVarientsLeft}
            whileInView="animate"
            initial="initial"
            className="text-2xl xs:text-3xl md:text-4xl"
          >
            <div className="text-gray-500">
              Hello,
              <br /> I am{" "}
              <Text
                as={"span"}
                fontWeight="semibold"
                color={"orange.400"}
                opacity={0.9}
              >
                Sanket Dorlikar
              </Text>{" "}
              <br /> AKA{" "}
              <Text
                as={"span"}
                fontWeight="semibold"
                color={"orange.400"}
                opacity={0.9}
              >
              4Style Workout
              </Text>
            </div>
          </motion.div>
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <motion.div
            variants={mainVarientsRight}
            whileInView="animate"
            initial="initial"
            exit="initial"
            className="max-h-[288px] h-[80vw] md:h-72 max-w-[288px] w-[80vw] md:w-72 flex overflow-hidden"
            style={{ borderRadius: "50% 50% 50% 50% / 30% 30% 70% 70% " }}
          >
            <Image src={"/sanket.jpg"} width={288} height={288}></Image>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={mainVarientsBottom}
        whileInView="animate"
        initial="initial"
        className="flex justify-center my-4 text-lg sm:text-xl md:text-4xl lg:text-6xl"
      >
        <div>I am a &#160;</div>
        <Box fontWeight="semibold" color={"orange.400"}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Graphic Designer")
                .pauseFor(1000)
                .deleteAll()
                .pauseFor(100)
                .typeString("Programmer")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
            options={{
              loop: true,
              delay: 50,
            }}
          />
        </Box>
      </motion.div>
    </div>
  );
};

export default HomePage;
