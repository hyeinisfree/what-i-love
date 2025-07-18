import { useQuery } from "@tanstack/react-query";
import { UserService } from "@/services/user-service";
import { ApiResponse } from "@/types/api";
import { UserProfile } from "@/types/user";

export const useUserProfile = (username: string) => {
  return useQuery<ApiResponse<UserProfile>, Error>({
    queryKey: ["userProfile", username],
    queryFn: () => UserService.getProfile(username),
  });
};