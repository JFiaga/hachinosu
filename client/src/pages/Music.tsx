import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import IArtist from "../interface/spotifyInterfaces";
import { categoryMusic } from "../assets";
import ArtistsCard from "../components/Music/ArtistsCard";

const Music = () => {
  
  const [accessToken, setAccessToken] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [artistData, setArtistData] = useState<IArtist>();

  useEffect(() => {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${process.env.SPOTIFY_CLIENT_ID}&client_secret=${process.env.SPOTIFY_CLIENT_SECRET}`,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  async function searchMusic() {
   

    const artistParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    await fetch(
      `https://api.spotify.com/v1/search?q=${inputValue}&type=artist`,
      artistParameters
    )
      .then((response) => response.json())
      .then((data) => setArtistData(data.artists));
  }

  return (
    <section className=" bg-black h-auto w-full relative flex flex-col items-center justify-center pt-[40px]">
      <div className="relative  z-[20] max-w-[1400px] w-full first-letter min-h-screen  flex flex-col text-white space-y-10 px-8 ">
        <h2 className="flex flex-col items-center">
          <span className="capitalize rounded-full border border-white px-4 w-fit text-center my-2 py-1 bg-white text-mainColor font-bold">
            Find the best Music
          </span>
          <span className="text-3xl text-center ">
            Listen by <span className="text-mainColor"> by developers {} </span>{" "}
          </span>
        </h2>

        <div className="flex flex-col w-full justify-center items-center ">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-full border w-full max-w-[500px] py-2 px-2 my-5 focus-within:border-mainColor flex"
          >
            <input
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(event) => {
                if (event.key == "Enter") {
                  searchMusic();
                }
              }}
              type="text"
              className="bg-transparent w-full text-white font-medium rounded-full outline-none "
            />
            <button onClick={searchMusic} className="">
              <Search className="text-mainColor" />
            </button>
          </form>

          <div className="flex items-center justify-center w-full flex-wrap">
            {artistData?.items.map((val) => (
              <ArtistsCard
                artistName={val.name}
                imgSrc={val?.images[0]?.url || categoryMusic}
                key={val.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
