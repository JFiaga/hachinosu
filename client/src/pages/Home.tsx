import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
     <section className= " bg-black h-auto w-full relative flex flex-col items-center justify-center pt-[40px]">
      <div className="relative  z-[20] max-w-[1400px] w-full h-[80vh] max-h-[80vh] flex flex-col text-white space-y-10 ">
        
        
        <h2 className="text-3xl  font-bold flex items-center justify-center flex-col">
          Discover what <span className="bg-mainColor px-2">developers</span>{" "}
          appreciate.
        </h2>

        <p className="text-white/80 z-[20] text-center">
          Explore the nuances of development culture, tools, films, series,
          musics, anime, manga, videogame, technologies and more that garner
          appreciation within the coding community.
        </p>

        <Link to='/explorer' className="bg-mainColor w-fit px-10 py-2 self-center rounded-md shadowPurple">
            Get started
        </Link>
      </div>
  
    </section>
    </>
  )
}

export default Home