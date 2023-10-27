import { Noto_Sans_KR } from "next/font/google";
import { BsGithub } from "react-icons/bs";
import { SiNaver } from "react-icons/si";

const notoSansKR = Noto_Sans_KR({ weight: "300", subsets: ["latin"] });

export default function MenuList() {
  return (
    <>
      <div className="mb-10">
        <div className="flex justify-center">
          <nav className="my-3">
            <ol className="flex justify-evenly">
              <li className="mx-3 hover:animate-bounce">
                <a href="#1" className={`${notoSansKR.className}`}>
                  회고
                </a>
              </li>
              <li className="mx-3 hover:animate-bounce">
                <a href="#2" className={`${notoSansKR.className}`}>
                  기술
                </a>
              </li>
              <li className="mx-3 hover:animate-bounce">
                <a href="#3" className={`${notoSansKR.className}`}>
                  사설
                </a>
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex justify-center">
          <nav>
            <ol className="flex justify-evenly">
              <li className="mx-3">
                <a href="https://github.com/gouthiki90">
                  <BsGithub className="text-[#71717a] hover:text-[#000000]" />
                </a>
              </li>
              <li className="mx-3">
                <a href="https://blog.naver.com/jke2358">
                  <SiNaver className="text-[#71717a] hover:text-[#000000]" />
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}
