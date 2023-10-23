import HomeIcon from "@mui/icons-material/Home";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LayersIcon from "@mui/icons-material/Layers";
import GitHubIcon from "@mui/icons-material/GitHub";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ClearIcon from "@mui/icons-material/Clear";
import TerminalIcon from "@mui/icons-material/Terminal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Content = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative grow bg-slate-300 w-full font-f1">
      <div
        className="absolute block md:hidden z-50 m-2 w-auto "
        onClick={() => setOpen(!open)}
      >
        {open ? <ClearIcon /> : <WidgetsIcon />}
      </div>
      <div className="flex justify-center w-full h-full">{children}</div>

      <div
        className={` w-1/6 h-full justify-between md:translate-x-0 absolute top-0 left-0  items-center  flex flex-col ${
          open ? "" : "translate-x-[-125px]"
        } bg-slate-300 transition-all duration-500 z-1`}
      >
        <Link
          to="/"
          className="mt-16  flex flex-col focus:bg-slate-800 focus:text-slate-300 hover:bg-slate-800 hover:text-slate-300 w-full flex-1 justify-center items-center object-contain transition-all duration-300"
        >
          <div className="flex flex-col items-center">
            <HomeIcon />
            <h1 className="text-sm">Home</h1>
          </div>
        </Link>

        <Link
          to="/skills"
          className=" flex flex-col justify-center items-center object-contain focus:bg-slate-800 focus:text-slate-300 hover:bg-slate-800 hover:text-slate-300 w-full flex-1 transition-all duration-300"
        >
          {" "}
          <div className="flex flex-col items-center">
            <TerminalIcon />
            <h1 className="text-sm">Skills</h1>
          </div>
        </Link>

        <Link
          to="/projects"
          className=" flex flex-col justify-center items-center object-contain focus:bg-slate-800 focus:text-slate-300 hover:bg-slate-800 hover:text-slate-300 w-full flex-1 transition-all duration-300"
        >
          {" "}
          <div className="flex flex-col items-center">
            <LayersIcon />
            <h1 className="text-sm">Projects</h1>
          </div>
        </Link>

        <Link
          to="/email"
          className=" flex flex-col justify-center items-center object-contain focus:bg-slate-800 focus:text-slate-300 hover:bg-slate-800 hover:text-slate-300 w-full flex-1 transition-all duration-300"
        >
          <div className="flex flex-col items-center">
            <AlternateEmailIcon />
            <h1 className="text-sm">Contact</h1>
          </div>
        </Link>

        <div className="mb-60 flex flex-col justify-center items-center object-contain focus:bg-slate-800 focus:text-slate-300 hover:bg-slate-800 hover:text-slate-300 w-full flex-1 transition-all duration-300">
          <GitHubIcon />
          <h1 className="text-sm">Github</h1>
        </div>
      </div>
    </div>
  );
};

export default Content;
