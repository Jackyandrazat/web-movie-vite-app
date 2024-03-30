// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "../assets/style.css";
import "react-multi-carousel/lib/styles.css";
import CustomButtonGroup from "./CustomButtomGroup"; // Sesuaikan path dengan lokasi file CustomButtonGroup

function TrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchTrendingMovies = async (timeWindow) => {
      try {
        const apiKey = "a39ff2852a8cb1b6355d852f795353bc";
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${apiKey}`
        );
        console.log(response, "response");
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrendingMovies("week");
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center p-4">
        Trending Movies
      </h2>
      <Carousel
        responsive={responsive}
        swipeable
        draggable
        showDots={false}
        ssr // means to render carousel on server-side.
        infinite
        autoPlaySpeed={1000}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType="desktop" // Atur deviceType dengan benar
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        ref={carouselRef} // Atur ref agar dapat digunakan di dalam komponen
        customButtonGroup={
          <CustomButtonGroup
            next={() => carouselRef.current.next()}
            previous={() => carouselRef.current.previous()}
          />
        }
      >
        {trendingMovies.map((movie, index) => (
          <div key={index} className="carousel-item relative">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="w-full max-h-96"
              alt={movie.title}
            />
            <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 p-2">
              <a href={`/movies/${movie.id}`} className="text-white text-lg font-semibold">
                {movie.original_title}
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TrendingMovies;
