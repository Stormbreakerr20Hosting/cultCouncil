"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPage(pathname);
  }, [pathname]);
  return (
    <nav className="absolute top-0 w-full z-50 flex justify-between items-center text-white px-12 max-sm:px-8 py-5">
      <Link href={"/"}>
        <Image
          alt="CCLogo"
          src={"/assets/images/CCLogo.png"}
          width={60}
          height={60}
        ></Image>
      </Link>
      <div className="">
        <ul className="flex justify-center gap-12 max-sm:text-base max-sm:gap-3 text-lg font-medium">
          <Link href={"/about"}>
            <li
              className={`cursor-pointer transition  hover:text-[#AC51D2] ${
                currentPage === "/about" ? "text-[#AC51D2]" : ""
              }`}
            >
              About
            </li>
          </Link>
          <Link href={"/clubs"}>
            <li
              className={`cursor-pointer transition max-sm:text-base hover:text-[#AC51D2] ${
                currentPage === "/clubs" ? "text-[#AC51D2]" : ""
              }`}
            >
              Clubs
            </li>
          </Link>
          <Link href={"/events"}>
            <li
              className={`cursor-pointer transition max-sm:text-base hover:text-[#AC51D2] ${
                currentPage === "/events" ? "text-[#AC51D2]" : ""
              }`}
            >
              Events
            </li>
          </Link>
          <Link href={"/core-team"}>
            <li
              className={`cursor-pointer transition max-sm:text-base hover:text-[#AC51D2] ${
                currentPage === "/core-team" ? "text-[#AC51D2]" : ""
              }`}
            >
              Team
            </li>
          </Link>
          <li>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Link
                className={`cursor-pointer transition max-sm:text-base hover:text-[#AC51D2]`}
                href="/sign-in"
              >
                Login
              </Link>
            </SignedOut>
          </li>
        </ul>
      </div>
    </nav>
  );
}
