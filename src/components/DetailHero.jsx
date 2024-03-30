/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function DetailHero() {
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  const [movies, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMovieDetail();

  
  }, []);

  const getMovieDetail = async () => {
    try {
        const apiKey = "a39ff2852a8cb1b6355d852f795353bc";
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
        // console.log(movieResponse, "response");
        const movieData = movieResponse.data;
        // console.log("pokemons data :", movieData);
        setMovie(movieData);
    } catch (error) {
        console.log(error);
    }

}

  if (!movies) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-2 sm:px-6 sm:py-2 lg:px-2">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {movies.original_title}
              </h2>
              <h6 className="text-white">{movies.release_date}</h6>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {movies.overview}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href=""
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Add Bookmark
                </a>
                <p
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                Popularity <span aria-hidden="true">→ {movies.popularity}</span>
                </p>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="rounded-md bg-white/5 ring-1 ring-white/10"
                src={imageUrl + movies.poster_path}
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailHero;
