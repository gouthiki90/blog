import { Noto_Sans_KR } from "next/font/google";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FaLayerGroup } from "react-icons/fa";
import { BiSolidEditAlt } from "react-icons/bi";
import { TbCircleDashedNumber1 } from "react-icons/tb";
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleDashedNumber2 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleDashedNumber3 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import { TbCircleDashedNumber4 } from "react-icons/tb";
import { TbCircleNumber4 } from "react-icons/tb";
import { TbCircleDashedNumber5 } from "react-icons/tb";
import { TbCircleNumber5 } from "react-icons/tb";
import { BiMessageSquareEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const notoSansKR = Noto_Sans_KR({ weight: "400", subsets: ["latin"] });

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconButton?: boolean;
  mode?:
    | "loading"
    | "add"
    | "default"
    | "delete"
    | "edit"
    | "write"
    | "numbering";
  numbers?: number;
  type?: "submit" | "button";
  isClick?: boolean;
}

export const MyButton: React.FC<IButton> = ({
  isClick,
  numbers,
  type,
  mode,
  iconButton,
  onClick,
  value,
  color,
}) => {
  let normalButtonClassName;
  normalButtonClassName = `flex border border-0 rounded-lg ${color} px-5 py-3 content-center flex-row items-center`;
  if (iconButton && mode === "numbering") {
    if (!isClick)
      normalButtonClassName = `flex border border-0 rounded-full bg-zinc-300 p-2 content-center flex-row items-center`;
    if (isClick)
      normalButtonClassName = `flex border border-0 rounded-full bg-zinc-950 p-2 content-center flex-row items-center`;
  }
  return (
    <>
      <div className="flex flex-row-reverse w-full my-5">
        <button className={normalButtonClassName} onClick={onClick} type={type}>
          {iconButton && mode === "loading" && (
            <CgSpinnerTwoAlt
              width={70}
              height={70}
              className="animate-spin text-zinc-50 mr-2"
            />
          )}
          {iconButton && mode === "delete" && (
            <AiFillDelete className="text-zinc-950 w-7 h-7" />
          )}
          {iconButton && mode === "edit" && (
            <BiMessageSquareEdit className="text-zinc-50 w-7 h-7" />
          )}
          {iconButton && mode === "write" && (
            <BiSolidEditAlt className="text-zinc-50 w-7 h-7" />
          )}

          {iconButton && mode === "numbering" && numbers === 1 && !isClick && (
            <TbCircleDashedNumber1 className="text-zinc-50 w-7 h-7" />
          )}
          {iconButton && mode === "numbering" && numbers === 1 && isClick && (
            <TbCircleNumber1 className="text-zinc-50 w-7 h-7" />
          )}

          {iconButton && mode === "numbering" && numbers === 2 && !isClick && (
            <TbCircleDashedNumber2 className="text-zinc-50 w-7 h-7" />
          )}
          {iconButton && mode === "numbering" && numbers === 2 && isClick && (
            <TbCircleNumber2 className="text-zinc-50 w-7 h-7" />
          )}

          {iconButton && mode === "numbering" && numbers === 3 && !isClick && (
            <TbCircleDashedNumber3 className="text-zinc-50 w-7 h-7" />
          )}
          {iconButton && mode === "numbering" && numbers === 3 && isClick && (
            <TbCircleNumber3 className="text-zinc-50 w-7 h-7" />
          )}

          {iconButton && mode === "numbering" && numbers === 4 && !isClick && (
            <TbCircleDashedNumber4 className="text-zinc-50 w-7 h-7" />
          )}
          {iconButton && mode === "numbering" && numbers === 4 && isClick && (
            <TbCircleNumber4 className="text-zinc-50 w-7 h-7" />
          )}

          {iconButton && mode === "numbering" && numbers === 5 && !isClick && (
            <TbCircleDashedNumber5 className="text-zinc-50 w-7 h-7" />
          )}
          {iconButton && mode === "numbering" && numbers === 5 && isClick && (
            <TbCircleNumber5 className="text-zinc-50 w-7 h-7" />
          )}
          <span className={`${notoSansKR.className} text-slate-50`}>
            {value}
          </span>
          {iconButton && mode === "add" && (
            <FaLayerGroup className="text-zinc-50 w-7 h-7" />
          )}
        </button>
      </div>
    </>
  );
};
