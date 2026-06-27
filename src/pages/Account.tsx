import { useParams } from "react-router-dom";
import { AccountView } from "@neondatabase/neon-js/auth/react";

export default function Account() {
  const { params } = useParams();

  return (
    <div className="px-12 py-12">
      <AccountView pathname={params} />
    </div>
  );
}
