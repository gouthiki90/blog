import Link from "next/link";

export default function BlogLogo() {
  return (
    <>
      <Link href="/">
        <div className="m-10 flex justify-center">
          <div className="profile-image blog-logo" />
        </div>
      </Link>
    </>
  );
}
