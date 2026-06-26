import { type ReactNode, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { authClient } from "../lib/auth";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [neonUser, setNeonUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Check if user is already logged in when the app loads
  useEffect(() => {
    console.log("Mounted");
    async function loadUser() {
      try {
        // Retrieve the current session data
        const result = await authClient.getSession();

        // The '?' is optional chaining in JS
        if (result && result.data?.user) {
          setNeonUser(result.data.user);
        } else {
          setNeonUser(null);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setNeonUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user: neonUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
