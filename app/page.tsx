import BlogList from "@components/BlogList";
import MenuList from "@components/MenuList";
import BlogLogo from "@components/ProfileLogo";

import { AiOutlineMinus } from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/bs";
import { Noto_Sans_KR } from "next/font/google";
import { Nanum_Myeongjo } from "next/font/google";
import TagList from "@components/TagList";

const notoSansKR = Noto_Sans_KR({ weight: "300", subsets: ["latin"] });
const nanumMyengjo = Nanum_Myeongjo({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center flex-col">
      <div></div>
      <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        height="450"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/kr/album/hellfire/1613170781"
      ></iframe>

      <div className="flex flex-row-reverse m-1 text-[#71717a]">
        <BsArrowClockwise className="ml-1" />
        <span className={`${nanumMyengjo.className} text-xs`}>
          2023년 10월 27일 5시 14분 업데이트
        </span>
      </div>
      <div className="flex flex-col">
        {/* 로고 이미지 */}
        <BlogLogo />

        <div className="flex justify-center">
          <h3 className="text-4xl font-mono font-medium">Gaeun Jeon Blog</h3>
        </div>

        {/* 메뉴 */}
        <MenuList />

        <div className="flex justify-center mb-10 text-[#71717a]">
          <AiOutlineMinus />
        </div>

        {/* 태그 리스트 */}
        <TagList />

        {/* 글 리스트 */}
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
      </div>
    </main>
  );
}
