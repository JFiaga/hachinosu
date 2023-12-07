import { HeartIcon, HeartOff } from "lucide-react";
import { useState } from "react";

type Props = {
  imgUrl: string;
  title: string;
  note: number;
  releaseDate: string;
  description: string;
};
const FilmCard = ({
  imgUrl,
  title,
  note,
  releaseDate,

  description,
}: Props) => {
  const [liked, setLiked] = useState<boolean>();

  const likeCount = 200;

  return (
    <div
      onDoubleClick={() => setLiked((val) => !val)}
      className=" relative w-[400px] h-[650px] max-h-[800px] border rounded-lg bg-black overflow-hidden m-1"
    >
      <div className="h-[65%]  overflow-hidden text-white">
        <img
          src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
          alt={`${title} cover `}
          className="h-full w-full object-cover opacity-70"
        />
      </div>
      <div className="h-[35%] flex flex-col text-white px-4">
        <h4>Rank : #1</h4>
        <h5 className="font-bold">{title}</h5>
        <div className="flex ">
          <span className="pr-2 border-r-2">{note}/10</span>
          <span className=" pl-2">{releaseDate}</span>
        </div>
        <p className="my-3">{description.substring(0, 100) + " . . . "}</p>
      </div>
      <div
        onClick={() => setLiked((val) => !val)}
        className="flex items-center justify-center space-x-2 p-[3px] w-fit absolute z-10 top-0  right-0 shadow cursor-pointer bg-white rounded-l-sm px-2"
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

export default FilmCard;
