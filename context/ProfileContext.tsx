// context/ProfileContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type ProfileType = "developer" | "embedded";

interface ProfileContextType {
  activeProfile: ProfileType;
  setActiveProfile: (profile: ProfileType) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [activeProfile, setActiveProfile] = useState<ProfileType>("developer");
  return (
    <ProfileContext.Provider value={{ activeProfile, setActiveProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) throw new Error("Erreur de contexte");
  return context;
}