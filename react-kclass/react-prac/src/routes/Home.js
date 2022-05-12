import { useState } from "react";
import Movies from "../components/Movies";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useState(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        movies.map((movie) => (
          <Movies
            key={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))
      )}
    </>
  );
}

export default Home;
