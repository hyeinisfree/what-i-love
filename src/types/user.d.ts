export interface User {
  id: string;
  username: string;
  email: string;
  // Add other user properties as needed
}

export interface UserProfile {
  id: string;
  avatar?: string;
  nickname: string;
  profileImage: string;
  following: number;
  followers: number;
  description: string;
  // Add other user profile properties as needed
}
