import { Noto_Sans_KR } from "next/font/google";
import "../../app/globals.css";
import DetailView from "@components/DetailView";
import Link from "next/link";
import { MyButton } from "@components/button/Button";
import { MyDetailLayout } from "@components/headers/MyDetailLayout";
import TagList from "@components/tags/TagList";
import { AppleMusicBox } from "@components/music/AppleMusicBox";

const notoSansKR = Noto_Sans_KR({ weight: "300", subsets: ["latin"] });

export default function Detail() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-evenly p-20">
          {/* 메뉴랑 네비 */}
          <div className="flex flex-col">
            <MyDetailLayout />
            <div className="p-5">
              <ol>
                <li>메뉴</li>
                <li>메뉴</li>
                <li>메뉴</li>
                <li>메뉴</li>
                <li>메뉴</li>
                <li>메뉴</li>
              </ol>
            </div>
          </div>
          {/* 글 뷰 */}
          <div className="flex flex-col justify-center content-center flex-row items-center">
            <div className="flex justify-center m-5">
              <DetailView />
            </div>
            {/* 버튼들 */}
            <div className="flex justify-evenly items-center content-evenly">
              <div className="mr-2">
                <Link href="/editor/page">
                  <MyButton
                    iconButton={true}
                    mode="write"
                    type="button"
                    color="bg-zinc-950"
                  />
                </Link>
              </div>
              <div className="mr-2">
                <Link href="#">
                  <MyButton
                    iconButton={true}
                    mode="edit"
                    type="button"
                    color="bg-violet-400"
                  />
                </Link>
              </div>
              <div className="mr-2">
                <Link href="#">
                  <MyButton
                    iconButton={true}
                    mode="delete"
                    type="button"
                    color="bg-zinc-300"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex m-10">
            <AppleMusicBox
              src="https://music.apple.com/kr/playlist/musicbar/pl.u-gxblMP0F5q12q83"
              height="400"
            />
          </div>
        </div>
      </div>
    </>
  );
}
