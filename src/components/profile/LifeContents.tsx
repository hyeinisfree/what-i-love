import { LifeContent } from "@/types/user";
import Image from "next/image";

interface ContentProps {
  contents: LifeContent[];
}

export default function LifeContents({ contents }: ContentProps) {
  return (
    <div className="grid h-24 grid-cols-4 overflow-hidden">
      {contents.map((content) => (
        <Image
          src={content.thumbnail}
          alt={content.title}
          key={content.id}
          width={300}
          height={300}
          className="object-cover"
        ></Image>
      ))}
    </div>
  );
}
