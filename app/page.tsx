import BlogLogo from "@components/ProfileLogo";
import { Noto_Sans_KR } from "next/font/google";
const notoSansKR = Noto_Sans_KR({ weight: "300", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col">
        <BlogLogo />
        <div className="flex justify-center">
          <h3 className="text-4xl font-mono font-medium">Gaeun Jeon Blog</h3>
        </div>
        <div className="flex justify-center">
          <nav className="my-3">
            <ol className="flex justify-evenly">
              <li className="mx-3">
                <a
                  href="#1"
                  className={`${notoSansKR.className} hover:underline active:underline`}
                >
                  회고
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="#2"
                  className={`${notoSansKR.className} hover:underline active:underline`}
                >
                  기술
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="#3"
                  className={`${notoSansKR.className} hover:underline active:underline`}
                >
                  사설
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </main>
  );
}
