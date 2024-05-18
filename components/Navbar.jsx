import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className=" justify-between bg-white bg-opacity-10 h-[80px]">
      <div className="w-[80vw] mx-auto  flex justify-between h-[100%]">
        <Link href="/" className="mt-4">
          <Image
            height={50}
            width={50}
            alt="logo"
            src="/cropped_image (1)/cropped_image (2).png"
          />
        </Link>
        <ul className="flex flex-row w-[30vw] justify-between mt-7 px-5 text-lg h-[100%]">
          <li>Post</li>
          <li>Rate</li>
          <li>Why Us</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
}
