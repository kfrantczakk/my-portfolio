import project1 from "../projects/project1.jpg";
import project2 from "../projects/project2.jpg";
import project3 from "../projects/project3.jpg";

const Projects = () => {
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
      <div className="border-b border-slate-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Projekty</h2>
        <div>
          {projects.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4 flex justify-center">
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded shadow-lg"
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 text-xl font-semibold">{project.title}</h6>
                <p className="mb-4 text-slate-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded bg-slate-700 text-white text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  