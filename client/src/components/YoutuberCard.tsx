import { useState } from "react";

import { HeartIcon, HeartOff } from "lucide-react";

type Props = {
  channelName: string;
  imgSrc?: string;
  channelDescription: string;
};

const YoutuberCard = ({ channelName, imgSrc, channelDescription }: Props) => {
  const [liked, setLiked] = useState(false);

  const likeCount = 1200;

  return (
    <div
      onDoubleClick={() => setLiked((val) => !val)}
      className="w-full min-h-[300px] py-4 bg-black text-white rounded-md my-10 flex flex-col items-center "
    >
      <div className="h-[150px] w-[150px] bg-black rounded-full mt-5 overflow-hidden">
        <img src={imgSrc} alt="channel wallpaper" />
      </div>
      <div className="flex flex-col mt-2 items-center text-center">
        <h5 className="text-red-500 font-bold">Ranking: #2</h5>
        <h5 className="text-lg font-bold">{channelName}</h5>
        <p className="font-light mt-4">{channelDescription}</p>
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
  );
};

export default YoutuberCard;
