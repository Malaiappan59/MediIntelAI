export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? "MediIntel";
export const LOGIN_REDIRECT = process.env.NEXT_PUBLIC_LOGIN_REDIRECT ?? "/dashboard";
export const SESSION_COOKIE = "medintel_session";
export const ROLE_COOKIE = "medintel_role";
export const USER_COOKIE = "medintel_user";

export const roles = [
  "Inventory Manager",
  "Pharmacy Manager",
  "Procurement Manager",
  "Admin",
] as const;

export const sidebarItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/agents", label: "Agent" },
  { href: "/memory", label: "Memory" },
  { href: "/tools", label: "Tools" },
  { href: "/alerts", label: "Alerts" },
  { href: "/settings", label: "Settings" },
] as const;

