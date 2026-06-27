import { RedirectToSignIn, SignedIn } from "@neondatabase/neon-js/auth/react";
import { useAuth } from "../hooks/useAuth";

const goalOptions = [
  { value: "bulk", label: "Build Muscle (Bulk)" },
  { value: "cut", label: "Lose Fat (Cut)" },
  { value: "recomp", label: "Body Recomposition" },
  { value: "strength", label: "Body Strength" },
  { value: "stamina", label: "Improve Stamina" },
];

const experienceOptions = [
  { value: "beginner", label: "Beginner (0-1 years)" },
  { value: "Intermidiate", label: "Intermediate (1-3 years)" },
  { value: "Advanced", label: "Adcanded (3+ years)" },
];

const daysOptions = [
  { value: "2", label: "2 days per week" },
  { value: "3", label: "3 days per week" },
  { value: "4", label: "4 days per week" },
  { value: "5", label: "5 days per week" },
  { value: "6", label: "6 days per week" },
];

const sessionOptions = [
  { value: "30", lable: "30 minutes" },
  { value: "45", lable: "45 minutes" },
  { value: "60", lable: "60 minutes" },
  { value: "90", lable: "90 minutes" },
];

const equipmentOptions = [
  { value: "full_gym", label: "Full Gym Access" },
  { value: "home", label: "Home Gym" },
  { value: "kettle_bell", label: "Kettle Bell" },
];

const splitOptions = [
  { value: "full_body", label: "Full Body" },
  { value: "upper_lower", label: "Upper/Lower Split" },
  { value: "ppl", label: "Push/Pull/Legs Split" },
  { value: "custom", label: "Let AI Decide" },
];

export default function Onboarding() {
  const { user } = useAuth();

  if (!user) {
    return <RedirectToSignIn />;
  }

  return (
    <SignedIn>
      <div className="min-h-screen pt-24 pb-12 px-6">
        <div className="max-w-xl mx-auto">
          <h1>Onboarding</h1>
          {/* Progress Indicator */}

          {/* Step1: Questionaire */}

          {/* Step2: Generating */}
        </div>
      </div>
    </SignedIn>
  );
}
