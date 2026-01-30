// src/lib/auth.ts
import api from './api';
import Cookies from 'js-cookie';
import { AuthResponse, LoginCredentials, RegisterCredentials, User } from '../types/index';

export const authApi = {
  // Register
  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/register', credentials);
    const { accessToken, user } = response.data;
    
    // Save token
    Cookies.set('accessToken', accessToken, { expires: 7 });
    
    return response.data;
  },

  // Login
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/login', credentials);
    const { accessToken, user } = response.data;
    
    // Save token
    Cookies.set('accessToken', accessToken, { expires: 7 });
    
    return response.data;
  },

  // Logout
  logout(): void {
    Cookies.remove('accessToken');
  },

  // Get Profile
  async getProfile(): Promise<User> {
    const response = await api.get<User>('/auth/profile');
    return response.data;
  },

  // Check if logged in
  isAuthenticated(): boolean {
    return !!Cookies.get('accessToken');
  },

  // Get token
  getToken(): string | undefined {
    return Cookies.get('accessToken');
  },
};