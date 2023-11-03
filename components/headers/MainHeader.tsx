import React from "react";
import MenuList from "../MenuList";
import BlogLogo from "../ProfileLogo";
import { AiOutlineMinus } from "react-icons/ai";
import TagList from "../tags/TagList";
import { HeaderNavigation } from "./HeaderNavigation";

export default function MainHeader() {
  return (
    <>
      <HeaderNavigation />
      <div className="flex justify-center">
        <div className="flex flex-col mr-5">
          {/* 로고 이미지 */}
          <BlogLogo />

          <div className="flex justify-center">
            <h3 className="text-4xl font-mono font-medium">Gaeun Jeon Blog</h3>
          </div>

          {/* 메뉴 */}
          <MenuList />

          <div className="flex justify-center m-1 text-[#71717a]">
            <AiOutlineMinus />
          </div>

          {/* 태그 리스트 */}
          <TagList />
        </div>
      </div>
    </>
  );
}
