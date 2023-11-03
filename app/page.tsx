import BlogList from "@components/BlogList";
import MainHeader from "@components/headers/MainHeader";
import { BsArrowClockwise } from "react-icons/bs";
import { Nanum_Myeongjo } from "next/font/google";

const nanumMyengjo = Nanum_Myeongjo({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center flex-col">
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
