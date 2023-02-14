import React from "react";
import Header from "./Header";
// import Head from "next/head";
// import Link from "next/link";
// import { useRouter } from "next/dist/client/router";
import { Link } from "react-router-dom";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
  ArrowSmLeftIcon,
} from "@heroicons/react/solid";

function Challenge() {
  // const router = useRouter();
  return (
    <div>
      {/* <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head> */}
      <Header />
      <div className="bg-gradient-to-b from-blue-700 to-white relative">
        <Link to="/challenges">
          <ArrowSmLeftIcon
            // onClick={() => router.push("challenges")}
            className="h-10 absolute left-16 top-9 text-white cursor-pointer sm:left-8"
          />
        </Link>
        <p className="text-white text-2xl font-semibold px-8 pl-32 pt-10 sm:pl-20">
          Complete code below to cleate a function {"'slugify'"} to generate
          unique url for article by it{"`"}s title
        </p>
        <div className="bg-white rounded-2xl m-10 mx-12 box-border flex justify-around sm:mx-4 sm:flex-col md:flex-col">
          <div className="pt-12 pl-20 mr-24 sm:pl-8 sm:mr-0 sm:pt-7">
            <p className="font-semibold text-xl border-b-2 border-black inline-block mb-4">
              Examples
            </p>
            <p className="font-semibold text-xl w-[300px] md:w-[550px]">
              How to become a really good programmer {"->"}
              /how-to-become-a-really-good-programmer<br></br>
              Air alarm: types of signals and their meaning {"->"}
              /air-alarm-types-of-signals-and-their-meaning
            </p>
          </div>
          <div className="w-[770px] mt-6 mr-14 sm:w-[360px]">
            <div className="bg-gray-200  rounded-3xl relative md:w-[675px] md:mx-6">
              <div className="bg-gray-800 w-[770px] h-16 rounded-t-3xl relative sm:w-[360px] sm:h-14 md:w-[675px]">
                <button className="bg-blue-700 rounded-full text-white px-9 py-1 absolute top-4 right-14 text-base font-medium active:scale-90 transition duration-150 text-center sm:right-8 sm:top-3 sm:px-6 sm:text-sm md:right-8">
                  Check
                </button>
                <div className=" bg-blue-700 rounded-full h-5 w-5 absolute left-8 top-5"></div>
                <div className="bg-gray-100 rounded-full h-5 w-5 absolute left-16 top-5"></div>
              </div>
              <textarea className="bg-gray-100 w-lg h-72 mx-8 my-4 rounded-b-3xl pl-6 pt-6 outline-none resize-none w-11/12 sm:mx-3.5">
                def slugify(title): # put your code here, good luck :)
              </textarea>
              <textarea className="bg-gray-100 w-lg h-72 mx-8 my-4 rounded-b-3xl pl-6 pt-6 outline-none resize-none w-11/12 sm:mx-3.5">
                Console
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
