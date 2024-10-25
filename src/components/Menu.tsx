"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt="Menu"
        width={28}
        height={28}
        className="cursor-pointer"
        aria-label="Menu"
        title="Menu"
        onClick={() => setIsOpen((previousState) => !previousState)}
      />
      {isOpen && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href={"/"}>Home Page</Link>
          <Link href={"/"}>Shop</Link>
          <Link href={"/"}>Deals</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>Logout</Link>
          <Link href={"/"}>Cart(1)</Link>
        </div>
      )}
    </div>
  );
}
