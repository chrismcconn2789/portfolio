import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="font-bold text-xl tracking-widest uppercase text-[#648DE5]">
            About
          </p>
          <h2 className="py-4">Who Am I</h2>
          <p className="py-2 text-gray-600">
            I am an aspiring Front-End Developer. I have serious passion for UI
            effects, animations and creating intuitive, dynamic user
            experiences.
          </p>
          <p className="py-2 text-gray-600">
            I am very proficient in HTML, CSS and vanilla Javascript and I have
            recently been experimenting in the most bleeding edge JS frameworks
            such as Next.js, ReactJS, SolidJS, and AngularJS
          </p>
          <p className="py-2 text-gray-600">
            I have also build working projects for my employer using more
            traditional technologies such as an API using C# in Visual Studio
            and .NET Framework to communicate to the SQL database using
            Microsoft SQL Server.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">Check out some of my latest projects.</Link>
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
          <Image
            src="https://raw.githubusercontent.com/chrismcconn2789/portfolio/main/public/assets/about.jpg"
            alt="about"
            width="640"
            height="800"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
