import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Hackathon {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  image: string;
  status: string
}

interface HackathonContextType {
  hackathons: Hackathon[];
  setHackathons: React.Dispatch<React.SetStateAction<Hackathon[]>>;
}

const HackathonContext = createContext<HackathonContextType | undefined>(undefined);

export const HackathonProvider = ({ children }: { children: ReactNode }) => {
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);

  return (
    <HackathonContext.Provider value={{ hackathons, setHackathons }}>
      {children}
    </HackathonContext.Provider>
  );
};

export const useHackathon = () => {
  const context = useContext(HackathonContext);
  if (!context) {
    throw new Error('useHackathon must be used within a HackathonProvider');
  }
  return context;
};
