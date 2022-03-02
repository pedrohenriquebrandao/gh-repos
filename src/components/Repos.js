import "../../src/App.css";

import { useState } from "react";

import { RiGitRepositoryLine } from "react-icons/ri";
import { BiGitRepoForked } from "react-icons/bi";
import { CgEye } from "react-icons/cg";

export default function Repos(props) {
  const { repos } = props;

  const [filterTerm, setFilterTerm] = useState([]);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <button
        onClick={refreshPage}
        className="outline-dotted outline-2 outline-offset-1 text-gray-900 hover:text-white hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        type="button"
      >
        Limpar
      </button>
      <div className="mt-4 mb-4">
        <div>
          <div className="pt-2 relative mx-auto text-gray-600">
            <input
              onChange={(event) => {
                setFilterTerm(event.target.value);
              }}
              className="rounded-full border-2 border-gray-600 bg-white h-12 px-36 pl-4 mt-2 mb-2 ml-2 text-sm focus:outline-none"
              name="search"
              placeholder="Filtrar"
            ></input>
          </div>
        </div>
        <div className="container mt-4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            {repos
              .filter(
                // eslint-disable-next-line array-callback-return
                (item) => {
                  // eslint-disable-next-line eqeqeq
                  if (filterTerm == "") {
                    return item;
                  } else if (
                    item.name.toLowerCase().includes(filterTerm.toLowerCase())
                  ) {
                    return item;
                  }
                }
              )
              .slice(0, 50)
              .map((item, index) => (
                <a target="_blanket" key={index} href={item.svn_url}>
                  <div className="border-2 bg-gray-300 card m-2 cursor-pointer border-2 border-gray-700 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                    <div className="m-3">
                      <p className="text-lg text-gray-800 font-bold mb-2 centered-label">
                        <RiGitRepositoryLine className="mr-1" /> {item.name}
                      </p>
                      <p className="text-gray-800 mb-2 centered-label">
                      <BiGitRepoForked className="mr-1"/> {item.forks_count}
                      <CgEye className="ml-3 mr-1"/> {item.watchers_count}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
