import { Clapperboard, Tv, Headphones, Book } from "lucide-react";

interface NavProps {
  onNavClick: (type: string) => void;
  selectedContentType: string;
}

export default function Nav({ onNavClick, selectedContentType }: NavProps) {
  const navs = [
    {
      title: "movie",
      icon: Clapperboard,
      link: "",
    },
    {
      title: "series",
      icon: Tv,
      link: "",
    },
    {
      title: "music",
      icon: Headphones,
      link: "",
    },
    {
      title: "book",
      icon: Book,
      link: "",
    },
  ];

  return (
    <nav className="sticky top-0 min-h-12 border-b border-stone-100 bg-white text-stone-500">
      <ul className="grid h-full cursor-pointer grid-cols-4">
        {navs.map((nav) => {
          const Icon = nav.icon;
          const isSelected = nav.title === selectedContentType;
          return (
            <li
              key={nav.title}
              onClick={() => onNavClick(nav.title)}
              className={`flex h-full items-center justify-center ${isSelected ? "border-b-2 border-stone-900 text-stone-900" : ""}`}
            >
              <Icon></Icon>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
