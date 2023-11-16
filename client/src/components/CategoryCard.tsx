import { Link } from "react-router-dom";

interface ICategoryProps {
  imgUrl: string;
  alt: string;
  categoryName: string;
  categorySubtitle: string;
  link: string;
}

const CategoryCard = ({
  imgUrl,
  alt,
  categoryName,
  categorySubtitle,
  link,
}: ICategoryProps) => {
  return (
    <div className=" relative h-[550px] w-full bg-white/30 rounded-2xl overflow-hidden mb-[200px] shadow-md shadow-white/10 ">
      <div className="h-full w-full opacity-20 relative z-[10]  ">
        <img src={imgUrl} alt={alt} className="object-cover h-full w-full " />
      </div>

      <div className="absolute z-[20] bottom-0 left-[10px] flex flex-col space-y-5 mb-5 pr-[10px]">
        <h3 className="text-3xl">{categoryName}</h3>
        <h4 className="text-sm font-bold">{categorySubtitle}</h4>
        <Link
          to={`${link}`}
          className=" rounded-[10px] bg-white text-center py-2 text-mainColor font-bold hover:bg-white/80 transition-all duration-300"
        >
          Discover
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
