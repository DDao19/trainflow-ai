import { useAuth } from "../hooks/useAuth";

export default function Onboarding() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Onboarding Page</h1>
    </div>
  );
}
