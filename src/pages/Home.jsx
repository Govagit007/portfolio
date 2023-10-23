import pic from "../logos/pp1.jpg";
import AttachmentIcon from "@mui/icons-material/Attachment";
import { motion as m } from "framer-motion";

import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["VENU AKKAMGARI", "FULL STACK DEVLOPER"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 80,
  });

  return (
    <m.div
      className="bg-transparent w-full flex flex-col justify-around items-center mr-4 rounded-r-2xl z-0"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <m.div
        className=" overflow-hidden w-20 h-20 md:w-40 md:h-40 rounded-full shadow-lg shadow-slate-700"
        initial={{ y: "300%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img
          src={pic}
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </m.div>
      <div className="flex flex-col justify-center items-center">
        <h1>
          <span className="text-slate-800 italic text-sm">I am </span>
          <span className="lg:text-4xl text-xl text-slate-900 font-f antialiased font-black font-sans">
            {text}
          </span>
          <span className="lg:text-5xl text-3xl text-slate-900">
            <Cursor />
          </span>
        </h1>
        <p className="pl-10 font-f1  md:pl-40 xl:px-60 2xl:pl:80 lg:px-40 p-4 text-lg text-center text-slate-800">
          I'm Venu, a{" "}
          <span className="font-bold text-xl">Full Stack Developer </span>
          specializing in the{" "}
          <span className="font-bold text-xl">MERN stack </span>. With a strong
          background in both front-end and back-end development, I'm passionate
          about creating responsive web applications.
          <span className="hidden lg:inline text:md">
            My expertise includes turning ideas into scalable, user-friendly,
            and visually appealing digital solutions.My expertise includes
            turning ideas into scalable, user-friendly, and visually appealing
            digital solutions.
          </span>
        </p>
      </div>
      <m.div
        className="flex flex-col justify-center items-center bg-slate-200 p-4 mb-8 rounded-3xl shadow-md shadow-slate-600 hover:bg-slate-100 transition-all duration-500"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-xl font-medium text-slate-600">Resume / CV</h1>{" "}
        <a
          href="https://drive.google.com/file/d/18iisbUm_SyM3g_OlomvleMqHkGytNrRk/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:bg-slate-600 hover:text-slate-200 transition-all duration-300 p-2 mt-2 px-4 rounded-xl"
        >
          {" "}
          <AttachmentIcon />
        </a>
      </m.div>
    </m.div>
  );
};

export default Home;
