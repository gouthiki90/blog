import Link from "next/link";

export default function BlogLogo() {
  return (
    <>
      <div className="m-10 flex justify-center">
        <Link href="/">
          <div className="profile-image blog-logo" />
        </Link>
      </div>
    </>
  );
}
