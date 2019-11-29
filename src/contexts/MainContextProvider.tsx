import { PersonStats, createDefaultStats } from "../StatsApi";
import { createContext } from "vm";
import Auth from "../auth";
import { useState } from "react";

export interface PersonStatsContextType {
  stats: PersonStats;
  updateStats: (changes: Partial<PersonStats>) => void;
}

export const AuthContext = createContext<PersonStatsContextType>(Auth.getCurrentUser());
export const StatsContext = createContext(createDefaultStats());

export const MainContextProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<PersonStats>(Auth.getCurrentUser());
  const [stats, setStats] = useState<PersonStats[]>(createDefaultStats());

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <StatsContext.Provider value={{ stats, setStats }} >
        {children}
      </StatsContext.Provider>
    </AuthContext.Provider>
  );
}