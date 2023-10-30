import BlogList from "@components/BlogList";
import MainHeader from "@components/MainHeader";
import { BsArrowClockwise } from "react-icons/bs";
import { Nanum_Myeongjo } from "next/font/google";

const nanumMyengjo = Nanum_Myeongjo({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center flex-col">
      <div className="flex flex-row-reverse m-1 text-[#71717a]">
        <BsArrowClockwise className="ml-1" />
        <span className={`${nanumMyengjo.className} text-xs`}>
          2023년 10월 27일 5시 14분 업데이트
        </span>
      </div>
      {/* 헤더 부분 */}
      <MainHeader />

      <div className="flex-auto">
        {/* 글 리스트 */}
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
      </div>
    </main>
  );
}
