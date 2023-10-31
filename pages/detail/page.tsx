import { Noto_Sans_KR } from "next/font/google";
import "../../app/globals.css";
import DetailHeader from "@components/DetailHeader";
import DetailView from "@components/DetailView";
import Link from "next/link";

const notoSansKR = Noto_Sans_KR({ weight: "300", subsets: ["latin"] });

export default function Detail() {
  return (
    <>
      <div className="flex justify-center flex-col">
        {/* 헤더 부분 */}
        <DetailHeader />

        <div className="flex justify-items-center justify-evenly">
          <div className="m-2">
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              height="450"
              width={300}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/kr/album/hellfire/1613170781"
            ></iframe>
          </div>
          <div className="m-5 w-3/6 h-full flex justify-center">
            <Link href="/editor/page">글쓰기</Link>
            <DetailView />
          </div>
          <div className="m-10">
            <ol>
              <li>
                <p>제목</p>
              </li>
              <li>
                <p>소제목</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
