import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com",
    imageStyle: {
      object: "object-cover",
    },
  },
  {
    title: "Input Validator App",
    description:
      "A beautiful and intuitive task management application built with React",
    image:
      "/input-validator.png",
    github: "https://github.com",
    demo: "https://vercel.com/harshvj03s-projects/input-validator-9cli",
    imageStyle: {
      object: "object-cover",
    },
  },
  {
    title: "Budget Dashboard",
    description: "Real-time weather tracking app with beautiful visualizations",
    image:
      "/fire-dashboard-img.png",
    github: "https://github.com/harshvj03/fire-ai-dashboard/tree/main",
    demo: "https://fire-ai-dashboard-new.vercel.app/",
    imageStyle: {
      object: "object-cover",
    },
  },
  {
    title: "Amazon Clone",
    description: "Amazon Clone using React Js",
    image: "https://pngimg.com/uploads/amazon/small/amazon_PNG27.png",
    github: "https://github.com",
    demo: "https://clone-b9e03.web.app/",
    imageStyle: {
      object: "object-contain",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-52 ${project.imageStyle.object}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
