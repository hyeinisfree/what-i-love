"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, SquarePlus, UsersRound, UserRound } from "lucide-react";

export const BottomNavBar = () => {
  const pathname = usePathname();
  const links = [
    {
      title: "Home",
      icon: Home,
      link: "/",
    },
    {
      title: "Search",
      icon: Search,
      link: "/search",
    },
    {
      title: "Post",
      icon: SquarePlus,
      link: "/write",
    },
    {
      title: "Friends",
      icon: UsersRound,
      link: "/friends",
    },
    {
      title: "My",
      icon: UserRound,
      link: "/mypage",
    },
  ];

  return (
    <nav className="min-h-18 font-montserrat flex items-center justify-center border-t border-stone-100">
      <ul className="grid h-full w-full cursor-pointer grid-cols-5">
        {links.map((item, index) => {
          const isActive = pathname === item.link;
          const Icon = item.icon;

          return (
            <li key={index} className="h-full">
              <Link
                href={item.link}
                className="flex h-full flex-col items-center justify-center gap-1 p-2"
              >
                <Icon
                  className="size-6 text-stone-600"
                  fill={isActive ? "currentColor" : "none"}
                  strokeWidth={isActive ? 0 : 2}
                />
                <span className="text-xs">{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
