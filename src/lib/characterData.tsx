// src/lib/characterData.ts

export interface Character {
  name: string;
  image: string;
  decorationTop: string;
  decorationBottom: string;
  subtitle: string;
  text: string;
  animationType: 'fadeInUp' | 'bounceIn' | 'slideIn';
  styles: {
    bg: string;
    bg2: string;
    titleColor: string;
    titleBorder: string;
    titleColorVar: string;
    particleColor: string;
    subtitleColor: string;
    quoteColor: string;
    textColor: string;
    decorationColor: string;
  };
}

export const characters: Character[] = [
  {
    name: "Sunset Shimmer",
    image: "/images/sunset-shimmer.png",
    decorationTop: "/decorations/sunset-top.svg",
    decorationBottom: "/decorations/sunset-bottom.svg",
    subtitle: '“Meu passado não é hoje.”',
    text: "Hoje você é uma nova pessoa! Siga em frente com seus sonhos, eles irão te iluminar da mesma forma que me iluminaram! Parabéns Stela!",
    animationType: "fadeInUp",
    styles: {
      bg: "var(--color-sunset-bg)",
      bg2: "var(--color-sunset-bg2)",
      titleColor: "text-white",
      titleBorder: "text-stroke-sunset-s3",
      titleColorVar: "var(--color-sunset-s3)",
      particleColor: "#D59D02",
      subtitleColor: "var(--color-sunset-p3)",
      quoteColor: "var(--color-sunset-s3)",
      textColor: "var(--color-sunset-p2)",
      decorationColor: "var(--color-sunset-s3)",
    },
  },
  {
    name: "Nightmare Moon",
    image: "/images/nightmare-moon.png",
    decorationTop: "/decorations/moon-top.svg",
    decorationBottom: "/decorations/moon-bottom.svg",
    subtitle: '“A noite vai durar para sempre.”',
    text: "Apesar de ser vilã, também tenho objetivos, motivos e emoções, o que posso dizer para ti é: seja você mesma, não se limite ao que os outros pensam e faça-os de adoráveis súditos. Parabéns Stela!",
    animationType: "fadeInUp",
    styles: {
      bg: "var(--color-moon-bg)",
      bg2: "var(--color-moon-bg2)",
      titleColor: "text-white",
      titleBorder: "text-stroke-moon-s3",
      titleColorVar: "var(--color-moon-s3)",
      particleColor: "#3E50B4",
      subtitleColor: "var(--color-moon-s3)",
      quoteColor: "var(--color-moon-p1)",
      textColor: "var(--color-moon-s2)",
      decorationColor: "var(--color-moon-s3)",
    },
  },
  {
    name: "Rarity",
    image: "/images/rarity.png",
    decorationTop: "/decorations/rarity-top.svg",
    decorationBottom: "/decorations/rarity-bottom.svg",
    subtitle: '“Você é uma princesa?”',
    text: "Stela, você só pode ser uma princesa! Sempre vaidosa e com estilo, seríamos ótimas amigas! Gostaria de tecer uma vestido lindo para ti nesse dia tão especial. Parabéns Stela!",
    animationType: "fadeInUp",
    styles: {
      bg: "var(--color-rarity-bg)",
      bg2: "var(--color-rarity-bg2)",
      titleColor: "text-white",
      titleBorder: "text-stroke-rarity-s2",
      titleColorVar: "var(--color-rarity-s2)",
      particleColor: "#51BBE0",
      subtitleColor: "var(--color-rarity-t3)",
      quoteColor: "var(--color-rarity-p1)",
      textColor: "var(--color-rarity-t2)",
      decorationColor: "var(--color-rarity-s2)",
    },
  },
  {
    name: "Pinkie Pie",
    image: "/images/pinkie-pie.png",
    decorationTop: "/decorations/pinkie-top.svg",
    decorationBottom: "/decorations/pinkie-bottom.svg",
    subtitle: '“FEEEEEEEEESTA!!”',
    text: "NÃO ACREDITO! é hoje? É HOJE STELA, seu aniversário, que alegria! Não posso esperar pelo pós-aniversário. PARABÉNS STELA!",
    animationType: "bounceIn",
    styles: {
      bg: "var(--color-pink-bg)",
      bg2: "var(--color-pink-bg2)",
      titleColor: "text-white",
      titleBorder: "text-stroke-pink-p2",
      titleColorVar: "var(--color-pink-p2)",
      particleColor: "#E57EB3",
      subtitleColor: "var(--color-pink-s2)",
      quoteColor: "var(--color-pink-t1)",
      textColor: "var(--color-pink-s1)",
      decorationColor: "var(--color-pink-p2)",
    },
  },
  {
    name: "Rainbow Dash",
    image: "/images/rainbow-dash.png",
    decorationTop: "/decorations/rainbow-top.svg",
    decorationBottom: "/decorations/rainbow-bottom.svg",
    subtitle: '“Se eu vou cair, eu vou cair voando!”',
    text: "Sempre foque em ir para cima stela! Mas se for cair, que caia voando! Parabéns Stela!",
    animationType: "slideIn",
    styles: {
      bg: "var(--color-rainbow-bg)",
      bg2: "var(--color-rainbow-bg2)",
      titleColor: "text-white",
      titleBorder: "text-stroke-rainbow-p2",
      titleColorVar: "var(--color-rainbow-p2)",
      particleColor: "#77B0E0",
      subtitleColor: "var(--color-rainbow-t2)",
      quoteColor: "var(--color-rainbow-t3)",
      textColor: "var(--color-rainbow-s1)",
      decorationColor: "var(--color-rainbow-p2)",
    },
  },
  {
    name: "Marola",
    image: "/images/marola.png",
    decorationTop: "/decorations/marola-top.svg",
    decorationBottom: "/decorations/marola-bottom.svg",
    subtitle: '“Para sempre será My lady.”',
    text: "Gosto muitao de ser seu amigo, de fofocar, fumar zua pipipipopopo contigo, valeu por estar esse tempão me apoiando e por continuar existindo. Te amo muitao be parabens",
    animationType: "fadeInUp",
    styles: {
      bg: "var(--color-marola-bg)",
      bg2: "var(--color-marola-bg2)",
      titleColor: "text-white",
      titleBorder: "text-stroke-marola-p3",
      titleColorVar: "var(--color-marola-p3)",
      particleColor: "#5D8900",
      subtitleColor: "var(--color-marola-p2)",
      quoteColor: "var(--color-marola-s1)",
      textColor: "var(--color-marola-p3)",
      decorationColor: "var(--color-marola-p3)",
    },
  },
];