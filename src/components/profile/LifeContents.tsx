import Image from "next/image";

interface LifeContentItem {
  id: string | number;
  name: string;
  // Add other properties if they exist in your content objects
}

interface ContentProps {
  contents: LifeContentItem[];
}

export default function LifeContents({ contents }: ContentProps) {
  return (
    <div className="grid h-24 grid-cols-4 overflow-hidden">
      {contents.map((content) => (
        <Image
          src={`https://picsum.photos/id/${content.id}/200`}
          alt={content.name}
          key={content.id}
          width={300}
          height={300}
          className="object-cover"
        ></Image>
      ))}
    </div>
  );
}
