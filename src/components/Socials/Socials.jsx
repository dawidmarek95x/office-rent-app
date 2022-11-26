import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Ul } from "./Socials.styled";

const Socials = () => {
  return (
    <Ul>
      <li>
        <a href="https://www.facebook.com/">{<FaFacebookF color="black" />}</a>
      </li>
      <li>
        <a href="https://www.instagram.com/">{<FaInstagram color="black" />}</a>
      </li>
    </Ul>
  );
};

export default Socials;
