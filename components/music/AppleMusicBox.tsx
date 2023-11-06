import { NextPage } from "next";

export interface AppleBox {
  src?: string;
  height?: string;
}

export const AppleMusicBox: NextPage<AppleBox> = () => {
  return (
    <>
      <div className="flex mt-5">
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          height="170"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/kr/album/welcome-to-hell/1613170781?i=1613170927"
        ></iframe>
      </div>
    </>
  );
};
