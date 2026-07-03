"use client";

import { Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

export function Topbar() {
  const { role, username, logout } = useAuth();

  return (
    <header className="flex items-center justify-between rounded-[1.75rem] border border-white/70 bg-white/80 px-5 py-4 shadow-panel backdrop-blur-xl">
      <div>
        <p className="text-sm text-slate-500">Welcome back</p>
        <p className="section-title text-xl font-semibold text-slate-900">{username ?? "Demo User"}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 md:inline-flex">
          {role ?? "Demo Role"}
        </div>
        <Button size="icon" variant="outline" type="button" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </Button>
        <Button type="button" variant="ghost" onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </header>
  );
}

