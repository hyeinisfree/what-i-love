import Image from "next/image";
import { UserProfile } from "@/types/user";

interface ProfileProps {
  profile: UserProfile;
}

export default function Profile({ profile }: ProfileProps) {
  const { profileImage, following, followers, nickname, description } = profile;
  return (
    <div className="font-s-core-dream -mt-10 flex flex-col gap-3 px-3.5">
      <div className="profile-top flex w-full items-end">
        <div className="z-10 size-20 overflow-hidden rounded-full">
          <Image
            src={profileImage}
            width={120}
            height={120}
            alt="avatar"
            className="object-cover"
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
        <span className="whitespace-pre-line text-xs">{description}</span>
      </div>
    </div>
  );
}
