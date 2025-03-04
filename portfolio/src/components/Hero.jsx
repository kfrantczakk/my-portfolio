import { motion } from "framer-motion";
import profilePic from "../assets/profilepic.jpg";

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="border-b border-slate-900 pb-4 lg:mb-35"
    >
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center lg:items-start"
          >
            <h1 className="pb-8 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
              Kacper Frantczak
            </h1>
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-r from-green-400 via-lime-700 to-emerald-600 bg-clip-text text-2xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              Jestem pasjonatem programowania i studentem informatyki, który
              uwielbia tworzyć nowoczesne i funkcjonalne aplikacje webowe.
              Specjalizuję się w technologiach takich jak React, Node.js, MySQL
              i Python. Choć nie mam jeszcze doświadczenia komercyjnego, stale
              rozwijam swoje umiejętności, realizując własne projekty i
              eksplorując nowe technologie. Moim celem jest budowanie wydajnych,
              skalowalnych aplikacji oraz nieustanne doskonalenie się jako full
              stack developer.
            </p>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center"
          >
            <img className="rounded-2xl shadow-lg" src={profilePic} alt="Profile Pic" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;