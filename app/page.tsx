import MainHeader from "@components/headers/MainHeader";
import { AiOutlineMinus } from "react-icons/ai";
import { Noto_Sans_KR } from "next/font/google";
import { NextPage } from "next";
import MenuButtonView from "@components/MenuButtonView";

const notoSansKR400 = Noto_Sans_KR({ weight: "400", subsets: ["latin"] });
const notoSansKR700 = Noto_Sans_KR({ weight: "700", subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <main className="flex justify-center flex-col">
      <div className="static">
        {/* 헤더 부분 */}
        <MainHeader />
      </div>
      <div className="flex flex-col border justify-center h-full mt-10 mb-10 mr-36 ml-36">
        <div className={`p-10`}>
          <center
            className={`text-xl ${notoSansKR400.className} hover:underline m-5`}
          >
            Hi, There! 👋
          </center>
          <div className="flex justify-center m-5 text-[#71717a]">
            <AiOutlineMinus />
          </div>
          <center className={`text-2xl ${notoSansKR400.className}`}>
            전가은 <br /> Gea-eun Jeon <br /> Back-End Software Developer
          </center>
        </div>

        <MenuButtonView />
      </div>
    </main>
  );
};

export default Home;
