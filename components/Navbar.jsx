import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" justify-between bg-[rgba(68,45,127,0.3)] h-[12vh]">
      <div className="w-[80vw] mx-auto  flex justify-between h-[100%]">
        <Link href="/" className="mt-[3vh] h-[6vh] w-[6vh]">
          <Image
            height={500}
            width={500}
            alt="logo"
            src="/cropped_image (1)/cropped_image (2).png"
          />
        </Link>
        <ul className="flex flex-row w-[30vw] justify-between px-5 text-[2vh] h-[35%] mt-[5vh] cursor-pointer">
          <Link href="/posts" className="px-5 py-0">
            Posts
          </Link>
          <li className="px-5 py-0">Rate</li>
          <li className=" px-3 py-0">Why Us</li>
          <li className=" px-5 py-0" id="test">
            Login
          </li>
        </ul>
      </div>
    </nav>
  );
}
