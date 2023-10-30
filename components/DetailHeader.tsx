import React from "react";
import MenuList from "./MenuList";
import BlogLogo from "./ProfileLogo";
import { AiOutlineMinus } from "react-icons/ai";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({ weight: "300", subsets: ["latin"] });

export default function DetailHeader() {
  return (
    <>
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
