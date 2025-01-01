import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8 dark:bg-gray-800 dark:shadow-gray-700">
        <div className="flex flex-col items-center">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full mb-4 border-4 border-gray-300 dark:border-gray-700"
          />
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            About Me
          </h1>
          <p className="text-gray-600 dark:text-gray-400 leading-7 text-center">
            Hello! I'm{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Aeesha Fayyaz
            </span>
            , a passionate student at GIAIC with a strong enthusiasm for
            exploring and learning new technologies. I have honed my skills in
            various programming languages and tools, including{" "}
            <span className="font-medium">
              HTML, CSS, JavaScript, TypeScript
            </span>
            , and <span className="font-medium">Tailwind CSS</span>. Currently,
            I am expanding my knowledge by diving into{" "}
            <span className="font-medium">Next.js</span>, aiming to master
            modern web development frameworks.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
            My journey is fueled by curiosity and a drive to continuously grow
            in the ever-evolving field of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
