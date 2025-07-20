export interface User {
  id: number;
  username: string;
  email: string;
  // Add other user properties as needed
}

export interface UserProfile {
  id: number;
  nickname: string;
  description: string;
  profileImage: string;
  following: number;
  followers: number;
  // Add other user profile properties as needed
}

export interface LifeContent {
  id: number;
  type: Category;
  title: string;
  thumbnail: string;
}

export interface UserCategory {
  id: number;
  type: Category;
  order: number;
}
