import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaLinkedin, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

export default function SocialMediaItem({ color, position }) {
  return (
    <section
      className={` flex items-center justify-start gap-8 text-white my-[20px]`}
    >
      <a
        href="https://www.instagram.com/tinqlab/"
        target="_blank"
        rel="noopener"
        className="   "
      >
        <FaInstagram
          size={50}
          className="text-secondary hover:text-mainBlack hover:scale-125 transition-all duration-300 p-2 text-darkestBlue rounded-[10px]"
        />{" "}
      </a>
      <a
        href="https://x.com/tinqlabtech"
        target="_blank"
        rel="noopener"
        className=" "
      >
        <FaXTwitter
          size={50}
          className="text-secondary hover:text-mainBlack hover:scale-125  transition-all duration-300 p-2 text-darkestBlue rounded-[10px]"
        />
      </a>
      <a
        href="https://www.facebook.com/people/Tinqlab/100064552795813/"
        target="_blank"
        rel="noopener"
        className="   "
      >
        <FaYoutube
          size={50}
          className="text-secondary hover:text-mainBlack hover:scale-125 transition-all duration-300 p-2 text-darkestBlue rounded-[10px]"
        />
      </a>{" "}
      <a
        href="https://linkedin.com/company/tinqlabtech"
        target="_blank"
        rel="noopener"
        className=""
      >
        <FaTiktok
          size={50}
          className="text-secondary hover:text-mainBlack hover:scale-125 transition-all duration-300 p-2 text-darkestBlue rounded-[10px]"
        />
      </a>
    </section>
  );
}
