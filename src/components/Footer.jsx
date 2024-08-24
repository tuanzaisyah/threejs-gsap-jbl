import React from "react";
import { FaTiktok, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div id="contact" className="w-screen h-full bg-black relative z-40">
      <div className="screen-max-width px-6 py-10 flex flex-col md:flex-row gap-3">
        <div className="basis-1/5">
          <h1 className="font-semibold text-2xl text-yellow-100">JBL</h1>
        </div>
        <div className="basis-1/5">
          <h5 className="font-medium text-yellow-100">Shop</h5>
          <ul className="flex flex-col gap-1 mt-3">
            <li>
              <a
                href="#"
                className="text-sm font-light cursor-pointer hover:underline text-yellow-100"
              >
                Headphones
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-light cursor-pointer hover:underline text-yellow-100"
              >
                JBL True Wireless
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-light cursor-pointer hover:underline text-yellow-100"
              >
                Wireless Speakers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-light cursor-pointer hover:underline text-yellow-100"
              >
                Home Audio
              </a>
            </li>
          </ul>
        </div>
        <div className="basis-1/5">
          <h5 className="font-medium text-yellow-100">Support</h5>
          <ul className="flex flex-col gap-1 mt-3">
            <li>
              <a
                href="#"
                className="text-sm font-light cursor-pointer hover:underline text-yellow-100"
              >
                Product Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-light cursor-pointer hover:underline text-yellow-100"
              >
                Delivery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-light cursor-pointer hover:underline text-yellow-100"
              >
                Return & Refund
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-light cursor-pointer hover:underline text-yellow-100"
              >
                Track Order
              </a>
            </li>
          </ul>
        </div>
        <div className="basis-1/5">
          <h5 className="font-medium text-yellow-100">Info</h5>
          <ul className="flex flex-col gap-1 mt-3">
            <li>
              <a
                href="#"
                className="text-sm font-light cursor-pointer hover:underline text-yellow-100"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-light cursor-pointer hover:underline text-yellow-100"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-light cursor-pointer hover:underline text-yellow-100"
              >
                Privacy Policy & Terms of Use
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-light cursor-pointer hover:underline text-yellow-100"
              >
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="basis-1/5">
          <h5 className="font-medium text-yellow-100">Follow Us</h5>
          <ul className="flex flex-row gap-4 mt-3">
            <li>
              <FaFacebook className=" text-xl cursor-pointer text-yellow-100" />
            </li>
            <li>
              <BsTwitterX className=" text-xl cursor-pointer text-yellow-100" />
            </li>
            <li>
              <FaInstagram className=" text-xl cursor-pointer text-yellow-100" />
            </li>
            <li>
              <FaYoutube className=" text-xl cursor-pointer text-yellow-100" />
            </li>
            <li>
              <FaTiktok className=" text-xl cursor-pointer text-yellow-100" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
