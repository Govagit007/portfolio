import { motion as m } from "framer-motion";
import cpp from "../logos/c++.png";
import html from "../logos/html.png";
import js from "../logos/javascript.png";
import rjs from "../logos/react.png";
import exjs from "../logos/express.png";
import njs from "../logos/node.png";
import mdb from "../logos/mongo.png";
import sql from "../logos/sql.png";
import css from "../logos/css.png";
import tail from "../logos/tail.png";
import rdx from "../logos/redux.png";

const Skills = () => {
  const iconClass =
    "md:w-1/12 w-1/6 rounded-xl h-auto flex flex-col justify-center items-center md:text-base text-xs hover:bg-slate-100 p-2 m-4";

  return (
    <m.div
      className="w-full h-full bg-inherit text-slate-600 items-center flex flex-col justify-start overflow-hidden ml-10 md:ml-28 lg:ml-32 gap-8  "
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className=" m-4 md:m-10 ">
        <h1 className="text-base md:text-xl">SKILLS AND WEB TECHNOLOGIES</h1>
      </div>
      <div className="flex justify-center flex-wrap gap-1 md:gap-8 md:ml-4 lg:ml-8 xl:10">
        <m.div
          className={iconClass}
          initial={{ x: "200%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={cpp} alt="" />
          <div>C++</div>
        </m.div>
        <m.div
          className={iconClass}
          initial={{ x: "300%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={js} alt="" />
          <h1>JAVASCRIPT</h1>
        </m.div>
        <m.div
          className={iconClass}
          initial={{ x: "400%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={html} alt="" />
          <h1>HTML</h1>
        </m.div>
        <m.div
          className={iconClass}
          initial={{ x: "500%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={css} alt="" />
          <h1>CSS</h1>
        </m.div>
        <m.div
          className={iconClass}
          initial={{ x: "200%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={tail} alt="" />
          <h1>TAILWIND</h1>
        </m.div>
        <m.div
          className={iconClass}
          initial={{ x: "300%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={rjs} alt="" />
          <h1>REACT JS</h1>
        </m.div>
        <m.div
          className={iconClass}
          initial={{ x: "400%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={rdx} alt="" />
          <h1>REDUX</h1>
        </m.div>

        <m.div
          className={iconClass}
          initial={{ x: "500%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={njs} alt="" />
          <h1>NODE JS</h1>
        </m.div>
        <m.div
          className={iconClass}
          initial={{ x: "200%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={exjs} alt="" />
          <h1>EXPRESS JS</h1>
        </m.div>
        <m.div
          className={iconClass}
          initial={{ x: "300%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={mdb} alt="" />
          <h1>MONGO DB</h1>
        </m.div>
        <m.div
          className={iconClass}
          initial={{ x: "500%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={sql} alt="" />
          <h1>SQL</h1>
        </m.div>
      </div>
    </m.div>
  );
};

export default Skills;
