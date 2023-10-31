import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { useState } from "react";
import DetailHeader from "@components/DetailHeader";
import "../../app/globals.css";
import { SaveButton } from "@components/button/Button";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

const Upload: NextPage = () => {
  const [md, setMd] = useState<string | undefined>("# Hello World");
  const [saveValue, setSaveValue] = useState<string | undefined>("Publish");
  const [isLoading, setIsLoading] = useState<boolean | undefined>(false);
  const onClick = () => {
    setSaveValue("Publishing!");
    setIsLoading(true);
  };

  return (
    <>
      <div className="flex justify-center flex-col">
        <DetailHeader />
        <div className="flex flex-col w-6/6 h-full m-10">
          <div className="flex justify-center">
            <MDEditor
              height={1200}
              className="w-4/6 h-full"
              value={md}
              onChange={setMd}
            />
          </div>
          {!isLoading && (
            <SaveButton
              onClick={onClick}
              value={saveValue}
              color="bg-zinc-950"
            />
          )}

          {isLoading && (
            <SaveButton
              iconButton={true}
              onClick={onClick}
              value={saveValue}
              color="bg-zinc-950"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Upload;
