import { useState } from "react";
import { categoryMusic } from "../assets";
import { HeartIcon, HeartOff } from "lucide-react";

const MusicCard = () => {
  const [liked, setLiked] = useState(false);
  const likeCount = 1200

  return (
    <div
      onDoubleClick={() => setLiked((val) => !val)}
      className="relative w-full max-w-[450px]  border border-green-500 h-auto rounded-lg flex overflow-hidden flex-col "
    >
      <div className="h-[320px] overflow-hidden w-full rounded-b-3xl bg-green-500">
        <img
          src={categoryMusic}
          alt="song cover"
          className="object-cover h-full w-full opacity-50 rounded-t-lg rounded-b-3xl"
        />
      </div>

      <div className=" bg-black h-auto w-full flex flex-col py-2 pl-2 break-words">
        <span className="font-bold text-green-500">Artist Name</span>
        <span className="font-bold">Song Name</span>
        <div className="text-green-500">
           <span className="text-white">Rank : </span>
           <span>#1</span>
        </div>
        <div
          onClick={() => setLiked((val) => !val)}
          className="mt-2  flex items-center justify-center space-x-2 p-[3px] w-fit "
        >
            <span className="font-medium">{liked ? likeCount + 1 : likeCount}</span>
          {!liked ? (
            <HeartOff className="text-black bg-white rounded-full p-[1px]" />
          ) : (
            <HeartIcon className="text-red-500 bg-white rounded-full p-[1px]" />
          )}
        </div>
      
      </div>
    </div>
  );
};

export default MusicCard;
