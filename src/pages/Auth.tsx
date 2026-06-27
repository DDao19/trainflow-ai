import { AuthView } from "@neondatabase/neon-js/auth/react/ui";
import { Navigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Auth() {
  const { user } = useAuth();
  const { pathname } = useParams();

  return (
    <div className="relative min-h-screen bg-background flex items-center justify-center px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-125 w-125 rounded-full bg-blue-500/25 blur-[140px]" />
      </div>

      <div className="max-w-md w-full relative z-10 flex justify-center">
        {/* <AuthView pathname={pathname} /> */}
        {user ? <Navigate to="/profile" /> : <AuthView pathname={pathname} />}
      </div>
    </div>
  );
}
