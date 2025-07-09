// src/components/LenisProvider.tsx
'use client'

import { ReactLenis } from 'lenis/react'
import React from 'react'

interface LenisProviderProps {
  children: React.ReactNode;
}

function LenisProvider({ children }: LenisProviderProps) {
  return (
    // A opção 'smoothTouch' foi removida daqui
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  )
}

export default LenisProvider