import { NextPage } from "next";
import { MyButton } from "./Button";
import { useState } from "react";

export const SeriesButtonList: NextPage = () => {
  /** 클릭 시 아이콘 변경 state */
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

  /** 아이콘 변경 boolean값 set */
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
    </>
  );
};
