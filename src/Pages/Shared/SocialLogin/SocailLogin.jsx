import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocailLogin = ({ go }) => {
  const { signinWithGoogle , signinWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();



  const handeGoogleSignin = () => {
    signinWithGoogle()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        toast.success("User signed in successfully");
        navigate(go, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handeGithubSignin = () => {
    signinWithGithub()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        toast.success("User signed in successfully");
        navigate(go, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="flex flex-col space-y-5">
      <span className="flex items-center justify-center space-x-2">
        <span className="h-px bg-gray-400 w-14"></span>
        <span className="font-normal text-gray-500">or login with</span>
        <span className="h-px bg-gray-400 w-14"></span>
      </span>
      <div className="flex flex-col space-y-4">
        <button 
        onClick={handeGithubSignin}
        className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none">
          <span>
            <svg
              className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
              viewBox="0 0 16 16"
              version="1.1"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </span>
          <span className="text-sm font-medium text-gray-800 group-hover:text-white">
            Github
          </span>
        </button>
        <button
          onClick={handeGoogleSignin}
          className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
        >
          <span>
            <FaGoogle />
          </span>
          <span className="text-sm font-medium text-blue-500 group-hover:text-white">
            Google
          </span>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SocailLogin;
