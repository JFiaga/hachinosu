import MusicCard from "../components/MusicCard";

const Music = () => {
  return (
    <section className=" bg-black h-auto w-full relative flex flex-col items-center justify-center pt-[40px]">
      <div className="relative  z-[20] max-w-[1400px] w-full first-letter min-h-screen  flex flex-col text-white space-y-10 px-8">
      <h2 className="flex flex-col items-center">
          <span className="capitalize rounded-full border border-white px-4 w-fit text-center my-2 py-1 bg-white text-mainColor font-bold">
            {" "}
           Find the best Music
          </span>
          <span className="text-3xl text-center ">
            {" "}
            Listen by <span className="text-mainColor">by developers</span>{" "}
            
          </span>
          </h2>

          <div className="flex flex-col">
<MusicCard/>
          </div>
      </div>
    </section>
  );
};

export default Music;
