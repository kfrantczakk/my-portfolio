import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import project1 from "../projects/project1.jpg";
import project2 from "../projects/project2.jpg";
import project3 from "../projects/project3.jpg";

const Projects = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const projects = [
      {
        title: "Snake 2D",
        description: "Webowa wersja kultowej gry Snake.",
        image: project1,
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Magic 8 Ball",
        description: "Aplikacja imitująca magiczną kulkę, która daje odpowiedzi.",
        image: project2, 
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Generator haseł",
        description: "Generator haseł, który generuje losowe hasła na podstawie wybranych opcji.",
        image: project3,
        technologies: ["HTML", "CSS", "JavaScript"],
      },
    ];
  
    return (
      <div ref={ref} className="border-b border-slate-900 pb-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="my-20 text-center text-4xl"
        >
          Projekty
        </motion.h2>
        <div>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-8 flex flex-wrap lg:justify-center"
            >
              <div className="w-full lg:w-1/4 flex justify-center">
                <motion.img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded shadow-lg"
                  initial={{ scale: 0.9 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 text-xl font-semibold">{project.title}</h6>
                <p className="mb-4 text-slate-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="px-2 py-1 rounded bg-slate-700 text-white text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;