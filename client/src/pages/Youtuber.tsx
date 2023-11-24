import { Search } from "lucide-react";
import YoutuberCard from "../components/YoutuberCard";


const Youtuber = () => {
  

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
          <form className="rounded-full border w-full max-w-[500px] py-2 px-2 my-5 focus-within:border-red-500 flex border-black/20">
            <input
              type="text"
              className="bg-transparent w-full text-black  font-medium rounded-full outline-none "
            />
            <button className="">
              <Search className="text-red-500" />
            </button>
          </form>
        </div>

        <div>
          <YoutuberCard />
        </div>
      </div>
    </section>
  );
};

export default Youtuber;
