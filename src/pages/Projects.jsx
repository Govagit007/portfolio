import noteZ from "../logos/note-zipper.png";
import delicious from "../logos/delicious.png";
import hooBank from "../logos/hoobank.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion as m } from "framer-motion";

const Projects = () => {
  return (
    <m.div
      className="bg-inherit w-5/6 h-full md:absolute right-0 flex flex-col  items-center justify-start "
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="md:text-2xl mt-4 md:mt-10">
        <h1>Projects and Experience</h1>
      </div>
      <div className=" w-full h-full flex flex-col md:-translate-y-16 md:flex-row  gap-4 p-8 items-center justify-center">
        <m.div
          className=" project w-full md:w-1/4  h-1/4 flex flex-col flex-wrap items-center relative bg-slate-200 rounded-xl hover:rounded-none overflow-hidden"
          initial={{ x: "200%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={noteZ} alt="" className="object-cover" />
          <h1 className="absolute cursor-pointer bottom-0 hover:translate-y-10 project-name flex justify-center items-center">
            Note-Zipper
            <a
              href="https://heroic-buttercream-1a9a4f.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-white rounded-lg"
            >
              {" "}
              <OpenInNewIcon />
            </a>{" "}
          </h1>
        </m.div>
        <m.div
          className=" project w-full md:w-1/4 h-1/3 flex flex-col items-center relative bg-slate-200 rounded-xl hover:rounded-none overflow-hidden"
          initial={{ x: "200%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <img src={delicious} alt="" className="object-cover" />
          <h1 className="flex justify-center absolute bottom-0 hover:translate-y-10 project-name">
            Delicious
            <a
              href="https://govagit007.github.io/deliciousss/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-slate-100 rounded-xl"
            >
              {" "}
              <OpenInNewIcon />
            </a>
          </h1>
        </m.div>
        <m.div
          className=" project w-full md:w-1/4 h-1/3 flex flex-col items-center relative bg-slate-200 rounded-xl hover:rounded-none overflow-hidden"
          initial={{ x: "300%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={hooBank} alt="" className="object-cover" />
          <h1 className="flex justify-center absolute bottom-0 hover:translate-y-10 project-name">
            HOO-Bank
            <a
              href="https://gentle-cascaron-1f0661.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-slate-100 rounded-xl"
            >
              {" "}
              <OpenInNewIcon />
            </a>
          </h1>
        </m.div>
      </div>
    </m.div>
  );
};

export default Projects;
