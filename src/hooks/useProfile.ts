import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ProfileService, ProfileResponse } from "@/services/profile-service";

// 프로필 조회
export const useProfile = (username: string) => {
  return useQuery<ProfileResponse, Error>({
    queryKey: ["userProfile", username],
    queryFn: () => ProfileService.getProfile(username),
  });
};
