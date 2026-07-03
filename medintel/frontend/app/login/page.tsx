"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ShieldPlus, Stethoscope, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/hooks/use-auth";
import { APP_NAME, roles } from "@/lib/constants";
import type { UserRole } from "@/types/auth";

export default function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("demo.user");
  const [password, setPassword] = useState("password");
  const [role, setRole] = useState<UserRole>("Admin");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = searchParams.get("redirect") ?? "/dashboard";
    }
  }, [isAuthenticated, searchParams]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await login({ username, password, role });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-medical-gradient">
      <div className="absolute inset-0 healthcare-grid opacity-70" />
      <div className="absolute left-[-120px] top-[-80px] h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-80px] h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-10 px-6 py-12 lg:flex-row lg:items-center">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl space-y-6"
        >
          <div className="inline-flex items-center rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
            <ShieldPlus className="mr-2 h-4 w-4" />
            Secure healthcare operations foundation
          </div>
          <div className="space-y-4">
            <p className="section-title text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              {APP_NAME}
            </p>
            <p className="max-w-lg text-lg leading-8 text-slate-600">
              A hospital-ready digital workspace scaffold for inventory, pharmacy, procurement, and administrative teams.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="glass-card border-sky-100">
              <CardContent className="p-5">
                <Stethoscope className="mb-4 h-8 w-8 text-sky-600" />
                <p className="font-semibold text-slate-900">Clinical-grade visual language</p>
                <p className="mt-2 text-sm text-slate-600">White and azure surfaces tailored for enterprise hospital workflows.</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-sky-100">
              <CardContent className="p-5">
                <UserRound className="mb-4 h-8 w-8 text-sky-600" />
                <p className="font-semibold text-slate-900">Role-aware shell</p>
                <p className="mt-2 text-sm text-slate-600">Demo-mode access for architecture review before real SSO integration.</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="w-full max-w-md"
        >
          <Card className="glass-card page-shell border-white/80">
            <CardHeader className="space-y-3">
              <CardTitle>Sign in to MediIntel</CardTitle>
              <CardDescription>Use demo mode to access the application shell. Production uses enterprise SSO.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    autoComplete="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role (Demo Mode)</Label>
                  <Select value={role} onValueChange={(value) => setRole(value as UserRole)}>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-slate-500">Demo Mode. Production uses SSO.</p>
                </div>

                <Button className="w-full" size="lg" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Signing in..." : "Login"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </main>
  );
}

