import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import SocailLogin from "../Shared/SocialLogin/SocailLogin";

const Register = () => {
  const { createUser, auth } = useContext(AuthContext);
  useTitle("Register");
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photoUrl = form.photoUrl.value;

    const validatePassword = (password) => {
      // Regular expressions for password complexity
      const regexLength = /^.{8,}$/; // Minimum length of 8 characters
      const regexUppercase = /[A-Z]/; // At least one uppercase letter
      const regexLowercase = /[a-z]/; // At least one lowercase letter
      const regexDigit = /\d/; // At least one digit
      const regexSpecialChar = /[!@#$%^&*.]/; // At least one special character

      // Validate password complexity
      if (!regexLength.test(password)) {
        return toast.error(
          "Password should have a minimum length of 8 characters."
        );
      }

      if (!regexUppercase.test(password)) {
        return toast.error(
          "Password should contain at least one uppercase letter."
        );
      }

      if (!regexLowercase.test(password)) {
        return toast.error(
          "Password should contain at least one lowercase letter."
        );
      }

      if (!regexDigit.test(password)) {
        return toast.error("Password should contain at least one digit.");
      }

      if (!regexSpecialChar.test(password)) {
        return toast.error(
          "Password should contain at least one special character (!@#$%^&*.)."
        );
      }

      // Password passed all complexity checks
      return "Password is valid";
    };
    const validate = validatePassword(password);

    if (validate !== "Password is valid") {
      return;
    } else if (password !== confirmPassword) {
      return toast.error("Password does not match");
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            // Profile updated!
            toast.success("Successfully created user");
            // ...
          })
          .catch((error) => {
            console.log(error);
          });

        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        toast.error("User already exists");
      });
  };

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <ToastContainer />
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">TEDY-SHOP</a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            "Plush Paradise: Discover the Coziest Haven at Tedy Shop"
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Already have an account?</span>
            <Link to="/login" className="underline">
              Get Login!
            </Link>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our terms and conditions
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Register Your Account
          </h3>
          <form onSubmit={handleRegister} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-500"
              >
                Your Full Name
              </label>
              <input
                type="text"
                name="name"
                // placeholder="name"
                required
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                required
                name="email"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="url"
                className="text-sm font-semibold text-gray-500"
              >
                Photo URL
              </label>
              <input
                type="url"
                id="url"
                name="photoUrl"
                required
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Confirm Password
                </label>
              </div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label
                htmlFor="remember"
                className="text-sm font-semibold text-gray-500"
              >
                Remember me
              </label>
            </div>
            <div>
              <input
                type="submit"
                value="Register"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              />
              {/* <input
                
              >
                Log in
              </input> */}
            </div>
            <SocailLogin></SocailLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
