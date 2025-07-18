import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiService } from "@/services/api-service";

export const useApi = <T>(
  key: string[],
  url: string,
  params?: Record<string, any>,
  options?: any,
) => {
  return useQuery({
    queryKey: key,
    queryFn: () => ApiService.get<T>(url, params),
    ...options,
  });
};

export const useApiMutation = <T, V>(
  url: string,
  method: "post" | "put" | "delete" | "patch" = "post",
  options?: any,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: V) => {
      switch (method) {
        case "post":
          return ApiService.post<T>(url, data);
        case "put":
          return ApiService.put<T>(url, data);
        case "patch":
          return ApiService.patch<T>(url, data);
        case "delete":
          return ApiService.delete<T>(url);
        default:
          return ApiService.post<T>(url, data);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    ...options,
  });
};
