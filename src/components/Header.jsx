import logo from "../logos/myLogo.png";

const Header = () => {
  return (
    <div className="w-full  bg-slate-800 text-slate-300 flex justify-between items-center ">
      <div className="w-20 p-4">
        <img src={logo} alt="" />
      </div>
      <div className="flex-1 w-full flex justify-center items-center md:text-3xl text-xl ">
        <h1>Welcome to my Portofolio</h1>
      </div>
    </div>
  );
};

export default Header;
