import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1 hover:cursor-pointer">Marketing</li>
            <li className="py-1 hover:cursor-pointer">Analytics</li>
            <li className="py-1 hover:cursor-pointer">Commerce</li>
            <li className="py-1 hover:cursor-pointer">Data</li>
            <li className="py-1 hover:cursor-pointer">Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1 hover:cursor-pointer">Pricing</li>
            <li className="py-1 hover:cursor-pointer">Documentation</li>
            <li className="py-1 hover:cursor-pointer">Guides</li>
            <li className="py-1 hover:cursor-pointer">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1 hover:cursor-pointer">About</li>
            <li className="py-1 hover:cursor-pointer">Blog</li>
            <li className="py-1 hover:cursor-pointer">Jobs</li>
            <li className="py-1 hover:cursor-pointer">Press</li>
            <li className="py-1 hover:cursor-pointer">Partners</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1 hover:cursor-pointer">Claims</li>
            <li className="py-1 hover:cursor-pointer">Privacy</li>
            <li className="py-1 hover:cursor-pointer">Terms</li>
            <li className="py-1 hover:cursor-pointer">Policies</li>
            <li className="py-1 hover:cursor-pointer">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 Workflow, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook className="hover:cursor-pointer" />
          <FaInstagram className="hover:cursor-pointer" />
          <FaTwitter className="hover:cursor-pointer" />
          <FaTwitch className="hover:cursor-pointer" />
          <FaGithub className="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
