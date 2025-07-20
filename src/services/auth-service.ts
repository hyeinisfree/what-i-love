import { ApiService } from "@/services/api-service";
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
  static async login(data: LoginRequest): Promise<LoginResponse> {
    return this.post<LoginResponse>("/auth/login", data);
  }

  // 회원가입
  static async register(data: RegisterRequest): Promise<User> {
    return this.post<User>("/auth/register", data);
  }

  // 로그아웃
  static async logout(): Promise<null> {
    return this.post<null>("/auth/logout");
  }

  // 토큰 갱신
  static async refreshToken(): Promise<{ token: string }> {
    return this.post<{ token: string }>("/auth/refresh");
  }
}
