
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";


function Navbar() {
   
  return (
    <div>
      <nav className="bg-gray-800 shadow" role="navigation">
        <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
          <div className="mr-2 ml-1 md:mr-4 centered-label">
            <a href="https://github.com">
              <BsGithub
                className="text-gray-300 hover:text-gray-400 mr-4"
                size={40}
              />
            </a>
            <p className="text-xl font-extralight uppercase text-gray-300">
              Buscador de repositórios
            </p>
          </div>


          {/*<Link
          <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
            <ul className="flex flex-col block mt-4 -mx-4 pt-4 md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0">
              <li>
                  <Link
                  className="text-gray-300 hover:text-gray-400 font-medium mr-4" 
                  to="/"
                  >
                  BUSCA
                </Link>
                
                  className="text-gray-300 hover:text-gray-400 font-medium mr-4" 
                  to="/about"
                  >
                  SOBRE
                </Link>
              </li>
            </ul>
         </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
