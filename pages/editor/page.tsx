import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { useState } from "react";
import DetailHeader from "@components/headers/DetailHeader";
import { MyButton } from "@components/button/Button";
import { TagList } from "@components/tags/TagInputList";
import { Noto_Sans_KR } from "next/font/google";
import { SeriesButtonList } from "@components/button/SeriseButtonList";
import "../../app/globals.css";
const notoSansKR = Noto_Sans_KR({ weight: "400", subsets: ["latin"] });

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

const Upload: NextPage = () => {
  const [md, setMd] = useState<string | undefined>("# Hello World");
  const [saveValue, setSaveValue] = useState<string | undefined>("Publish");
  const [isLoading, setIsLoading] = useState<boolean | undefined>(false);

  const onClickSaveButton = () => {
    setSaveValue("Publishing!");
    setIsLoading(true);
  };

  return (
    <>
      <div className="flex justify-center flex-col">
        <DetailHeader />
        <div className="flex flex-col justify-center mx-20">
          <form action="post" className="flex flex-col">
            <div className="flex justify-between items-center mb-5">
              <input
                type="text"
                placeholder="제목"
                className={`w-full border-none rounded-lg ml-1 font_size p-2 ${notoSansKR.className} outline-0`}
              />
              <div className="flex">
                <TagList />
              </div>
              <SeriesButtonList />
            </div>
            <div>
              <MDEditor
                height={1200}
                className="w-full"
                value={md}
                onChange={setMd}
              />
            </div>
            <div className="flex justify-end content-end">
              <div className="flex">
                {!isLoading && (
                  <MyButton
                    onClick={onClickSaveButton}
                    value={saveValue}
                    color="bg-zinc-950"
                    type="submit"
                  />
                )}
              </div>

              <div className="flex">
                {isLoading && (
                  <MyButton
                    iconButton={true}
                    onClick={onClickSaveButton}
                    value={saveValue}
                    color="bg-zinc-950"
                    mode="loading"
                    type="button"
                    className="cursor-progress"
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Upload;
