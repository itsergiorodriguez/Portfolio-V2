import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">Mi Portfolio</div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-300 hover:text-white">Inicio</a>
        <a href="#" className="text-gray-300 hover:text-white">Proyectos</a>
        <a href="#" className="text-gray-300 hover:text-white">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;
