import Image from "next/image";

interface ContentGridItem {
  id: string;
  name: string;
  // If image source was part of the item, it would be like: imageUrl: string;
}

interface ContentGridProps {
  items: ContentGridItem[];
}

export default function ContentGrid({ items }: ContentGridProps) {
  return (
    <div className="flex-grow p-0.5">
      <div className="grid grid-cols-3 gap-0.5">
        {items.map((item) => {
          return (
            <div key={item.id}>
              <Image
                src={`https://picsum.photos/id/${Math.floor(Math.random() * 80)}/300`}
                width={300}
                height={300}
                alt={item.name}
              ></Image>
            </div>
          );
        })}
      </div>
    </div>
  );
}
