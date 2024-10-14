import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const date = new Date ()

function Footer() {



  return (
    <>
      <footer className="absolute bottom-0 bg-gray-400 w-full h-auto sm:h-20 p-2 font-saira-condensed">
        <div className="flex flex-col gap-2 justify-between px-8 sm:gap-0 sm:flex-row ">
          <div className="text-3xl flex gap-4 justify-center">
            <a href="https://x.com/SteveAstheRebel" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} className="hover:text-darkPurple" />
            </a>
            <a href="http://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} className="hover:text-darkPurple" />
            </a>
            <a href="http://www.dribbble.com">
              <FontAwesomeIcon icon={faDribbble} className="hover:text-darkPurple" />
            </a>
          </div>
          <div>
            <ul className="flex flex-col items-center">
              <li>
                <span>Phone: </span>(704) 555 0127
              </li>
              <li>
                <span>Email: </span>hello@robertfox.design
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.privacypolicies.com/live/cad4374e-c0f1-4827-aa1f-b9da3b3a6bf4">
              Privacy & Policy
            </a>
            <a href="https://www.privacypolicies.com/live/3ff7ef89-0d71-4385-a13d-d0401fc023c4">
              Terms & Conditions
            </a>
          </div>
        </div>
        <p className="text-center">Robert Fox &copy;{date.getFullYear()}. All rights reserved</p>
      </footer>
    </>
  );
}

export default Footer;
