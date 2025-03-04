import { FaGithub, FaLink } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-2xl font-bold">Kacper Frantczak</h1>
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <FaGithub />
        <FaLinkedin />
      </div>
    </nav>
  );
};

export default Nav;
