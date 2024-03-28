/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

function CardList() {
  const [movies, setMovies] = useState([]);
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = "eb5a78158e1e2d97ce520530858f8910";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );
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
        <div key={index} className="card bg-gray-100 p-2 rounded-lg shadow-md" style={{ maxWidth: '250px' }}>
          <figure>
            <img src={imageUrl + movie.poster_path} alt={movie.title} className="w-full h-auto rounded-lg" />
          </figure>
          <div className="card-body mt-2">
            <h2 className="card-title text-lg font-semibold">{movie.title}</h2>
            <p className="text-sm mt-2">{truncateText(movie.overview, 150)}</p>
            <div className="flex justify-end mt-4">
              <a href="/filmlist/detail" className="btn btn-primary">
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
