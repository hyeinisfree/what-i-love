import { ApiService } from "@/services/api-service";
import { ApiResponse } from "@/types/api";
import { User } from "@/types/user";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export class AuthService extends ApiService {
  // 로그인
  static async login(data: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    return this.post<ApiResponse<LoginResponse>>("/auth/login", data);
  }

  // 회원가입
  static async register(data: RegisterRequest): Promise<ApiResponse<User>> {
    return this.post<ApiResponse<User>>("/auth/register", data);
  }

  // 로그아웃
  static async logout(): Promise<ApiResponse<null>> {
    return this.post<ApiResponse<null>>("/auth/logout");
  }

  // 토큰 갱신
  static async refreshToken(): Promise<ApiResponse<{ token: string }>> {
    return this.post<ApiResponse<{ token: string }>>("/auth/refresh");
  }
}
