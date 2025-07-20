import { ApiService } from "@/services/api-service";
import { LifeContent, UserCategory, UserProfile } from "@/types/user";

export interface ProfileResponse {
  profile: UserProfile;
  lifeContents: LifeContent[];
  categories: UserCategory[];
}

export class ProfileService extends ApiService {
  // 프로필 조회
  static async getProfile(username: string): Promise<ProfileResponse> {
    return this.get<ProfileResponse>(`/profile/${username}`);
  }
}
