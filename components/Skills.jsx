import Image from "next/image";
import React from "react";
import pythonsvg from "../public/skills/prog_lang/python-original.svg";
import csvg from "../public/skills/prog_lang/c-plain.svg";
import javasvg from "../public/skills/prog_lang/java-original.svg";
import jssvg from "../public/skills/prog_lang/javascript-original.svg";
import phpsvg from "../public/skills/prog_lang/php-plain.svg";
import tssvg from "../public/skills/prog_lang/typescript-original.svg";
import ktlnsvg from "../public/skills/prog_lang/kotlin-plain.svg";
import htmlsvg from "../public/skills/prog_lang/html5-plain.svg";
import ocamlsvg from "../public/skills/prog_lang/ocaml-original.svg";
import mysqlsvg from "../public/skills/prog_lang/mysql-plain.svg";
import csssvg from "../public/skills/prog_lang/css3-original.svg";
import sqlitesvg from "../public/skills/prog_lang/sqlite-original.svg";
import angularjssvg from "../public/skills/frameworks/angularjs-plain.svg";
import bootstrapsvg from "../public/skills/frameworks/bootstrap-plain.svg";
import codeignitersvg from "../public/skills/frameworks/codeigniter-plain-wordmark.svg";
import jquerysvg from "../public/skills/frameworks/jquery-plain-wordmark.svg";
import nextjssvg from "../public/skills/frameworks/nextjs-original.svg";
import nodejssvg from "../public/skills/frameworks/nodejs-original-wordmark.svg";
import tailwindcsssvg from "../public/skills/frameworks/tailwindcss-plain.svg";
import threejssvg from "../public/skills/frameworks/threejs-original.svg";
import expressjssvg from "../public/skills/frameworks/express-original-wordmark.svg";
import reactsvg from "../public/skills/frameworks/react-original.svg";
import bashsvg from "../public/skills/dev_tools/bash-plain.svg";
import composersvg from "../public/skills/dev_tools/composer-original.svg";
import gitsvg from "../public/skills/dev_tools/git-original-wordmark.svg";
import githubsvg from "../public/skills/dev_tools/github-original-wordmark.svg";
import gradlesvg from "../public/skills/dev_tools/gradle-plain.svg";
import graphqlsvg from "../public/skills/dev_tools/graphql-plain.svg";
import herokusvg from "../public/skills/dev_tools/heroku-plain.svg";
import jirasvg from "../public/skills/dev_tools/jira-original-wordmark.svg";
import npmsvg from "../public/skills/dev_tools/npm-original-wordmark.svg";
import trellosvg from "../public/skills/dev_tools/trello-plain-wordmark.svg";
import yarnsvg from "../public/skills/dev_tools/yarn-original.svg";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#2D919B]">
          Skills
        </p>
        <h2 className="text-start">Languages, Frameworks, & Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
        <div className="p-6 shadow-xl rounded-xl">
          <div className="grid grid-flow-row-dense grid-cols-3 justify-center items-center">
            <div className="flex justify-center flex-wrap hover:scale-105 ease-in duration-120">
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://www.python.org/">
                  <Image src={pythonsvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628">
                  <Image src={csvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://openjdk.org/">
                  <Image src={javasvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://ocaml.org/">
                  <Image src={ocamlsvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://kotlinlang.org/">
                  <Image src={ktlnsvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <Image src={htmlsvg} width={64} height={64} alt="/" />
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <Image src={csssvg} width={64} height={64} alt="/" />
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <Image src={jssvg} width={64} height={64} alt="/" />
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://www.typescriptlang.org/">
                  <Image src={tssvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://php.net">
                  <Image src={phpsvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://www.mysql.com/">
                  <Image src={mysqlsvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://www.sqlite.org/index.html">
                  <Image src={sqlitesvg} width={64} height={64} alt="/" />
                </a>
              </div>
            </div>
            <div className="flex justify-center flex-wrap hover:scale-105 ease-in duration-120">
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://angularjs.org/">
                  <Image src={angularjssvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://expressjs.com/">
                  <Image src={expressjssvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://nextjs.org/">
                  <Image src={nextjssvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://react.dev">
                  <Image src={reactsvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://jquery.com/">
                  <Image src={jquerysvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://getbootstrap.com/">
                  <Image src={bootstrapsvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://tailwindcss.com/">
                  <Image src={tailwindcsssvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://www.codeigniter.com/">
                  <Image src={codeignitersvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://nodejs.org/en">
                  <Image src={nodejssvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://threejs.org/">
                  <Image src={threejssvg} width={64} height={64} alt="/" />
                </a>
              </div>
            </div>
            <div className="flex justify-center flex-wrap hover:scale-105 ease-in duration-120">
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://www.gnu.org/software/bash/">
                  <Image src={bashsvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://yarnpkg.com/">
                  <Image src={yarnsvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://git-scm.com/">
                  <Image src={gitsvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://github.com/">
                  <Image src={githubsvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://gradle.org/">
                  <Image src={gradlesvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://graphql.org/">
                  <Image src={graphqlsvg} width={64} height={64} alt="/" />
                </a>
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <Image src={herokusvg} width={64} height={64} alt="/" />
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <Image src={jirasvg} width={64} height={64} alt="/" />
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <Image src={trellosvg} width={64} height={64} alt="/" />
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <Image src={npmsvg} width={64} height={64} alt="/" />
              </div>
              <div className="p-1 hover:scale-105 ease-in duration-120">
                <a href="https://getcomposer.org/">
                  <Image src={composersvg} width={64} height={64} alt="/" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
