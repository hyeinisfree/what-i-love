"use client";

import { use, useState, useEffect } from "react";
import { useProfile } from "@/hooks/useProfile";
import Profile from "@/components/profile/Profile";
import Nav from "@/components/profile/Nav";
import LifeContents from "@/components/profile/LifeContents";
import ContentGrid from "@/components/profile/ContentGrid";
import { Category } from "@/types/content";

export default function UserProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = use(params);
  const { data: profileData, isLoading, error } = useProfile(username);

  const [selectedCategory, setSelectedCategory] = useState<Category>(
    Category.ALL,
  );
  const handleNavClick = (type: Category) => {
    setSelectedCategory(type);
  };

  const [contentGridItems, setContentGridItems] = useState<any[]>([]);

  const fetchContent = async (type: Category) => {
    const dummyContentGridItems = Array.from({ length: 40 }).map(
      (_, index) => ({
        id: index + 1,
        type: type,
        name: `${type} item ${index + 1}`,
      }),
    );
    setContentGridItems(dummyContentGridItems);
  };

  useEffect(() => {
    fetchContent(selectedCategory);
  }, [username, selectedCategory]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  if (!profileData) return <div>Profile not found</div>;

  return (
    <div className="flex flex-col">
      <header className="border-b border-stone-100 pb-3.5">
        <LifeContents contents={profileData.lifeContents} />
        <Profile profile={profileData.profile} />
      </header>
      {profileData.categories.length > 1 && (
        <Nav
          categories={profileData.categories}
          selectedCategory={selectedCategory}
          onNavClick={handleNavClick}
        />
      )}
      <ContentGrid items={contentGridItems} />
    </div>
  );
}
