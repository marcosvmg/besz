'use client';

import dynamic from 'next/dynamic';
import ReactFullpage from '@fullpage/react-fullpage';
import CharacterSection from '@/components/CharacterSection';
import { characters } from '@/lib/characterData';
import { useParticleContext } from '@/context/ParticleContext';

const CustomParticles = dynamic(() => import('@/components/CustomParticles'), { ssr: false });

const FullpageWrapper = () => {
  const { setParticleColor } = useParticleContext();

  const handleAfterLoad = (
    origin: { index: number },
    destination: { index: number }
  ) => {
    const newIndex = destination.index;
    const newColor = characters[newIndex]?.styles?.particleColor;
    if (newColor) setParticleColor(newColor);
  };

  return (
    <ReactFullpage
      licenseKey="gplv3-license"
      scrollingSpeed={1200}
      credits={{ enabled: false }}
      onLeave={() => {}}
      afterLoad={handleAfterLoad}
      render={() => (
        <ReactFullpage.Wrapper>
          {characters.map((character, index) => (
            <div className="section" key={character.name}>
              <CharacterSection
                character={character}
                index={index}
                totalSections={characters.length}
              />
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <FullpageWrapper />
      <CustomParticles />
    </main>
  );
}
