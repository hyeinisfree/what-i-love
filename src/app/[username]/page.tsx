"use client";

import { use, useState, useEffect } from "react";
import ContentGrid from "@/components/profile/ContentGrid";
import LifeContents from "@/components/profile/LifeContents";
import Nav from "@/components/profile/Nav";
import Profile, { ProfileData } from "@/components/profile/Profile";
import avatar from "../../../public/images/avatar.svg";

export default function UserProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = use(params);
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [lifeContents, setLifeContents] = useState<any[]>([]);
  const [selectedContentType, setSelectedContentType] =
    useState<string>("movie");
  const [contentGridItems, setContentGridItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = async (type: string) => {
    setLoading(true);
    setError(null);
    try {
      const dummyProfile: ProfileData = {
        profileImage: avatar,
        following: 100,
        followers: 50,
        nickname: "행복한 만두",
        description: "살다보면 행복한 일 투성이~",
      };
      setProfile(dummyProfile);
      const dummyLifeContents = Array.from({ length: 4 }).map((_, index) => ({
        id: index + 1,
        type: type,
        name: `${type} item ${index + 1}`,
      }));
      setLifeContents(dummyLifeContents);
      const dummyContentGridItems = Array.from({ length: 15 }).map(
        (_, index) => ({
          id: index + 1,
          type: type,
          name: `${type} item ${index + 1}`,
        }),
      );
      setContentGridItems(dummyContentGridItems);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent(selectedContentType);
  }, [username, selectedContentType]);

  const handleNavClick = (type: string) => {
    setSelectedContentType(type);
  };

  return (
    <div className="flex h-full flex-col">
      <header className="h-50 border-b border-stone-100">
        <LifeContents contents={lifeContents} />
        {profile && <Profile profile={profile} />}
      </header>
      <Nav
        onNavClick={handleNavClick}
        selectedContentType={selectedContentType}
      />
      {loading && <div className="p-4 text-center">Loading...</div>}
      {error && (
        <div className="p-4 text-center text-red-500">Error: {error}</div>
      )}
      {!loading && !error && <ContentGrid items={contentGridItems} />}
    </div>
  );
}
