import Image from "next/image";

export interface ProfileData {
  profileImage: string;
  following: number;
  followers: number;
  nickname: string;
  description: string;
}

interface ProfileProps {
  profile: ProfileData;
}

export default function Profile({ profile }: ProfileProps) {
  const { profileImage, following, followers, nickname, description } = profile;
  return (
    <div className="font-s-core-dream relative -top-10 flex flex-col gap-3 px-3.5">
      <div className="flex items-end">
        <div className="z-10 size-20 rounded-full">
          <Image
            src={profileImage}
            width={120}
            height={120}
            alt="avatar"
          ></Image>
        </div>
        <div className="flex divide-x divide-stone-200 pb-2 *:px-2">
          <span className="flex gap-2">
            <p className="text-[0.7rem]">팔로워</p>
            <p className="text-xs font-medium">{followers}</p>
          </span>
          <span className="flex gap-2">
            <p className="text-[0.7rem]">팔로잉</p>
            <p className="text-xs font-medium">{following}</p>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1 px-2">
        <span className="text-sm">{nickname}</span>
        <span className="text-xs">{description}</span>
      </div>
    </div>
  );
}
