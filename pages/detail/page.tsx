import { LiaHashtagSolid } from "react-icons/lia";
import { Noto_Sans_KR } from "next/font/google";
import "../../app/globals.css";
import DetailHeader from "@components/DetailHeader";

const notoSansKR = Noto_Sans_KR({ weight: "300", subsets: ["latin"] });

export default function DetailView() {
  return (
    <>
      <main className="flex justify-center flex-col">
        {/* 헤더 부분 */}
        <DetailHeader />

        <div className="flex justify-center mb-6">
          <div className="flex justify-center border h-4/6 w-2/6 p-8 rounded-lg bg-slate-100">
            <div className="">
              <h3 className={`text-2xl ${notoSansKR.className} mr-5`}>제목</h3>
              <p
                className={`mt-2 ${notoSansKR.className} leading-relaxed text-justify indent-8`}
              >
                하나둘셋 하나둘셋하나둘셋하나둘셋하나둘셋
                하나둘셋하나둘셋하나둘셋 하나둘셋하나둘셋하나둘셋하나둘셋
                하나둘셋하나둘셋하나둘셋하나둘셋
                하나둘셋하나둘셋하나둘셋하나둘셋
                하나둘셋하나둘셋하나둘셋하나둘셋
                하나둘셋하나둘셋하나둘셋하나둘셋
                하나둘셋하나둘셋하나둘셋하나둘셋
                하나둘셋하나둘셋하나둘셋하나둘셋
                하나둘셋하나둘셋하나둘셋하나둘셋
                하나둘셋하나둘셋하나둘셋하나둘셋
                하나둘셋하나둘셋하나둘셋하나둘셋
                하나둘셋하나둘셋하나둘셋하나둘셋 하나둘셋
              </p>
              <div>
                <ol className="mt-3 flex flex-warp">
                  <li className="flex mr-2">
                    <LiaHashtagSolid className="w-5 h-5" />
                    <span className={`${notoSansKR.className}`}>하나</span>
                  </li>
                  <li className="flex mr-2">
                    <LiaHashtagSolid className="w-5 h-5" />
                    <span className={`${notoSansKR.className}`}>하나</span>
                  </li>
                  <li className="flex mr-2">
                    <LiaHashtagSolid className="w-5 h-5" />
                    <span className={`${notoSansKR.className}`}>하나</span>
                  </li>
                  <li className="flex mr-2">
                    <LiaHashtagSolid className="w-5 h-5" />
                    <span className={`${notoSansKR.className}`}>하나</span>
                  </li>
                  <li className="flex mr-2">
                    <LiaHashtagSolid className="w-5 h-5" />
                    <span className={`${notoSansKR.className}`}>하나</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
