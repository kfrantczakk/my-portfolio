import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="flex flex-shrink-0 items-center"
      >
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </motion.div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaGithub />
        <FaLinkedin />
      </div>
    </nav>
  );
};

export default Nav;