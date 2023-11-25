import { Search } from "lucide-react";
import YoutuberCard from "../components/YoutuberCard";
import {  useEffect, useState } from "react";
import IYoutubeResult from "../interface/youtbeResultInterface";

const Youtuber = () => {
  const [inputalue, setInputValue] = useState("");

  const [youtubeData  , setYoutubeData  ] = useState<IYoutubeResult[]>()

async function searhYoutubeChannel() {
   await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inputalue}&type=channel&key=${process.env.YOUTUBE_API_KEY}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer",
          Accept: "application/json",
        },
      }
    ).then((res) => res.json()).then((data) => setYoutubeData(data.items));
  }

    useEffect(() => {
      console.log(youtubeData)
    }, [youtubeData])
    

  return (
    <section className=" bg-[#f1f1f1]  h-auto w-full relative flex flex-col items-center justify-center pt-[40px]">
      <div className="relative  z-[20] max-w-[1400px] w-full  min-h-screen  flex flex-col text-black space-y-10 px-8 ">
        <h2 className="flex flex-col items-center">
          <span className="capitalize rounded-full border border-black/10 px-4 w-fit text-center my-2 py-1 bg-white shadow-md text-red-600 font-bold">
            <span className="text-black">Find the best </span>
            <span>Youtuber</span>
          </span>
          <span className="text-3xl text-center ">
            follow by <span className="text-mainColor"> developers </span>{" "}
          </span>
        </h2>

        <div className="flex flex-col ">
          <form 
          onSubmit={e => e.preventDefault()}
          className="rounded-full border w-full max-w-[500px] py-2 px-2 my-5 focus-within:border-red-500 flex border-black/20">
            <input
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(event) => {
                if (event.key == "Enter") {
                  searhYoutubeChannel();
                }
              }}
              type="text" 
              className="bg-transparent w-full text-black  font-medium rounded-full outline-none "
            />
            <button onClick={searhYoutubeChannel}>
              <Search className="text-red-500" />
            </button>
          </form>
        </div>

        <div className="flex flex-col flex-wrap">
          {youtubeData?.map((value) => (

            <YoutuberCard
            channelName={value.snippet.channelTitle}
            imgSrc={value.snippet.thumbnails.high?.url}
            channelDescription={value.snippet.description}
            />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Youtuber;
