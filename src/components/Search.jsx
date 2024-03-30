// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const apiKey = "a39ff2852a8cb1b6355d852f795353bc";
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  const handleChange = (event) => {
    const query = event.target.value;
    setQuery(query);
    if (query === '') {
      setMovies([]);
    } else {
      searchMovies(query);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search movies..."
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
      />
      
      {movies.length > 0 && (
        <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md mt-1 z-10">
          {movies.map((movie) => (
            <li key={movie.id} className="px-4 py-2">
              <a href={`/movies/${movie.id}`}>{movie.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
