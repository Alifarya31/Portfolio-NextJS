"use client";
import Image from "next/image";
import Link from "next/link";

// icons
import {
  RiGithubFill,
  RiLinkedinFill,
  RiYoutubeFill,
  RiInstagramFill,
} from "react-icons/ri";

const Header = () => {
  return (
    <header className="max_padd_container flexBetween absolute top-0 w-full">
      {/* logo */}
      <Link href={"/"} className="flexCenter py-3">
        <Image src={"./logo.svg"} alt="logo" height={99} width={99}></Image>
      </Link>
      {/* icons & buttons */}
      <SocialIcons />
    </header>
  );
};

const SocialIcons = () => {
  return (
    <div className="flex gap-4 lg:gap-3 pr-4">
      <Link
        href={"/"}
        className="bg-[#f700ff] p-2 text-tertiary text-lg rounded-full rounded-bl-none hover:bg-tertiary hover:text-white hover:rounded-bl-full hover:rounded-tl-none transition-all duration-500"
      >
        <RiInstagramFill />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/afinasalam/"}
        className="bg-[#08d9d6] p-2 text-tertiary text-lg rounded-full rounded-bl-none hover:bg-tertiary hover:text-white hover:rounded-bl-full hover:rounded-tl-none transition-all duration-500"
      >
        <RiLinkedinFill />
      </Link>

      <Link
        href={"/"}
        className="bg-[#bababa] p-2 text-tertiary text-lg rounded-full rounded-bl-none hover:bg-tertiary hover:text-white hover:rounded-bl-full hover:rounded-tl-none transition-all duration-500"
      >
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default Header;
