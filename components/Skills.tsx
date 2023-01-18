import type { NextPage } from "next";
import { motion } from "framer-motion";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import SkillsProfessional from "./SkillsProfessional";
import SkillsTechnical from "./SkillsTechnical";

const mainVarients = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { type: "spring", stiffness: 40 },
  },
};

const SkillsPage: NextPage = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <div className="max-w-7xl w-full mx-auto select-none my-24">
        <motion.div
          variants={mainVarients}
          whileInView="animate"
          initial="initial"
          className="flex justify-center gap-8 sm:gap-16 lg:gap-24 text-lg sm:text-xl lg:text-2xl mb-8"
        >
          <motion.div
            className="cursor-pointer"
            whileInView={{
              opacity: state ? 0.5 : 0.9,
              scale: state ? 1 : 1.2,
              transition: {
                type: "spring",
                stiffness: 50,
              },
            }}
            onClick={() => {
              setState(false);
            }}
          >
            Technical
          </motion.div>
          <motion.div
            className="cursor-pointer"
            whileInView={{
              opacity: state ? 0.9 : 0.5,
              scale: state ? 1.2 : 1,
              transition: {
                type: "spring",
                stiffness: 50,
              },
            }}
            onClick={() => {
              setState(true);
            }}
          >
            Professional
          </motion.div>
        </motion.div>
        <Box
          fontFamily={"Roboto Mono"}
          className="pb-16 h-[512px] max-w-lg w-[90vw] flex justify-center items-start lg:items-center relative mx-auto"
        >
          {state ? <SkillsProfessional /> : <SkillsTechnical />}
        </Box>
      </div>
    </>
  );
};

export default SkillsPage;
