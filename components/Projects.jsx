import React from "react";
import twentyFortyEight from "../public/assets/projects/2048.png";
import ppalms from "../public/assets/projects/ppalms.png";
import battleboats from "../public/assets/projects/battleboats.png";
import holeInGround from "../public/assets/projects/balls_in_one.png";
import earthquakeV from "../public/assets/projects/earthquake_visualizer.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-20">
        <p className="text-xl tracking-widest uppercase text-[#2D919B]">
          Projects
        </p>
        <h2>What I've Built</h2>
        <div className="pt-4 grid md:grid-cols-2 gap-4 items-center">
          <ProjectItem
            title="2048-ai"
            backgroundImg={twentyFortyEight}
            projectUrl="https://github.com/cshenlua/2048_ai"
          />
          <ProjectItem
            title="PPALMS"
            backgroundImg={ppalms}
            projectUrl="https://github.com/narlock/ppalms"
          />
          <ProjectItem
            title="Battleboats CLI"
            backgroundImg={battleboats}
            projectUrl=""
          />
          <ProjectItem
            title="Hole in the Ground"
            backgroundImg={holeInGround}
            projectUrl=""
          />
          <ProjectItem
            title="Earthquake Visualizer"
            backgroundImg={earthquakeV}
            projectUrl=""
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
