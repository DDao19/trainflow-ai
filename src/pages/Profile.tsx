import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const { user, loading } = useAuth();
  const plan = false;

  // Redirect to sign in if NO Logged In User
  if (!user && loading) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  if (!plan) {
    return <Navigate to="/onboarding" replace />;
  }

  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
}
