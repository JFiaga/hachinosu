import { useState } from "react";
import FilmCard from "../components/FilmCard";
import { Search } from "lucide-react";
import { IMovieResult } from "../interface/tmdbInterface";

const Film = () => {
  const [inputValue, setInputValue] = useState<string>();
  const [filmData, setFilmData] = useState<IMovieResult[]>();

  function searchFilm() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => setFilmData(data.results))
      .catch((err) => console.error(err));
    console.log(filmData);
  }

  return (
    <section className=" bg-[#f1f1f1]  h-auto w-full relative flex flex-col items-center justify-center pt-[40px]">
      <div className="relative  z-[20] max-w-[1400px] w-full  min-h-screen  flex flex-col text-black space-y-10 px-8 ">
        <div className="flex flex-col w-full justify-center items-center ">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-full border w-full max-w-[500px] py-2 px-2 my-5 focus-within:border-mainColor flex"
          >
            <input
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(event) => {
                if (event.key == "Enter") {
                  searchFilm();
                }
              }}
              type="text"
              className="bg-transparent w-full text-black font-medium rounded-full outline-none "
            />
            <button onClick={searchFilm} className="">
              <Search className="text-mainColor" />
            </button>
          </form>

          <div className="flex items-center justify-center w-full flex-wrap">
            {filmData?.map((val) => (
              <FilmCard
                key={val.id}
                imgUrl={val.poster_path}
                title={val.original_title}
                note={val.vote_average}
                releaseDate={val.release_date.substring(0, 4)}
                description={val.overview}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Film;
