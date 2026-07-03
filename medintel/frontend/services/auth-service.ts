import { deleteCookie, getCookie, setCookie } from "@/lib/cookies";
import { ROLE_COOKIE, SESSION_COOKIE, USER_COOKIE } from "@/lib/constants";
import type { AuthState, LoginPayload } from "@/types/auth";

const STORAGE_KEY = "medintel-auth";

function base64UrlEncode(value: string) {
  if (typeof window === "undefined") {
    return value;
  }

  return window.btoa(value).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function createDemoToken(payload: LoginPayload) {
  const header = base64UrlEncode(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const body = base64UrlEncode(
    JSON.stringify({
      sub: payload.username,
      role: payload.role,
      mode: "demo",
      iat: Math.floor(Date.now() / 1000),
    }),
  );

  return `${header}.${body}.demo-signature`;
}

export async function login(payload: LoginPayload): Promise<AuthState> {
  const token = createDemoToken(payload);

  const nextState: AuthState = {
    isAuthenticated: true,
    role: payload.role,
    username: payload.username,
    token,
  };

  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
    setCookie(SESSION_COOKIE, token, { days: 1 });
    setCookie(ROLE_COOKIE, payload.role, { days: 1 });
    setCookie(USER_COOKIE, payload.username, { days: 1 });
  }

  return nextState;
}

export function logout() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(STORAGE_KEY);
  }

  deleteCookie(SESSION_COOKIE);
  deleteCookie(ROLE_COOKIE);
  deleteCookie(USER_COOKIE);
}

export function getStoredAuthState(): AuthState {
  if (typeof window === "undefined") {
    return {
      isAuthenticated: false,
      role: null,
      username: null,
      token: null,
    };
  }

  const storedValue = window.localStorage.getItem(STORAGE_KEY);

  if (storedValue) {
    try {
      return JSON.parse(storedValue) as AuthState;
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }

  const token = getCookie(SESSION_COOKIE);
  const role = getCookie(ROLE_COOKIE);
  const username = getCookie(USER_COOKIE);

  return {
    isAuthenticated: Boolean(token),
    role: role as AuthState["role"],
    username,
    token,
  };
}

