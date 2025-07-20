import { Clapperboard, Tv, Headphones, Book, LayoutGrid } from "lucide-react";
import { UserCategory } from "@/types/user";
import { Category } from "@/types/content";

interface NavProps {
  categories: UserCategory[];
  onNavClick: (type: Category) => void;
  selectedCategory: Category;
}

export default function Nav({
  categories,
  selectedCategory,
  onNavClick,
}: NavProps) {
  const navs = {
    [Category.ALL]: {
      icon: LayoutGrid,
      title: "전체",
    },
    [Category.MOVIE]: {
      icon: Clapperboard,
      title: "영화",
    },
    [Category.SERIES]: {
      icon: Tv,
      title: "시리즈",
    },
    [Category.MUSIC]: {
      icon: Headphones,
      title: "음악",
    },
    [Category.BOOK]: {
      icon: Book,
      title: "책",
    },
  };

  const allCategory: UserCategory = { id: -1, type: Category.ALL, order: 0 };
  const navCategories = [allCategory, ...categories];

  return (
    <nav className="sticky top-0 flex min-h-12 border-b border-stone-100 bg-white text-stone-500">
      <ul
        className="grid flex-grow cursor-pointer"
        style={{ gridTemplateColumns: `repeat(${navCategories.length}, 1fr)` }}
      >
        {navCategories.map((category) => {
          const nav = navs[category.type as Category];

          const Icon = nav.icon;
          const isSelected = category.type === selectedCategory;
          return (
            <li
              key={category.type}
              onClick={() => onNavClick(category.type)}
              className={`flex items-center justify-center ${isSelected ? "border-b-2 border-stone-900 text-stone-900" : ""}`}
            >
              <Icon></Icon>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
