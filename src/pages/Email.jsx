import { motion as m } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_928rc5e",
        "template_1uzp0gm",
        form.current,
        "R-k5LugfP2yTPfTqy"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <m.div
      className=" w-full h-full md:absolute right-0 flex flex-col md:gap-10"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="flex justify-center md:text-xl p-1">
        <h1>Contact me via Email</h1>
      </div>
      <form
        className="w-full h-auto flex flex-col justify-start items-center   bg-slate-300"
        ref={form}
        onSubmit={sendEmail}
      >
        <m.div
          className="w-7/12 h-auto flex flex-col justify-center items-start"
          initial={{ x: "200%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className=" text-slate-700 w-full hover:text-slate-100 p-2 rounded-xl focus:bg-slate-500 hover:bg-slate-500 border-collapse shadow-md  shadow-slate-900"
            name="user_name"
            placeholder="Enter Name..."
            required
          />
        </m.div>
        <m.div
          className="w-7/12 flex flex-col justify-center items-start mt-4"
          initial={{ x: "300%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Enter Email..."
            className=" w-full text-slate-700 hover:text-slate-100 p-2 rounded-xl focus:bg-slate-500 hover:bg-slate-500 border-collapse shadow-md  shadow-slate-900"
            required
          />
        </m.div>
        <m.div
          className="w-7/12 flex flex-col  justify-center items-start mt-4"
          initial={{ x: "400%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Regarding..."
            className="w-full text-slate-700 hover:text-slate-100 p-2 rounded-xl focus:bg-slate-500 hover:bg-slate-500 border-collapse shadow-md  shadow-slate-900"
            required
          />
        </m.div>
        <m.div
          className="mt-4 text-slate-700 hover:text-slate-100 p-2 rounded-xl focus:bg-slate-500 hover:bg-slate-500 border-collapse shadow-md  shadow-slate-900"
          initial={{ x: "500%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <textarea
            cols="40"
            rows="10"
            name="message"
            placeholder="Enter Details"
            className="w-full text-slate-700 hover:text-slate-100 p-2 rounded-xl focus:bg-slate-500 hover:bg-slate-500 border-collapse shadow-md  shadow-slate-900"
            required
          ></textarea>
        </m.div>

        <button
          className="m-2 text-white hover:bg-white hover:text-slate-500 bg-slate-500 p-2 px-4 rounded-xl border-collapse shadow-md  shadow-slate-900"
          type="submit"
          value="Send"
        >
          send
        </button>
      </form>
    </m.div>
  );
};

export default Email;
