import React from "react";
import Navbar from "./components/Navbar";
import SidebarBanner from "./components/SiderbarBanner";
import "./App.css";
function App() {
 
  return (
    <div className="App">
      <Navbar />
      <div className="flex justify-between items-center ">
        <div className="md:w-1/4  mt-5">
          <SidebarBanner />
        </div>
        <div className="md:w-3/4 xl:w-2/3 p-4 md:pl-8  md:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mt-5 font-bold mb-2">
            ¡Bienvenidos!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 ">
            Apasionado aprendiz del mundo de la programación, y Full Stack
            Developer. Mi objetivo es transformar vidas a través de la
            tecnología y contribuir en proyectos innovadores que marquen la
            diferencia. Siempre en busca de oportunidades para crecer y
            colaborar en desafiantes proyectos que me permitan seguir
            aprendiendo y ampliando mis habilidades en este apasionante mundo.
          </p>
          {/* Aquí puedes colocar más contenido según necesites */}
        </div>
      </div>
    </div>
  );
}
export default App;