import React from "react";
import MenuList from "./MenuList";
import BlogLogo from "./ProfileLogo";
import { AiOutlineMinus } from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/bs";
import { Nanum_Myeongjo } from "next/font/google";

const nanumMyengjo = Nanum_Myeongjo({ weight: "400", subsets: ["latin"] });

export default function DetailHeader() {
  return (
    <>
      <div className="flex flex-row-reverse m-1 text-[#71717a]">
        <BsArrowClockwise className="ml-1" />
        <span className={`${nanumMyengjo.className} text-xs`}>
          2023년 10월 27일 5시 14분 업데이트
        </span>
      </div>
      <div className="flex justify-center flex-col mr-5">
        {/* 로고 이미지 */}
        <BlogLogo />
        <div className="flex justify-center">
          <h3 className="text-4xl font-mono font-medium">Gaeun Shrimp Blog</h3>
        </div>
        {/* 메뉴 */}
        <MenuList />

        <div className="flex justify-center mb-10 text-[#71717a]">
          <AiOutlineMinus />
        </div>
      </div>
    </>
  );
}
