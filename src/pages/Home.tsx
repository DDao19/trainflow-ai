import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const { user, loading } = useAuth();
  console.log("Home Page", user);
  // If user is Logged In, redirect to Profile Page
  if (user && !loading) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
