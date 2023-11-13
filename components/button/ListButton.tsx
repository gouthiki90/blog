import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR400 = Noto_Sans_KR({ weight: "400", subsets: ["latin"] });
const notoSansKR700 = Noto_Sans_KR({ weight: "700", subsets: ["latin"] });

export interface IListButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "button";
  isClick?: boolean;
}

const wapperClass = "";

export const ListButton: React.FC<IListButton> = ({
  onClick,
  value,
  isClick,
}) => {
  return (
    <>
      <div className={wapperClass}>
        <ul className="">
          <li className="flex align-middle items-center">
            <button onClick={onClick}>
              {isClick && (
                <AiFillCaretRight className="mr-1 text-lg load-more-icon" />
              )}
              {!isClick && <AiFillCaretDown className="mr-1 text-lg" />}
            </button>
            <span className={`text-lg ${notoSansKR400}`}>{value}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
