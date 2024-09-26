import React from 'react';
import DevImg from '../assets/asset 0.png';

const Hero = () => {
  const handleContactClick = () => {
    // Scroll to the About section smoothly
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-white dark:bg-gray-900 py-20 px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col justify-center p-16 mt-4 text-2xl">
          <a href="https://www.linkedin.com/in/alan-parmar-93866a215/" className="text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/alanparmar" className="text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4"><i className="fab fa-github"></i></a>
        </div>
        <div className="text-left">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Hello, I'm <br />
            <span className="text-purple-600 dark:text-purple-400">Alan Parmar</span>
          </h1>
          <h2 className="text-2xl font-semibold mt-2 text-gray-800 dark:text-gray-300">Fullstack Developer</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Feel free to explore my portfolio and get in touch with me.</p>
          <button onClick={handleContactClick} className="mt-6 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600">
            About Me
          </button>
        </div>
        <img src={DevImg} alt="Developer Illustration" className="w-1/2 " />
      </div>
    </section>
  );
};

export default Hero;
