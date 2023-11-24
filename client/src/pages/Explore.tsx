import { nanoid } from "nanoid";
import CategoryCard from "../components/CategoryCard";
import categoryArr from "../utils/categoryArr";


const Explore = () => {

  console.log(process.env.SPOTIFY_CLIENT_SECRET)
  return (
    <section className=" bg-black h-auto w-full relative flex flex-col items-center justify-center pt-[40px]">
      <div className="relative  z-[20] max-w-[1400px] w-full  flex flex-col text-white space-y-10 px-8">
        <h2 className="flex flex-col items-center">
          <span className="capitalize rounded-full border border-white px-4 w-full text-center my-2 py-1 bg-white text-mainColor font-bold">
            {" "}
              
            developers ranking
          </span>
          <span className="text-3xl text-center ">
            {" "}
            According to <span className="text-mainColor">differents</span>{" "}
            categories
          </span>
        </h2>

        {categoryArr.map((cat) => (
          <CategoryCard
            key={nanoid(5)}
            imgUrl={cat.imgUrl}
            alt={cat.alt}
            categoryName={cat.categoryName}
            categorySubtitle={cat.categorySubtitle}
            link={cat.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Explore;
