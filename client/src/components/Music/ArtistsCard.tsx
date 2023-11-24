import { HeartIcon, HeartOff } from "lucide-react";
import { useState } from "react";

type Props = {
  imgSrc: string;
  artistName: string;
};

const ArtistsCard = ({ imgSrc, artistName }: Props) => {

    const [liked, setLiked] = useState<boolean>()


    const likeCount = 200
  return (
    <div 
    onDoubleClick={() => setLiked((val) => !val)}
    className="relative w-full max-w-[400px] h-[400px] rounded-md bg-black overflow-hidden m-2">

        <div className="h-[100px] w-[100px] bg-white rounded-full right-[-3%] absolute top-[-6%] z-[10] flex items-center justify-center">
            <span className="text-mainColor font-bold text-lg ">#1000</span>
        </div>
      <img
        src={imgSrc}
        alt="artist wallpaper"
        className="w-full h-full object-cover hover:scale-125 transition-all duration-300 opacity-60"
      />

      <div className="absolute bottom-[5%] left-[5%] z-10 break-words">
        <span className="font-bold text-2xl">{artistName}</span>
      </div>
      <div
          onClick={() => setLiked((val) => !val)}
          className="mt-2  flex items-center justify-center space-x-2 p-[3px] w-fit absolute z-10 bottom-0  right-0 shadow cursor-pointer"
        >
            <span className="font-medium">{liked ? likeCount + 1 : likeCount}</span>
          {!liked ? (
            <HeartOff className="text-black bg-white rounded-full p-[1px]" />
          ) : (
            <HeartIcon className="text-red-500 bg-white rounded-full p-[1px]" />
          )}
        </div>

    </div>
  );
};

export default ArtistsCard;
