import { useState } from "react";
import { categoryMusic } from "../assets";
import { HeartCrack, HeartCrackIcon, HeartIcon, HeartOff, HeartPulse } from "lucide-react";

const MusicCard = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div
      onDoubleClick={() => setLiked((val) => !val)}
      className="relative w-full max-w-[450px]  border border-green-500 h-[420px] rounded-lg flex overflow-hidden flex-col "
    >
      <div className="h-[300px] w-full rounded-b-3xl bg-green-500">
        <img
          src={categoryMusic}
          alt="dd"
          className="object-cover h-full w-full opacity-50 rounded-t-lg rounded-b-3xl"
        />
      </div>

      <div className=" bg-black h-full w-full flex flex-col pt-2 pl-2">
        <span className="font-bold text-green-500">Artist Name</span>
        <span className="font-bold">Song Name</span>

        <div
        onClick={() => setLiked((val) => !val)}
        className="mt-1 t bg-white p-[3px] w-fit rounded-full">
            {liked ? <HeartOff className="text-black " /> :  <HeartIcon className="text-red-500"/>}
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
