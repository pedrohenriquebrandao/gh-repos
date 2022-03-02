import "./App.css";

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

import Navbar from "./components/Navbar";

function About() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex justify-center mt-12">
        <div className="ml-8 mr-8 mb-8 flex flex-col md:flex-row md:max-w-xl bg-white shadow-lg border-2 border-gray-500">
          <img
            className="w-full h-96 md:h-auto object-cover md:w-48 md:rounded-none"
            src={'me.jpg'} 
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2 uppercase">
              Sobre mim
            </h5>
            <p className="text-gray-700 text-justify">
              Eu me chamo Pedro Brandão, tenho 27 anos e moro em Feira de
              Santana-BA. Sou estudante de Engenharia de Computação na
              Universidade Estadual de Feira de Santana (UEFS). Fiz parte do MEJ
              - Movimento Empresa Júnior, tendo sido minha primeira experiência
              profissional ao longo da graduação, onde pude adquirir experiência
              técnica e vivência empresarial. Sou apaixonado por ciência e
              tecnologia e gosto de tocar guitarra.
            </p>
            <div className="container mx-auto px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center -mx-8">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center mx-2 text-gray-600 hover:text-blue-500"
                    href="https://www.linkedin.com/in/pedrohenriquebrandao/"
                  >
                    {" "}
                    <BsLinkedin size={30} />{" "}
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center mx-2 text-gray-600 hover:text-rose-400"
                    href="https://www.instagram.com/pedro.brnd_/"
                  >
                    {" "}
                    <BsInstagram size={30} />
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center mx-2 text-gray-600 hover:text-gray-400"
                    href="https://github.com/pedrohenriquebrandao"
                  >
                    {" "}
                    <BsGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
