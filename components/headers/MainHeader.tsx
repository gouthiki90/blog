import React from "react";
import MenuList from "../MenuList";
import BlogLogo from "../ProfileLogo";

import { HeaderNavigation } from "./HeaderNavigation";

export default function MainHeader() {
  return (
    <>
      <HeaderNavigation />
      <div className="flex justify-center">
        <div className="flex flex-col mr-5">
          {/* 로고 이미지 */}
          <BlogLogo />

          <div className="flex justify-center">
            <h3 className="text-xl font-mono font-medium">캣러버</h3>
          </div>

          {/* 메뉴 */}
          <MenuList />
        </div>
      </div>
    </>
  );
}
