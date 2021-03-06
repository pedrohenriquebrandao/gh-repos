import { useState } from "react";

import Repos from "../components/Repos";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  async function handleClick() {
    await fetch(
      `https://api.github.com/orgs/${searchInput}/repos?per_page=50&page=1`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.message) {
          setError(result.message);
        } else {
          setError("");
          setRepos(result);
        }
      });
  }

  return (
    <div>
      <input
        className="mr-2 p-4 sm:w-80 md:w-45 lg:w-96 bg-gray-200 border rounded border-gray-700 hover:border-gray-800 bg-white"
        name="search"
        value={searchInput}
        onChange={handleChange}
        placeholder="Nome da organização"
      ></input>

      {searchInput.length !== 0 ? (
        <button
          onClick={handleClick}
          type="button"
          className="mt-2 mr-2 sm:px-4 md:px-6 lg:px-12 mb-4 px-12 bg-gray-600 text-gray-200 font-bold p-4 uppercase rounded border-gray-700 hover:bg-gray-500 border-gray-700 border"
        >
          Buscar
        </button>
      ) : (
        <button
          onClick={handleClick}
          disabled
          type="button"
          className="cursor-not-allowed mr-2 mt-2 sm:px-4 md:px-6 lg:px-12 mb-4 px-12 bg-gray-600 text-gray-200 font-bold p-4 uppercase rounded border-gray-700 hover:bg-gray-500 border-gray-700 border"
        >
          Buscar
        </button>
      )}

      {error && <h1>Não existem organizações com este nome</h1>}
      {repos.length !== 0 && !error && <Repos repos={repos} />}
    </div>
  );
}
