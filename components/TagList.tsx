import { LiaHashtagSolid } from "react-icons/lia";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({ weight: "300", subsets: ["latin"] });

export default function TagList() {
  return (
    <>
      <div className="flex justify-center mb-1">
        <span className={`${notoSansKR.className}`}>태그 모음</span>
      </div>
      <div className="flex mb-7 flex-warp justify-center">
        <ol className="flex flex-warp">
          <li className="flex mr-2 hover:bg-lime-500">
            <LiaHashtagSolid className="w-5 h-5" />
            <a href="#">
              <span className={`${notoSansKR.className}`}>기술</span>
            </a>
          </li>
          <li className="flex mr-2 hover:bg-lime-500">
            <LiaHashtagSolid className="w-5 h-5" />
            <a href="#">
              <span className={`${notoSansKR.className}`}>기술</span>
            </a>
          </li>
          <li className="flex mr-2 hover:bg-lime-500">
            <LiaHashtagSolid className="w-5 h-5" />
            <a href="#">
              <span className={`${notoSansKR.className}`}>기술</span>
            </a>
          </li>
          <li className="flex mr-2 hover:bg-lime-500">
            <LiaHashtagSolid className="w-5 h-5" />
            <a href="#">
              <span className={`${notoSansKR.className}`}>기술</span>
            </a>
          </li>
        </ol>
      </div>
    </>
  );
}
