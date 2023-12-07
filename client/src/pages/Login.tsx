import { Lock, Pencil } from "lucide-react";

const Login = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] ">
      <div className="h-[40%] w-full bg-black overflow-hidden">
        <img
          src={`https://c4.wallpaperflare.com/wallpaper/155/294/538/blue-light-electric-blue-connection-wallpaper-preview.jpg`}
          alt=""
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="h-[60%] w-full bg-white rounded-t-[20px] flex flex-col overflow-hidden p-10 -translate-y-4 ">
        <h4>Login</h4>
        <h5>Welcome back the GOAT</h5>

        <form className=" flex flex-col space-y-5">
          <div className="w-full max-w-[400px] border-black/30 border  rounded-md p-2 flex items-center space-x-2 ">
            <Pencil className="opacity-70" />
            <input
              type="text"
              className="border-none outline-none w-full "
              placeholder="Enter yout email"
            />
          </div>
          <div className="w-full max-w-[400px] border-black/30 border  rounded-md p-2 flex items-center space-x-2 ">
            <Lock className="opacity-70" />
            <input
              type="text"
              className="border-none outline-none w-full "
              placeholder="Enter yout email"
            />
          </div>

          <button className="border w-full max-w-[400px] p-2 rounded-md bg bg-mainColor text-white hover:bg-transparent hover:border-mainColor  hover:text-mainColor transition-all duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
