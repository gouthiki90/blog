import { MyButton } from "@components/button/Button";
import { Noto_Sans_KR } from "next/font/google";
const notoSansKR = Noto_Sans_KR({ weight: "500", subsets: ["latin"] });
const notoSansKR300 = Noto_Sans_KR({ weight: "300", subsets: ["latin"] });

export const AddSeriseModal = () => {
  const fontFamily = notoSansKR.className;
  const inputClassName = `w-60 h-8 p-2 mb-3 ${notoSansKR300.className}`;
  return (
    <>
      <div className="flex justify-center flex-col absolute fixed bg-zinc-50 h-2/6 w-2/6">
        <div className="flex justify-center flex-col content-center flex-row items-center">
          <div className="">
            <span className={`text-xl ${fontFamily} mb-3`}>시리즈 만들기</span>
          </div>
          <div className="flex justify-center flex-col">
            <div className="flex flex-col justify-center">
              <input
                type="text"
                placeholder="새로운 시리즈 이름을 입력하세요"
                className={inputClassName}
              />
              <input
                type="text"
                defaultValue="/gouthiki90/series/"
                className={inputClassName}
              />
            </div>
            <div className="grid grid-cols-1 divide-y">
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
            <div className="flex justify-center">
              <MyButton type="submit" color="bg-zinc-950" value="확인" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
