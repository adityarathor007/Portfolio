import { ExternalLink,Github } from "lucide-react"
import { useState } from "react";
import {projects} from "../assets/data/project"



export const ProjectsSection = () =>{
     const [selectedProject, setSelectedProject] = useState(null);


  return (
    <section id="projects" className="py-40 px-4 relative">
      <div className="container mx-auto max-8xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary"> Projects </span>
        </h2>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer
             transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
                  flex items-center justify-center text-white text-lg font-medium
                  transition-opacity duration-100">
                    Click to view
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))} */}
                </div>

                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

          {/* Modal */}
{selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* Blurred Background */}
    <div
      className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      onClick={() => setSelectedProject(null)}
    ></div>

    {/* Modal Card */}
    <div className="relative bg-card rounded-xl shadow-lg w-[80vw] h-[80vh] z-50 overflow-hidden flex flex-col">
      {/* Close Button */}
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-4 text-foreground/70 hover:text-primary"
      >
        ✕
      </button>

      {/* Image Section */}
      <div className="h-[50%] w-full">
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content Section*/}
      <div className="h-[50%] w-full p-2 flex flex-col justify-center overflow-y-auto">
        <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
        <p className="text-xl text-muted-foreground mb-6">
          {selectedProject.description}
        </p>

         <div className="flex gap-6 justify-center">
            <a
            href={selectedProject.demoUrl}
            target="_blank"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
            <ExternalLink size={28} />
            </a>
            <a
            href={selectedProject.githubUrl}
            target="_blank"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
            <Github size={28} />
          </a>
        </div>
      </div>
    </div>
  </div>

        )}
      </div>
    </section>
  );
};
