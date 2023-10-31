import { NextPage } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const notoSansKR = Noto_Sans_KR({ weight: "400", subsets: ["latin"] });

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonWrapperClassName?: string;
  iconButton?: boolean;
  mode?: "default" | "icon" | "resetStyle" | "outline";
}

export const SaveButton: React.FC<IButton> = ({
  iconButton,
  onClick,
  value,
  color,
}) => {
  return (
    <>
      <div className="flex flex-row-reverse w-5/6 my-5">
        <button
          className={`flex border border-0 rounded-lg ${color} px-5 py-3 content-center flex-row items-center`}
          onClick={onClick}
        >
          {iconButton && (
            <CgSpinnerTwoAlt
              width={70}
              height={70}
              className="animate-spin text-zinc-50 mr-2"
            />
          )}
          <span className={`${notoSansKR.className} text-slate-50`}>
            {value}
          </span>
        </button>
      </div>
    </>
  );
};
