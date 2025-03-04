import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TbBrandReact, TbBrandTailwind, TbBrandNodejs, TbBrandPython, TbBrandMysql } from "react-icons/tb";

const Technologies = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="border-b border-slate-900 pb-24">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="my-20 text-center text-4xl"
      >
        Technologie
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {[{ icon: TbBrandReact, color: "text-cyan-400" },
          { icon: TbBrandTailwind, color: "text-teal-400" },
          { icon: TbBrandNodejs, color: "text-emerald-400" },
          { icon: TbBrandPython, color: "text-amber-400" },
          { icon: TbBrandMysql, color: "text-blue-400" }].map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}
            whileHover={{ scale: 1.1 }}
            className="rounded-2xl border-4 border-slate-600 p-4"
          >
            <tech.icon className={`text-7xl ${tech.color}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;