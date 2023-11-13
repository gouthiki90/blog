"use client";
import { useState } from "react";
import { ListButton } from "@components/button/ListButton";

export default function MenuButtonView() {
  const [isClickListButton01, setIsClickButton01] = useState<
    boolean | undefined
  >(false);
  const [isClickListButton02, setIsClickButton02] = useState<
    boolean | undefined
  >(false);
  const [isClickListButton03, setIsClickButton03] = useState<
    boolean | undefined
  >(false);

  const onClick01 = () => {
    if (isClickListButton01) setIsClickButton01(false);
    if (!isClickListButton01) setIsClickButton01(true);
  };

  const onClick02 = () => {
    if (isClickListButton02) setIsClickButton02(false);
    if (!isClickListButton02) setIsClickButton02(true);
  };

  const onClick03 = () => {
    if (isClickListButton03) setIsClickButton03(false);
    if (!isClickListButton03) setIsClickButton03(true);
  };

  return (
    <>
      <div className="flex justify-evenly m-20">
        <ListButton
          value="회고"
          onClick={onClick01}
          isClick={isClickListButton01}
        />
        <ListButton
          value="기술"
          onClick={onClick02}
          isClick={isClickListButton02}
        />
        <ListButton
          value="사설"
          onClick={onClick03}
          isClick={isClickListButton03}
        />
      </div>
    </>
  );
}
