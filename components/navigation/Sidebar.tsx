"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
import SignOutButton from "./SignOutButton";
import { useSidebarStore } from "@/app/store/SidebarStore";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Projects", href: "/project" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Application", href: "/application" },
  { label: "Help", href: "/help" },
  { label: "Feedback", href: "/feedback" },
  { label: "QnA", href: "/qna" },
];

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebarStore();
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  const renderLink = (href: string, label: string) => {
    const isActive = pathname === href;
    return (
      <Link
        key={href}
        href={href}
        onClick={() => setIsOpen(false)}
        className={`text-lg ${
          isActive
            ? "font-bold text-black dark:text-white"
            : "text-[#989898] dark:text-gray-400 font-medium"
        }`}
      >
        <div
          className={`px-3 py-2 rounded-md ${
            isActive
              ? "bg-[#E9E9E9] dark:bg-gray-800"
              : "hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          {label}
        </div>
      </Link>
    );
  };

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-gray-900 transition-transform duration-300 border-r border-gray-200 dark:border-gray-700 shadow-lg ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Image
        src="/devlogo.png"
        alt="DEVELOPERS' GUILD LOGO"
        width={200}
        height={200}
        className="my-8 ms-5 rounded-4xl"
      />
      {NAV_LINKS.map(({ href, label }) => renderLink(href, label))}
      <SignOutButton />
    </div>
  );
};

export default Sidebar;
