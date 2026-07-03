"use client";

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LOGIN_REDIRECT } from "@/lib/constants";
import { getStoredAuthState, login as authLogin, logout as authLogout } from "@/services/auth-service";
import type { AuthContextValue, AuthState, LoginPayload } from "@/types/auth";

const initialAuthState: AuthState = {
  isAuthenticated: false,
  role: null,
  username: null,
  token: null,
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>(initialAuthState);
  const router = useRouter();

  useEffect(() => {
    setAuthState(getStoredAuthState());
  }, []);

  const login = async (payload: LoginPayload) => {
    const nextState = await authLogin(payload);
    setAuthState(nextState);
    router.push(LOGIN_REDIRECT);
    router.refresh();
  };

  const logout = () => {
    authLogout();
    setAuthState(initialAuthState);
    router.push("/login");
    router.refresh();
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

