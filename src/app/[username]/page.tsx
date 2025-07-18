"use client";

import { useParams } from "next/navigation";
import { useUserProfile } from "@/hooks/useUserProfile";
import Profile from "@/components/profile/Profile";
import Nav from "@/components/profile/Nav";
import LifeContents from "@/components/profile/LifeContents";

const UserProfilePage = () => {
  const params = useParams();
  const username = params.username as string;
  const { data, isLoading, error } = useUserProfile(username);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  const userProfile = data?.payload;

  return (
    <div className="p-4">
      {userProfile && <Profile profile={userProfile} />}
      <Nav />
      <LifeContents />
    </div>
  );
};

export default UserProfilePage;
