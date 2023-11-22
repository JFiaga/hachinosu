import { Search } from "lucide-react";
import MusicCard from "../components/MusicCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Music = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb`)
      .then((res) => setData(() => res.data)).catch(err => console.log(err))
  }, []);

  console.log(data)

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

        <div className="flex flex-col ">
          <form className="rounded-full border w-full max-w-[500px] py-2 px-2 my-5 focus-within:border-mainColor flex">
            <input
              type="text"
              className="bg-transparent w-full text-white font-medium rounded-full outline-none "
            />
            <button className="">
              <Search className="text-mainColor" />
            </button>
          </form>

          <MusicCard />
        </div>
      </div>
    </section>
  );
};

export default Music;
