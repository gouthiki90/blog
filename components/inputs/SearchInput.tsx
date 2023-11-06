import { NextPage } from "next";
import { AiOutlineSearch } from "react-icons/ai";
import { FaDeleteLeft } from "react-icons/fa6";

export const SearchInput: NextPage = () => {
  return (
    <>
      <form action="post">
        <div className="flex mr-5 justify-center items-center contetnt-center bg-zinc-300 p-1 rounded-lg">
          <AiOutlineSearch className="w-5 h-5 mx-1 text-zinc-400" />
          <input
            type="text"
            name="searchText"
            placeholder="Search"
            className="w-72 bg-inherit outline-none text-zinc-900"
          />
          <button>
            <FaDeleteLeft className="w-5 h-5 mr-2 text-zinc-400" />
          </button>
        </div>
      </form>
    </>
  );
};
