import React from "react";
import AboutImg from "../assets/asset 1.png";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-20 flex px-20">
      <img src={AboutImg} alt="Developer Illustration" className="w-1/2" />
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6  dark:text-white pb-12 text-purple-500">
          About Me
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-6 text-justify">
        About
        Fully committed to the philosophy of life-long learning, 
        I’m a full stack developer with a deep passion for programming and development. 
        The unique combination of creativity, logic, technology and never running out of new things to discover, 
        drives my excitement and passion for web development. When I’m not at my computer I like to spend my time reading, 
        keeping fit and playing games. 
        </p>
        <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 ">
          <a href="https://drive.google.com/file/d/1IKpLH4_IpF3fdr0fRgsuDCQv6N3BoocR/view?usp=sharing">Download CV</a>
        </button>
      </div>
    </section>
  );
};

export default About;
