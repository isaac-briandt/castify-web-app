"use client"

import { sidebarLinks } from "@/constants";
import { Logo } from "@/constants/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LeftSideBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className="left_sidebar min-h-screen">
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex gap-1 items-center pb-10 max-lg:justify-center"
        >
          <Image src={Logo} alt="logo" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            Castify
          </h1>
        </Link>
        {sidebarLinks.map(({ route, label, icon, alt }) => {

          const isActive = pathname === route || pathname.startsWith(`${route}/`)

          return (
            <Link
              className={cn("flex gap-3 items-center py-4 max-lg:px-4 lg:justify-start", {
                'bg-nav-focus border-r-4 border-orange-1': isActive
              })}
              key={label}
              href={route}
            >
              <Image src={icon} alt={alt} width={23} height={25} />
              <p>{label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSideBar;
