import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-fit w-fit bg-slate-400 shadow-xl shadow-grey-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2D919B] to-[#709dff]">
      <Image
        className="rounded-lg group-hover:opacity-10"
        src={backgroundImg}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl py-1 text-white text-center">{title}</h3>
        <Link href={projectUrl}>
          <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
