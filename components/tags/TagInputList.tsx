import { LiaHashtagSolid } from "react-icons/lia";
import { Noto_Sans_KR } from "next/font/google";
const notoSansKR = Noto_Sans_KR({ weight: "400", subsets: ["latin"] });

export interface IInput extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconButton?: boolean;
}

export const TagList: React.FC<IInput> = ({}) => {
  const inputClassName = `w-16 border-none rounded-lg ml-1 font_size p-2 ${notoSansKR.className} outline-0`;
  return (
    <>
      <div className="flex m-5">
        <ol className="flex flex-warp">
          <li className="flex content-center flex-row items-center mr-2">
            <LiaHashtagSolid className="w-6 h-6" />
            <input
              type="text"
              className={inputClassName}
              id="tag-1"
              name="tag01"
            />
          </li>
          <li className="flex content-center flex-row items-center mr-2">
            <LiaHashtagSolid className="w-6 h-6" />
            <input
              type="text"
              className={inputClassName}
              id="tag-1"
              name="tag01"
            />
          </li>
          <li className="flex content-center flex-row items-center mr-2">
            <LiaHashtagSolid className="w-6 h-6" />
            <input
              type="text"
              className={inputClassName}
              id="tag-1"
              name="tag01"
            />
          </li>
          <li className="flex content-center flex-row items-center mr-2">
            <LiaHashtagSolid className="w-6 h-6" />
            <input
              type="text"
              className={inputClassName}
              id="tag-1"
              name="tag01"
            />
          </li>
        </ol>
      </div>
    </>
  );
};
