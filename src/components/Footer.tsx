import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import gymLogo from "../assets/Image/gym Logo.png";

function Footer() {
  return (
    <>
      <footer className="hidden xl:block shadow backdrop-blur-sm bg-black/80 mt-5 fixed bottom-0 z-10 w-full">
        <div className="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex">
            <img src={gymLogo} alt="Gym Logo" height={50} width={50} />
            <p className="w-96 text-start mt-2">
              Mahakaleshvar mandir near kumfarvada una -362560
              <div className="flex">
                <div className="text-xl">
                  <IoIosCall />
                </div>
                - 7894561230
                <div className="text-xl ml-2">
                  <MdEmail />
                </div>
                - dummy123@gmail.com
              </div>
            </p>
          </span>
          <ul className="flex justify-center gap-3 items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link
                to="//www.instagram.com/"
                target="_blank"
                className="text-3xl text-pink-700"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                to="//www.facebook.com/"
                target="_blank"
                className="text-3xl text-blue-700"
              >
                <FaSquareFacebook />
              </Link>
            </li>
            <li>
              <Link
                to="//www.youtube.com/@deepbarad8153"
                target="_blank"
                className="text-3xl text-red-700"
              >
                <IoLogoYoutube />
              </Link>
            </li>
            <li>
              <Link
                to="//www.linkedin.com/in/deep-barad-038581243"
                target="_blank"
                className="text-3xl text-blue-600"
              >
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
