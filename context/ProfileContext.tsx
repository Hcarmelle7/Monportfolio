// context/ProfileContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type ProfileType = "developer" | "embedded";

interface ProfileContextType {
  profile: ProfileType;
  setProfile: (profile: ProfileType) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<ProfileType>("developer");
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) throw new Error("Erreur de contexte");
  return context;
}