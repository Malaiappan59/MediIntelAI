"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlertTriangle,
  Blocks,
  BrainCircuit,
  LayoutDashboard,
  Settings,
  Wrench,
} from "lucide-react";
import { sidebarItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

const icons = {
  "/dashboard": LayoutDashboard,
  "/agents": Blocks,
  "/memory": BrainCircuit,
  "/tools": Wrench,
  "/alerts": AlertTriangle,
  "/settings": Settings,
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="page-shell glass-card flex h-full flex-col gap-8 border-white/80 p-6">
      <div className="space-y-2">
        <p className="section-title text-2xl font-semibold text-slate-900">MediIntel</p>
        <p className="text-sm text-slate-500">Enterprise healthcare operations</p>
      </div>

      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const Icon = icons[item.href];
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                isActive ? "bg-sky-600 text-white shadow-lg shadow-sky-200" : "text-slate-600 hover:bg-sky-50 hover:text-sky-700",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-[1.5rem] border border-sky-100 bg-sky-50/80 p-4 text-sm text-sky-800">
        Demo navigation only. Business workflows and SSO are intentionally deferred to later phases.
      </div>
    </aside>
  );
}

