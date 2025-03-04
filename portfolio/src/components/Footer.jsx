import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="border-b border-slate-900 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl"
      >
        Bądźmy w kontakcie!
      </motion.h1>
      <div className="text-center flex justify-center tracking-tighter">
        {["kfrantczakk@gmail.com", "+48 732 445 418"].map((info, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="my-2 p-2"
          >
            {info}
          </motion.p>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center text-xs text-slate-600 mt-4"
      >
        Stworzone przez Kacpra Frantczaka. 2025.
      </motion.p>
    </div>
  );
};

export default Footer;