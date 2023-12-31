import Image from "next/image";
import dpImage from "../public/display_photo/dp.JPG";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={dpImage}
            alt="/"
            height="1319"
            width="742"
          />
        </div>
        <div className="col-span-2 pt-8 md:pt-0 lg:pt-0">
          <p className="uppercase text-xl tracking-widest text-[#2D919B] text-center md:text-start">
            About
          </p>
          <h2 className="text-center md:text-start">who?</h2>
          <p className="py-2 text-center md:text-start">
            Experienced Software Developer with a foundation in Computer
            Science. A knack for creating feature-rich and efficient
            client-facing product solutions. Skilled in Python, Java, and C/C++,
            with expertise in full-stack web development via the{" "}
            <span>
              <i>
                <b>
                  <a href="https://www.ibm.com/topics/lamp-stack">LAMP</a>
                </b>
              </i>
            </span>{" "}
            stack, data management, and project coordination. Dedicated to
            optimizing processes and delivering high-quality results, I have
            successfully deployed applications and feature releases through
            CI/CD practices, improved data center operations, and facilitated
            cross-functional collaboration. Proficient in industry-standard
            tools such as JIRA, Git, and AWS. I remain humbled and committed to
            continuous learning and staying up-to-date with emerging
            technologies.
          </p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
