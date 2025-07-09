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
    <section className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <header
        className={`relative py-6 px-4 sm:px-8 text-center text-4xl md:text-6xl text-white ${styles.titleBorder}`}
        style={{ backgroundColor: styles.bg2 }}
      >
        <span style={{ fontFamily: 'var(--font-modak)' }}>{name}</span>

        {/* Decoration TOP - SVG via <img> - tamanho dobrado */}
        <div className="absolute left-4 sm:left-8 bottom-0 translate-y-1/2 z-20 w-40 h-20 sm:w-56 sm:h-28">
          <img
            src={decorationTop}
            alt={`Decoração superior de ${name}`}
            className="w-full h-full object-contain"
          />
        </div>
      </header>

      <div
        className="w-full p-4 sm:p-8 flex flex-grow items-center"
        style={{ backgroundColor: styles.bg }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div
            className={clsx('flex flex-col gap-6 text-center md:text-left', {
              'md:order-last': !isEven,
            })}
          >
            <motion.h2
              className="text-6xl lg:text-8xl font-semibold"
              style={{ color: styles.subtitleColor }}
              {...textAnimation}
            >
              {subtitle}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl font-semibold"
              style={{ color: styles.quoteColor }}
              {...textAnimation}
              transition={{ ...textAnimation.transition, delay: 0.2 }}
            >
              ~ {name}
            </motion.p>

            <motion.p
              className="text-base md:text-lg"
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
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] overflow-hidden">
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

      <footer
        className="relative py-6 px-4 sm:px-8 text-center flex items-center justify-center"
        style={{ backgroundColor: styles.bg2 }}
      >
        {/* Decoration BOTTOM - SVG via <img> - tamanho dobrado */}
        <div className="absolute right-4 sm:right-8 top-0 -translate-y-1/2 z-20 w-40 h-20 sm:w-56 sm:h-28">
          <img
            src={decorationBottom}
            alt={`Decoração inferior de ${name}`}
            className="w-full h-full object-contain"
          />
        </div>

        {isLastSection ? (
          <p className="font-poppins text-xl" style={{ color: styles.titleColorVar }}>
            feito com carinho &lt;3
          </p>
        ) : (
          <div className="text-4xl md:text-6xl">&nbsp;</div>
        )}
      </footer>
    </section>
  )
}
