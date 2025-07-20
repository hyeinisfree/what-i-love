import api from "@/lib/axios";
import { ApiResponse } from "@/types/api";

// 모든 API 응답을 처리하는 중앙 함수
async function handleResponse<T>(response: { data: ApiResponse<T> }): Promise<T> {
  const apiResponse = response.data;
  if (apiResponse.success) {
    return apiResponse.data;
  }
  // API가 에러 메시지를 보냈을 경우
  throw new Error(apiResponse.message || "An unknown error occurred");
}

export class ApiService {
  static async get<T>(url:string, params?: Record<string, any>): Promise<T> {
    const response = await api.get<ApiResponse<T>>(url, { params });
    return handleResponse(response);
  }

  static async post<T>(url: string, data?: any): Promise<T> {
    const response = await api.post<ApiResponse<T>>(url, data);
    return handleResponse(response);
  }

  static async put<T>(url: string, data?: any): Promise<T> {
    const response = await api.put<ApiResponse<T>>(url, data);
    return handleResponse(response);
  }

  static async delete<T>(url: string): Promise<T> {
    const response = await api.delete<ApiResponse<T>>(url);
    return handleResponse(response);
  }

  static async patch<T>(url: string, data?: any): Promise<T> {
    const response = await api.patch<ApiResponse<T>>(url, data);
    return handleResponse(response);
  }
}
