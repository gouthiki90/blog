import { NextPage } from "next";
import { BsArrowClockwise } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaDeleteLeft } from "react-icons/fa6";
import { Nanum_Myeongjo } from "next/font/google";
import Link from "next/link";
import React from "react";

const nanumMyengjo = Nanum_Myeongjo({ weight: "400", subsets: ["latin"] });

export const MyDetailLayout: NextPage = () => {
  return (
    <>
      <div className="m-5">
        <div className="flex justify-between items-center contetnt-center m-1 flex-col">
          <div className="flex mb-5">
            <div className=" flex justify-center">
              <Link href="/">
                <div className="profile-image blog-logo-lay" />
              </Link>
            </div>
          </div>
          <form action="post">
            <div className="flex mr-5 mb-5 justify-center items-center contetnt-center bg-zinc-500 p-1 rounded-lg">
              <AiOutlineSearch className="w-5 h-5 mx-1 text-zinc-400" />
              <input
                type="text"
                name="searchText"
                placeholder="Search"
                className="w-60 bg-inherit outline-none text-zinc-50"
              />
              <button>
                <FaDeleteLeft className="w-5 h-5 mr-2 text-zinc-400" />
              </button>
            </div>
          </form>
          <div className="flex flex-row-reverse">
            <div className="flex">
              <span
                className={`${nanumMyengjo.className} text-[#71717a] text-xs`}
              >
                2023년 10월 27일 5시 14분 업데이트
              </span>
              <BsArrowClockwise className="ml-1 text-[#71717a]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
