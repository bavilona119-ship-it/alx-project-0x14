import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 text-center p-4 mt-8">
      <p>&copy; {new Date().getFullYear()} CineSeek. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
