import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { useState } from "react";
import DetailHeader from "@components/DetailHeader";
import "../../app/globals.css";
import { MyButton } from "@components/button/Button";
import { TagList } from "@components/tags/TagInputList";
import { BiDotsHorizontal } from "react-icons/bi";
import { AddSeriseModal } from "@components/addModal/AddSeriseModal";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

const Upload: NextPage = () => {
  const [md, setMd] = useState<string | undefined>("# Hello World");
  const [saveValue, setSaveValue] = useState<string | undefined>("Publish");
  const [isLoading, setIsLoading] = useState<boolean | undefined>(false);
  const [modalVisible, setModalvisible] = useState<boolean | undefined>(false);

  const onClickSaveButton = () => {
    setSaveValue("Publishing!");
    setIsLoading(true);
  };

  const onClickAddButton = () => {
    setModalvisible(true);
  };

  return (
    <>
      <div className="flex justify-center flex-col">
        <DetailHeader />
        <div className="flex flex-col w-6/6 h-full m-10">
          <div className="flex justify-center content-center flex-row items-center">
            <div>
              <TagList />
            </div>
            <div className="flex">
              <MyButton
                onClick={onClickAddButton}
                mode="add"
                iconButton={true}
                value="시리즈만들기"
                color="bg-zinc-950"
                type="button"
              />
            </div>
          </div>
          <div className="flex justify-center m-2 content-center flex-row items-center">
            <BiDotsHorizontal className="h-28" />
          </div>
          <form action="post">
            <div className="flex justify-center">
              <MDEditor
                height={1200}
                className="w-4/6 h-full"
                value={md}
                onChange={setMd}
              />
            </div>
            <div className="flex mr-80">
              {!isLoading && (
                <MyButton
                  onClick={onClickSaveButton}
                  value={saveValue}
                  color="bg-zinc-950"
                  type="submit"
                />
              )}
            </div>

            <div className="flex mr-80">
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
          </form>

          {modalVisible && (
            <>
              <AddSeriseModal />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Upload;
