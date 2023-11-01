import { Noto_Sans_KR } from "next/font/google";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { BiListPlus } from "react-icons/bi";

const notoSansKR = Noto_Sans_KR({ weight: "400", subsets: ["latin"] });

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconButton?: boolean;
  mode?: "loading" | "add";
  type?: "submit" | "button";
}

export const MyButton: React.FC<IButton> = ({
  type,
  mode,
  iconButton,
  onClick,
  value,
  color,
}) => {
  return (
    <>
      <div className="flex flex-row-reverse w-full my-5">
        <button
          className={`flex border border-0 rounded-lg ${color} px-5 py-3 content-center flex-row items-center`}
          onClick={onClick}
          type={type}
        >
          {iconButton && mode === "loading" && (
            <CgSpinnerTwoAlt
              width={70}
              height={70}
              className="animate-spin text-zinc-50 mr-2"
            />
          )}
          <span className={`${notoSansKR.className} text-slate-50`}>
            {value}
          </span>
          {iconButton && mode === "add" && (
            <BiListPlus className="text-zinc-50 ml-2 w-6 h-6" />
          )}
        </button>
      </div>
    </>
  );
};
