import React from "react";

function Footer() {
  return (
    <footer className="w-full flex justify-center">
      <div className="w-full flex max-w-3xl justify-center items-center flex-col">
        <p className="text-third mt-3">&#169; { new Date().getFullYear() }. 
                Todos los derechos reservados
        </p>
        <p className="text-third mt-1 mb-4">
            Hecho con <span className="text-fourth">❤</span> por Francisco Perez
        </p>
      </div>
    </footer>
  );
}

export default Footer;
