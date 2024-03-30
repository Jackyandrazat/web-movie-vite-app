/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

function CardList() {
  const [movies, setMovies] = useState([]);
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = "a39ff2852a8cb1b6355d852f795353bc";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );
        console.log(response,'success');
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {movies.map((movie, index) => (
        <div key={index} className="card bg-gray-900 p-2 rounded-lg shadow-md" style={{ maxWidth: '250px' }}>
          <figure>
            <img src={imageUrl + movie.poster_path} alt={movie.title} className="w-full h-auto rounded-lg" />
          </figure>
          <div className="card-body mt-2 text-white">
            <h2 className="card-title text-lg font-semibold">{movie.title}</h2>
            <p className="text-sm mt-2">{truncateText(movie.overview, 150)}</p>
            <div className="flex justify-end mt-4">
              <a href={`/movies/${movie.id}`} className="btn btn-primary">
                Watch Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
