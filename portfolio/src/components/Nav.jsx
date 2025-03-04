import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo"></img>
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <FaGithub />
        <FaLinkedin />
      </div>
    </nav>  
  );
};

export default Nav;
