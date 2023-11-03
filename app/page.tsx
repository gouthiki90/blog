import BlogList from "@components/BlogList";
import MainHeader from "@components/headers/MainHeader";
import { SiApplemusic } from "react-icons/si";
import { Nanum_Myeongjo } from "next/font/google";

const nanumMyengjo = Nanum_Myeongjo({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center flex-col">
      {/* 헤더 부분 */}
      <MainHeader />

      <div className="flex justify-center">
        <div className="p-5 ">
          <ol>
            <li>메뉴</li>
            <li>메뉴</li>
            <li>메뉴</li>
            <li>메뉴</li>
            <li>메뉴</li>
            <li>메뉴</li>
          </ol>
        </div>
        <div className="flex flex-col grow">
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
      </div>
    </main>
  );
}
