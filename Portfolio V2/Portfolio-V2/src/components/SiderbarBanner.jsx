import ImagenPerfil from "../assets/Perfil01.jpg";

const SidebarBanner = () => {
 
  return (
    <div className="fixed left-0 mt-1 ">
      <div className=" bg-gray-800 text-white p-4">
        <img
          src={ImagenPerfil}
          alt="Perfil Imagen"
          className="w-25 h-25 md:w-24 md:h-24 rounded-full mb-8"
          style={{ height: "200px", width: "200px" }}
        />
        <div className="text-center">
          <h2 className="text-lg md:text-xl font-bold">
            Sergio Martin Rodriguez
          </h2>
          <p className="text-xs md:text-sm">Full Stack Developer Junior</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarBanner;
