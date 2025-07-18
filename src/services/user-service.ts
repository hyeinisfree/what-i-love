import { ApiService } from "@/services/api-service";
import { ApiResponse } from "@/types/api";
import { UserProfile } from "@/types/user";

export class UserService extends ApiService {
  // 프로필 조회
  static async getProfile(username: string): Promise<ApiResponse<UserProfile>> {
    return this.get<ApiResponse<UserProfile>>(`/profile/${username}`);
  }
}
