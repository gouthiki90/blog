import { NextPage } from "next";
import { BsArrowClockwise } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaDeleteLeft } from "react-icons/fa6";
import { Nanum_Myeongjo } from "next/font/google";
import Link from "next/link";
import { AppleMusicBox } from "@components/music/AppleMusicBox";
import { SearchInput } from "@components/inputs/SearchInput";

const nanumMyengjo = Nanum_Myeongjo({ weight: "400", subsets: ["latin"] });

export const HeaderNavigation: NextPage = () => {
  return (
    <>
      <div className="mb-10 p-2 flex justify-between items-center contetnt-center m-1">
        <div className="flex">
          <div className=" flex justify-center">
            <Link href="/">
              <div className="profile-image blog-logo-nav" />
            </Link>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center contetnt-center">
          <div className="flex align-middle items-center">
            <span
              className={`${nanumMyengjo.className} text-[#71717a] text-midium`}
            >
              2023년 10월 27일 5시 14분 업데이트
            </span>
            <BsArrowClockwise className="ml-1 text-midium text-[#71717a]" />
          </div>
          <SearchInput />
        </div>
      </div>
    </>
  );
};
