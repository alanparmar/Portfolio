import React, { useState } from 'react';
import p1 from '../assets/circluarpie.jpg';
import p2 from '../assets/firebase.jpg';
import p3 from '../assets/texttoimage.jpeg';
import p4 from '../assets/flappy.jpeg';
import { FaLink } from "react-icons/fa";

// Sample portfolio data
const portfolioData = [
  { id: 1, title: 'Project 1', category: 'Website', image: p1, link: 'https://github.com/alanparmar/CircularPie' },
  { id: 2, title: 'Project 2', category: 'Application', image: p2, link: 'https://github.com/alanparmar/ReactContacts' },
  { id: 3, title: 'Project 3', category: 'Website', image: p3, link: 'https://github.com/alanparmar/Text-to-Image-using-GANsq'  },
  { id: 4, title: 'Project 4', category: 'Application', image: p4, link: 'https://github.com/alanparmar/FlappyBird'  },
];

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredPortfolio = activeFilter === 'All' ? portfolioData : portfolioData.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-20">
        <h2 className="text-4xl font-bold text-center mb-8 dark:text-white text-purple-500">Projects</h2>
        {/* Filter buttons */}
        <div className="flex justify-center mb-8">
          {['All', 'Website', 'Application'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`mx-2 px-4 py-2 rounded-full border-2 border-purple-500 dark:border-purple-400 ${
                activeFilter === filter ? 'bg-purple-500 dark:bg-purple-400 text-white' : 'bg-white dark:bg-gray-800 text-purple-500 dark:text-purple-400'
              } transition duration-300`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio items */}
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="relative min-w-[280px] h-[200px] bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex-shrink-0"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${hoveredItem === item.id ? 'opacity-50' : 'opacity-100'}`}
                />
                {hoveredItem === item.id && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-white text-xl font-bold cursor-pointer transition-opacity duration-300 z-10"
                  >
                    <FaLink /> View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
