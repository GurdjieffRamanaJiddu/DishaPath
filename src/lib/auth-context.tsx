"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import type { Role } from "@/lib/types";

interface AuthState {
  user: User | null;
  role: Role | null;
  /** For a parent this is their own uid; for a student it's their family's id. */
  familyId: string | null;
  /** For a student, their own id (== uid). Null for a parent. */
  studentId: string | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const Ctx = createContext<AuthState>({
  user: null,
  role: null,
  familyId: null,
  studentId: null,
  loading: true,
  logout: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    role: null,
    familyId: null,
    studentId: null,
    loading: true,
    logout: async () => {
      await signOut(auth);
    },
  });

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setState((s) => ({
          ...s,
          user: null,
          role: null,
          familyId: null,
          studentId: null,
          loading: false,
        }));
        return;
      }
      // Students sign in with a custom token carrying a `role` claim.
      const token = await user.getIdTokenResult();
      const claimRole = token.claims.role as Role | undefined;
      if (claimRole === "student") {
        setState((s) => ({
          ...s,
          user,
          role: "student",
          familyId: (token.claims.familyId as string) ?? null,
          studentId: user.uid,
          loading: false,
        }));
      } else {
        // Parents authenticate via phone OTP; their uid is the family id.
        setState((s) => ({
          ...s,
          user,
          role: "parent",
          familyId: user.uid,
          studentId: null,
          loading: false,
        }));
      }
    });
  }, []);

  return <Ctx.Provider value={state}>{children}</Ctx.Provider>;
}

export function useAuth() {
  return useContext(Ctx);
}
