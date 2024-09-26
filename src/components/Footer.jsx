import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-600 py-6">
      <div className="container mx-auto text-center text-white">
        <p>Create By Alan.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/alan-parmar-93866a215/" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/alanparmar" className="hover:text-gray-300"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
