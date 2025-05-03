"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth") === "true";

    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [router]);

  return children;
}
