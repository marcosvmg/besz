'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ParticleContextType {
  particleColor: string;
  setParticleColor: (color: string) => void;
}

const ParticleContext = createContext<ParticleContextType | undefined>(undefined);

export function ParticleProvider({ children }: { children: ReactNode }) {
  const [particleColor, setParticleColor] = useState('#54505a'); // cor default

  return (
    <ParticleContext.Provider value={{ particleColor, setParticleColor }}>
      {children}
    </ParticleContext.Provider>
  );
}

export function useParticleContext() {
  const context = useContext(ParticleContext);
  if (!context) throw new Error('useParticleContext must be used within a ParticleProvider');
  return context;
}
