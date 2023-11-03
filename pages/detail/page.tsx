import { Noto_Sans_KR } from "next/font/google";
import "../../app/globals.css";
import DetailHeader from "@components/headers/DetailHeader";
import DetailView from "@components/DetailView";
import Link from "next/link";
import { MyButton } from "@components/button/Button";

const notoSansKR = Noto_Sans_KR({ weight: "300", subsets: ["latin"] });

export default function Detail() {
  return (
    <>
      <div className="flex justify-center flex-col">
        {/* 헤더 부분 */}
        <DetailHeader />

        <div className="flex flex-col">
          <div className="flex flex-col justify-center content-center flex-row items-center">
            <div className="flex w-3/6 justify-center">
              <DetailView />
            </div>
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
        </div>
      </div>
    </>
  );
}
