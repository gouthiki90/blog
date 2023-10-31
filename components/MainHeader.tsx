import React from "react";
import MenuList from "./MenuList";
import BlogLogo from "./ProfileLogo";
import { AiOutlineMinus } from "react-icons/ai";
import TagList from "./tags/TagList";

export default function MainHeader() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center absolute top-10 bottom-24 left-20 m-2.5">
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          height="450"
          width={350}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/kr/album/hellfire/1613170781"
        ></iframe>
      </div>
      <div className="flex flex-col mr-5">
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

        {/* 태그 리스트 */}
        <TagList />
      </div>
    </div>
  );
}
