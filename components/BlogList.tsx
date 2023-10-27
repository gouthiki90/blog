import { LiaHashtagSolid } from "react-icons/lia";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({ weight: "300", subsets: ["latin"] });
export default function BlogList() {
  return (
    <>
      <div className="flex flex-warp justify-center mb-4">
        <div className="flex justify-center border w-1/4 p-8 rounded-lg bg-slate-100">
          <div className="">
            <h3 className={`text-2xl ${notoSansKR.className}`}>제목</h3>
            <div className={`mt-2 ${notoSansKR.className}`}>
              하나둘셋 하나둘셋하나둘셋하나둘셋하나둘셋 하나둘셋하나둘셋하나둘셋
              하나둘셋
            </div>
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
    </>
  );
}
