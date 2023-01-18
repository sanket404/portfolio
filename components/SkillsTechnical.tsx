import { NextPage } from "next";
import { useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

class Skill {
  skill: string;
  progress: number;

  constructor(skill: string, progress: number) {
    this.skill = skill;
    this.progress = progress;
  }
}
type mySkill = Array<Skill>;

const allSkills: mySkill = [
  new Skill("Graphic Design", 70),
  new Skill("UI/UX design", 80),
  new Skill("Web Security Management", 60),
  new Skill("Competitive Programming", 85),
  new Skill("Front End Design", 85),
  new Skill("Logic Building", 75),
 // new Skill("Apptitude", 65),
];

const SkillsTechnical: NextPage = () => {
  const [ref, inView] = useInView();
  let i = 0;

  return (
    <>
      <div
        ref={ref}
        className="w-2/3 h-5/6 absolute -z-10 bg-gray-500 opacity-5"
        style={{ borderRadius: "30% 70% 30% 70% / 25% 40% 60% 75%" }}
      ></div>
      <div className="w-full gap-10 flex flex-col items-center scale-75 sm:scale-100 lg:scale-125">
        {allSkills.map((skill) => eachSkill(skill, inView, i++))}
      </div>
    </>
  );
};

export default SkillsTechnical;

const eachSkill = (skill: Skill, inView: boolean, i: number) => {
  const toggleBlack = useColorModeValue("black", "white");

  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 50, delay: i / 16 }}
      className="w-[80%] h-4"
      key={skill.skill}
    >
      <div
        style={{ textShadow: "0.2px 0.2px 1px" }}
        className="flex justify-between w-full p-1 opacity-80 tracking-wider"
      >
        <div className="text-sm opacity-90">{skill.skill}</div>
        <div>
          {skill.progress}
          <span className="text-xs opacity-50">%</span>
        </div>
      </div>
      <div className="relative">
        <div
          className="h-2 w-full absolute opacity-5 rounded-full"
          style={{ backgroundColor: toggleBlack }}
        ></div>
        <motion.div
          animate={{
            width: inView ? `${skill.progress}%` : "0%",
            transition: {
              type: "spring",
              stiffness: 40,
              delay: i / 16,
            },
          }}
          className="absolute h-2 bg-orange-500 rounded-full shadow-md"
        ></motion.div>
      </div>
    </motion.div>
  );
};
