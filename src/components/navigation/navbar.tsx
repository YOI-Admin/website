"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { setTheme } = useTheme();

  return (
    <header
      className={
        "px-4 py-4 pb-8 lg:px-6 h-83 flex items-center bg-gradient-to-b from-yoi-blue-4 from-50% dark:from-yoi-blue-1 to-transparent " +
        className
      }
    >
      <Link
        className="flex gap-2 items-center justify-center flex-none"
        href="/"
      >
        <div className="logo h-75 w-75">
          <Image
            src="/yoi_logo.png"
            className="h-75 w-75"
            alt="YOI Logo"
            width={75}
            height={75}
          />
          <span className="sr-only">The Youth Oceanic Initiative</span>
        </div>
        <div className="text-xl leading-5">
          <h1 className="m-0">Youth</h1>
          <h1 className="m-0">Oceanic</h1>
          <h1 className="m-0 mb-2 underline decoration-wavy decoration-2 underline-offset-4 decoration-yoi-blue-4">
            Initiative
          </h1>
        </div>
      </Link>
      <nav className="pr-6 ml-auto flex gap-4 sm:gap-6 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          className="text-m font-medium hover:underline underline-offset-4"
          href="about"
        >
          About Us
        </Link>
        <Link
          className="text-m font-medium hover:underline underline-offset-4"
          href="get-involved"
        >
          Get Involved
        </Link>
        <Link
          className="text-m font-medium hover:underline underline-offset-4"
          href="projects"
        >
          Our Projects
        </Link>
        <Link
          className="text-m font-medium hover:underline underline-offset-4"
          href="opportunities"
        >
          Opportunities
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;