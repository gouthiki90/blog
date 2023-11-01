import React from "react";
import { LiaHashtagSolid } from "react-icons/lia";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({ weight: "300", subsets: ["latin"] });

export default function DetailView() {
  return (
    <>
      <div className="flex justify-center w-5/6 mb-6">
        <div className="flex flex-col border-y-2 p-8 bg-slate-100">
          <div className="flex justify-end">
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
          <div className="flex mb-7">
            <h3 className={`text-2xl ${notoSansKR.className} mr-5`}>제목</h3>
          </div>
          <div>
            <span
              className={`mt-2 ${notoSansKR.className} leading-relaxed tindent-8 hyphens-auto`}
            >
              하나둘셋&shy; 하나둘셋&shy; 하나둘셋하나둘셋하나둘셋
              &shy;하나둘셋하나둘셋하나둘셋
              &shy;하나둘셋하나둘셋하나둘셋하나둘셋
              하나둘셋하나둘셋하나둘셋하나둘셋
              &shy;하나둘셋하나둘셋하나둘셋하나둘셋
              하나둘셋하나둘셋하나둘셋하나둘셋&shy;
              하나둘셋하나둘셋하나둘셋하나둘셋
              &shy;하나둘셋하나둘셋하나둘셋하나둘셋
              하나둘셋하나둘셋하나둘셋하나둘셋&shy;
              하나둘셋하나둘셋하나둘셋하나둘셋&shy;
              하나둘셋하나둘셋하나둘셋하나둘셋
              &shy;하나둘셋하나둘셋하나둘셋하나둘셋
              하나둘셋하나둘셋하나둘셋하나둘셋 하나둘셋
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
