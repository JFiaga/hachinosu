import { useState } from "react";
import { categoryYoutube } from "../assets";
import { HeartIcon, HeartOff } from "lucide-react";

const YoutuberCard = () => {
  const [liked, setLiked] = useState(false);

  const likeCount = 1200;
  return (
    <div
      onDoubleClick={() => setLiked((val) => !val)}
      className="relative w-full max-w-[550px] h-[400px] shadow shadow-black/20 bg-white rounded-lg flex  flex-col items-center pb-5 justify-center "
    >
      <div className="h-[150px] w-[150px]  bg-black overflow-hidden rounded-full absolute top-[-10%] translate-x-1/2 right-1/2 ">
        <img
          src={categoryYoutube}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col mt-28 space-y-3">
        <div className="flex flex-col ">
          <h5 className="text-lg font-bold text-red-600 text-center">#2</h5>
          <h5 className="text-xl font-semibold">Traversy Media</h5>
        </div>
        <div className=" text-black flex  justify-center  items-center w-full space-x-4">
          <div className=" flex flex-col items-center justify-center">
            <h5>Videos</h5>
            <span className=" text-lg font-bold text-red-600">102</span>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <h5>Followers</h5>
            <span className="font-bold text-lg text-red-600">20k </span>
          </div>
        </div>
        <div className="text-white bg-red-600 px-4 py-2 rounded font-bold">
          <a href="">View Channel</a>
        </div>
      </div>
      <div
        onClick={() => setLiked((val) => !val)}
        className="mt-2  flex items-center justify-center space-x-2 p-[3px] w-fit "
      >
        <span className="font-medium ">
          {liked ? likeCount + 1 : likeCount}
        </span>
        {!liked ? (
          <HeartOff className="text-black bg-white rounded-full  " />
        ) : (
          <HeartIcon className="text-red-500 bg-white rounded-full  " />
        )}
      </div>
    </div>
  );
};

export default YoutuberCard;
