import Image from "next/image";

interface ContentProps {
  contents: any[];
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
