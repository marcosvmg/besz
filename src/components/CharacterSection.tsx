'use client'

import Image from 'next/image'
import { Character } from '@/lib/characterData'
import clsx from 'clsx'
import { motion } from 'framer-motion'

interface CharacterSectionProps {
  character: Character
  index: number
  totalSections: number
}

export default function CharacterSection({
  character,
  index,
  totalSections,
}: CharacterSectionProps) {
  const {
    name,
    image,
    decorationTop,
    decorationBottom,
    subtitle,
    text,
    styles,
  } = character
  const isEven = index % 2 === 0
  const isLastSection = index === totalSections - 1

  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, amount: 0.3 },
  }

  return (
    <section className="w-full h-screen flex flex-col overflow-hidden">
      {/* HEADER */}
      <header
        className={`relative flex-shrink-0 py-2 px-4 sm:px-8 text-center text-2xl sm:text-4xl text-white ${styles.titleBorder}`}
        style={{ backgroundColor: styles.bg2 }}
      >
        <span style={{ fontFamily: 'var(--font-modak)' }}>{name}</span>

        <div className="absolute left-4 sm:left-8 bottom-0 translate-y-1/2 z-20 w-28 h-14 sm:w-40 sm:h-20">
          <img
            src={decorationTop}
            alt={`Decoração superior de ${name}`}
            className="w-full h-full object-contain"
          />
        </div>
      </header>

      {/* CONTEÚDO COM SCROLL SE NECESSÁRIO */}
      <div
        className="flex-1 w-full overflow-y-auto"
        style={{ backgroundColor: styles.bg }}
      >
        <div className="w-full min-h-full p-4 sm:p-6 flex items-center justify-center">
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div
              className={clsx('flex flex-col gap-4 text-center md:text-left', {
                'md:order-last': !isEven,
              })}
            >
              <motion.h2
                className="text-3xl sm:text-5xl font-semibold"
                style={{ color: styles.subtitleColor }}
                {...textAnimation}
              >
                {subtitle}
              </motion.h2>

              <motion.p
                className="text-base font-semibold"
                style={{ color: styles.quoteColor }}
                {...textAnimation}
                transition={{ ...textAnimation.transition, delay: 0.2 }}
              >
                ~ {name}
              </motion.p>

              <motion.p
                className="text-sm sm:text-base"
                style={{ color: styles.textColor }}
                {...textAnimation}
                transition={{ ...textAnimation.transition, delay: 0.4 }}
              >
                {text}
              </motion.p>
            </div>

            <motion.div
              className={clsx('flex justify-center items-center', {
                'md:order-first': !isEven,
              })}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[22rem] md:h-[22rem] overflow-hidden">
                <Image
                  src={image}
                  alt={`Imagem de ${name}`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        className="relative flex-shrink-0 py-2 px-4 sm:px-8 text-center flex items-center justify-center"
        style={{ backgroundColor: styles.bg2 }}
      >
        <div className="absolute right-4 sm:right-8 top-0 -translate-y-1/2 z-20 w-28 h-14 sm:w-40 sm:h-20">
          <img
            src={decorationBottom}
            alt={`Decoração inferior de ${name}`}
            className="w-full h-full object-contain"
          />
        </div>

        {isLastSection ? (
          <p className="font-poppins text-sm sm:text-base" style={{ color: styles.titleColorVar }}>
            feito com carinho &lt;3
          </p>
        ) : (
          <div className="text-2xl sm:text-4xl">&nbsp;</div>
        )}
      </footer>
    </section>
  )
}
