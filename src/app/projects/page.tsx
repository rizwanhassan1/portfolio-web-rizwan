import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  // Dummy data for 6 projects
  const projects = [
    { id: 1, title: "Project One", Image: "/com.jpg", link: "https://computer-sooty.vercel.app/" },
    { id: 2, title: "Project Two", Image: "/el.jpg", link: "https://ecproject-zeta.vercel.app/" },
    { id: 3, title: "Project Three", Image: "/md.jpg", link: "https://website-nine-tau-63.vercel.app/" },
    { id: 4, title: "Project Four", Image: "/ca.jpg", link: "https://cars-ten-gray.vercel.app/" },
    { id: 5, title: "Project Five", Image: "/pf.jpg", link: "https://portfolio-orcin-ten-44.vercel.app/" },
    { id: 6, title: "Project Six", Image: "/ri.jpg", link: "https://rizwan-mu.vercel.app/" },
  ];

  return (
    <>
      <Header />
      <main className="p-10 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={project.Image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;