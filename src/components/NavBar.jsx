import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const NavBar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="mx-2 w-10 text-white-400 font-semibold text-3xl">YP</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="#">
          <FaLinkedin className="cursor-pointer" />
        </a>
        <a href="https://github.com/yenpham103">
          <FaGithub className="cursor-pointer" />
        </a>
        <a href="#">
          <FaSquareXTwitter className="cursor-pointer" />
        </a>
        <a href="https://www.facebook.com/nosgar.1003/">
          <FaFacebook className="cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
