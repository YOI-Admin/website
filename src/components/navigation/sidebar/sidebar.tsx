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
import {
  SheetTrigger,
  SheetClose,
  SheetContent,
  Sheet,
} from "@/components/ui/sheet";

type SidebarProps = {
  className?: string;
};

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { setTheme } = useTheme();

  return (
    <header
      className={
        "px-4 py-4 pb-8 lg:px-6 h-58 flex items-center bg-gradient-to-b from-yoi-blue-4 dark:from-yoi-blue-1 from-30% to-transparent to-75% w-screen" +
        className
      }
    >
      <Link
        className="flex gap-2 items-center justify-center flex-none"
        href="#"
      >
        <div className="logo h-50 w-50">
          <Image
            src="/yoi_logo.png"
            className="h-50 w-50"
            alt="YOI Logo"
            width={50}
            height={50}
          />
          <span className="sr-only">The Youth Oceanic Initiative</span>
        </div>
        <div className="text-m leading-4">
          <h1 className="m-0">Youth</h1>
          <h1 className="m-0">Oceanic</h1>
          <h1 className="m-0">Initiative</h1>
          <hr className="mt-0.5 border-2 hover:border-2" />
        </div>
      </Link>
      {/* collapsed sidebar, triggered by button */}
      <div className="w-full"></div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="rounded-full" size="icon" variant="ghost">
            <MenuIcon className="h-6 w-6 mr-3" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-72 bg-yoi-black text-yoi-white" side="right">
          <div className="flex h-16 items-center justify-between px-0 border-b border-gray-700">
            <Link
              className="flex gap-2 items-center justify-center flex-none"
              href="#"
            >
              <div className="logo h-50 w-50">
                <Image
                  src="/yoi_logo.png"
                  className="h-50 w-50"
                  alt="YOI Logo"
                  width={50}
                  height={50}
                />
                <span className="sr-only">The Youth Oceanic Initiative</span>
              </div>
              <div className="text-m leading-4">
                <h1 className="m-0">Youth</h1>
                <h1 className="m-0">Oceanic</h1>
                <h1 className="m-0">Initiative</h1>
                <hr className="mt-0.5 border-2 hover:border-2" />
              </div>
            </Link>
            <SheetClose asChild>
              <Button className="rounded-full" size="icon" variant="ghost">
                <XIcon className="h-6 w-6" />
                <span className="sr-only">Close navigation menu</span>
              </Button>
            </SheetClose>
          </div>
          <nav className="py-4">
            <Link
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 transition-colors"
              href="#"
            >
              <HomeIcon className="h-5 w-5" />
              Home
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 transition-colors"
              href="about"
            >
              <ContactIcon className="h-5 w-5" />
              About Us
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 transition-colors"
              href="get-involved"
            >
              <ViewIcon className="h-5 w-5" />
              Get Involved
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 transition-colors"
              href="projects"
            >
              <ShoppingCartIcon className="h-5 w-5" />
              Our Projects
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 transition-colors"
              href="opportunities"
            >
              <InfoIcon className="h-5 w-5" />
              Opportunities
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="default" className="w-full mt-6">
                  <div className="flex gap-3 px-4">
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span>Toggle theme</span>
                  </div>
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
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Sidebar;

function ContactIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function InfoIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function ViewIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}