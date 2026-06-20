import { Link } from "react-router-dom";
import { SportShoe } from "lucide-react";
import { Button } from "./ui/Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <SportShoe className="text-accent" size={32} />
          <span className="font-goth italic text-2xl">TrainFlow AI</span>
        </Link>

        <nav>
          <>
            <Link to="/auth/sign-in">
              <Button>Sign In</Button>
            </Link>
          </>
        </nav>
      </div>
    </header>
  );
}
