import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const ReactIcons = () => {
  return (
    <>
      <center className="text-2xl font-bold p-4 m-6">
        Create a footer that contains facebook, youtube and linkedin icons{" "}
      </center>

      <ul className="flex justify-around bg-blue-300 h-24 items-center">
        <a href="#">
          <div className="flex gap-3 ">
            <li>Facebook </li>
            <FaFacebookF />
          </div>
        </a>

        <a href="#">
          <div className="flex gap-4 ">
            <li>youtube</li>
            <FaYoutube />
          </div>
        </a>

        <a href="#">
          <div className="flex gap-3 ">
            <li>Linkedin</li>
            <FaLinkedin />
          </div>
        </a>
      </ul>
    </>
  );
};

export default ReactIcons;
