import React from "react";
import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SocialShare() {
  return (
    <div className="fixed top-1/2 z-30">
      <Link to="/">
        <p className="hover:w-12 w-8 translate-x-0 ease-in-out duration-500 h-8 bg-[#075e54ce] text-[#ffca3d] rounded-r-xl relative">
          <FaWhatsapp className="w-8 h-8 absolute right-0" />
        </p>
      </Link>
      <Link to="/">
        <p className="hover:w-12 w-8 translate-x-0 ease-in-out duration-500 h-8 bg-[#2c63dace] text-[#ffca3d] rounded-r-xl relative">
          <FaFacebook className="w-8 h-8 absolute rounded-r-xl right-0" />
        </p>
      </Link>
      <Link to="/">
        <p className="hover:w-12 w-8 translate-x-0 ease-in-out duration-500 h-8 bg-[#00abeec0] text-[#ffca3d] rounded-r-xl relative">
          <FaTwitter className="w-8 h-8 absolute rounded-r-xl right-0" />
        </p>
      </Link>
    </div>
  );
}
