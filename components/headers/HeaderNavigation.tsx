import { NextPage } from "next";
import { BsArrowClockwise } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaDeleteLeft } from "react-icons/fa6";
import { Nanum_Myeongjo } from "next/font/google";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { MyButton } from "@components/button/Button";

const nanumMyengjo = Nanum_Myeongjo({ weight: "400", subsets: ["latin"] });

// interface initialSearchStateType {
//   searchText: string;
// }

// const initialSearchState: initialSearchStateType = {
//   searchText: "",
// };

// const {
//   handleSubmit,
//   control,
//   formState: { errors },
// } = useForm({
//   defaultValues: initialSearchState,
// });

export const HeaderNavigation: NextPage = () => {
  const submitSearch = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <div className="mb-20 p-2">
        <div className="flex flex-row-reverse items-center contetnt-center m-1">
          <div className="flex">
            <span
              className={`${nanumMyengjo.className} text-[#71717a] text-xs`}
            >
              2023년 10월 27일 5시 14분 업데이트
            </span>
            <BsArrowClockwise className="ml-1" />
          </div>

          <form action="post">
            <div className="flex mr-5 justify-center items-center contetnt-center bg-zinc-500 p-1 rounded-lg">
              <AiOutlineSearch className="w-5 h-5 mx-1 text-zinc-400" />
              <input
                type="text"
                name="searchText"
                placeholder="Search"
                className="w-72 bg-inherit outline-none text-zinc-50"
              />
              <button type="submit">
                <FaDeleteLeft className="w-5 h-5 mr-2 text-zinc-400" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
