import api from "@/lib/axios";
import { ApiResponse, PaginatedResponse } from "@/types/api";

export class ApiService {
  // GET 요청
  static async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    const response = await api.get<T>(url, { params });
    return response.data;
  }

  // POST 요청
  static async post<T>(url: string, data?: any): Promise<T> {
    const response = await api.post<T>(url, data);
    return response.data;
  }

  // PUT 요청
  static async put<T>(url: string, data?: any): Promise<T> {
    const response = await api.put<T>(url, data);
    return response.data;
  }

  // DELETE 요청
  static async delete<T>(url: string): Promise<T> {
    const response = await api.delete<T>(url);
    return response.data;
  }

  // PATCH 요청
  static async patch<T>(url: string, data?: any): Promise<T> {
    const response = await api.patch<T>(url, data);
    return response.data;
  }
}
