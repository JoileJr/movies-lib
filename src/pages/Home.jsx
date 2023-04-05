import React, { useEffect, useState } from 'react'

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY

export const Home = () => {
  const [topMovies, SetTopMovies] = useState([]);

  const getTopRatedMovies = async(url) => {
    const res = await fetch(url);
    const data = await res.json();
    SetTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, [])

  return (
    <div>home</div>
  )
};

export default Home;