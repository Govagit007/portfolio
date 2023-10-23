import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Email from "./pages/Email";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className=" overflow-scroll md:overflow-hidden lg:mx-40 mx-4 rounded-xl bg-slate-200 text-slate-900 h-screen flex flex-col justify-center items-center content-between ">
          {" "}
          <Header />
          <Content>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/email" element={<Email />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Content>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
