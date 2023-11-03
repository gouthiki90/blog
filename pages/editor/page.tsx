import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { useState } from "react";
import DetailHeader from "@components/DetailHeader";
import "../../app/globals.css";
import { MyButton } from "@components/button/Button";
import { TagList } from "@components/tags/TagInputList";
import { AddSeriseModal } from "@components/addModal/AddSeriseModal";
import { Noto_Sans_KR } from "next/font/google";
const notoSansKR = Noto_Sans_KR({ weight: "400", subsets: ["latin"] });

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

const Upload: NextPage = () => {
  const [md, setMd] = useState<string | undefined>("# Hello World");
  const [saveValue, setSaveValue] = useState<string | undefined>("Publish");
  const [isLoading, setIsLoading] = useState<boolean | undefined>(false);
  const [modalVisible, setModalvisible] = useState<boolean | undefined>(false);
  const [buttonClick01, setButtonClick01] = useState<boolean | undefined>(
    false
  );
  const [buttonClick02, setButtonClick02] = useState<boolean | undefined>(
    false
  );
  const [buttonClick03, setButtonClick03] = useState<boolean | undefined>(
    false
  );
  const [buttonClick04, setButtonClick04] = useState<boolean | undefined>(
    false
  );
  const [buttonClick05, setButtonClick05] = useState<boolean | undefined>(
    false
  );

  const onClickSaveButton = () => {
    setSaveValue("Publishing!");
    setIsLoading(true);
  };

  const onClickAddButton = () => {
    setModalvisible(true);
  };

  const onClickNumberingButton01 = () => {
    if (!buttonClick01) setButtonClick01(true);
    else if (buttonClick01) setButtonClick01(false);
  };

  const onClickNumberingButton02 = () => {
    if (!buttonClick02) setButtonClick02(true);
    else if (buttonClick02) setButtonClick02(false);
  };

  const onClickNumberingButton03 = () => {
    if (!buttonClick03) setButtonClick03(true);
    else if (buttonClick03) setButtonClick03(false);
  };

  const onClickNumberingButton04 = () => {
    if (!buttonClick04) setButtonClick04(true);
    else if (buttonClick04) setButtonClick04(false);
  };

  const onClickNumberingButton05 = () => {
    if (!buttonClick05) setButtonClick05(true);
    else if (buttonClick05) setButtonClick05(false);
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
              <div className="flex justify-center ">
                <div className="mr-1">
                  <MyButton
                    isClick={buttonClick01}
                    iconButton={true}
                    numbers={1}
                    onClick={onClickNumberingButton01}
                    mode="numbering"
                    type="button"
                  />
                </div>
                <div className="mr-1">
                  <MyButton
                    isClick={buttonClick02}
                    iconButton={true}
                    numbers={2}
                    onClick={onClickNumberingButton02}
                    mode="numbering"
                    type="button"
                  />
                </div>
                <div className="mr-1">
                  <MyButton
                    isClick={buttonClick03}
                    iconButton={true}
                    numbers={3}
                    onClick={onClickNumberingButton03}
                    mode="numbering"
                    type="button"
                  />
                </div>
                <div className="mr-1">
                  <MyButton
                    isClick={buttonClick04}
                    iconButton={true}
                    numbers={4}
                    onClick={onClickNumberingButton04}
                    mode="numbering"
                    type="button"
                  />
                </div>
                <div className="mr-1">
                  <MyButton
                    isClick={buttonClick05}
                    iconButton={true}
                    numbers={5}
                    onClick={onClickNumberingButton05}
                    mode="numbering"
                    type="button"
                  />
                </div>
              </div>
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
