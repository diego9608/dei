'use client'

import { motion } from 'framer-motion'

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Premium gradient mesh background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-30"
          animate={{
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="grad1" cx="30%" cy="30%" r="60%">
                <stop offset="0%" style={{stopColor:'rgb(107, 70, 193)', stopOpacity:0.15}} />
                <stop offset="50%" style={{stopColor:'rgb(168, 85, 247)', stopOpacity:0.08}} />
                <stop offset="100%" style={{stopColor:'rgb(245, 158, 11)', stopOpacity:0.05}} />
              </radialGradient>
              <radialGradient id="grad2" cx="70%" cy="70%" r="60%">
                <stop offset="0%" style={{stopColor:'rgb(245, 158, 11)', stopOpacity:0.15}} />
                <stop offset="50%" style={{stopColor:'rgb(251, 191, 36)', stopOpacity:0.08}} />
                <stop offset="100%" style={{stopColor:'rgb(107, 70, 193)', stopOpacity:0.05}} />
              </radialGradient>
              <filter id="blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
              </filter>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad1)" filter="url(#blur)" />
            <rect width="100%" height="100%" fill="url(#grad2)" filter="url(#blur)" opacity="0.5" />
          </svg>
        </motion.div>
      </div>

      {/* Animated orbs - luxury feel */}
      <motion.div
        className="absolute -top-48 -right-48 w-96 h-96"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-music-purple/20 via-purple-400/10 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute -bottom-48 -left-48 w-96 h-96"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-to-tr from-music-gold/20 via-amber-400/10 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Floating musical elements - subtle and elegant */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: `${30 + i * 30}%`,
              y: '110%',
            }}
            animate={{
              y: '-10%',
            }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 10,
            }}
          >
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="text-music-purple/5 text-8xl font-display"
            >
              ♪
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Elegant light rays - premium sweep effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/4 left-1/4 w-32 h-[150%] rotate-12"
          animate={{
            x: ['-100%', '400%'],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 3
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl" />
        </motion.div>
        <motion.div
          className="absolute -top-1/4 right-1/3 w-24 h-[150%] -rotate-12"
          animate={{
            x: ['100%', '-400%'],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
            repeatDelay: 2
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-music-gold/10 to-transparent blur-xl" />
        </motion.div>
      </div>

      {/* Premium texture overlay with noise */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Premium vignette and glow effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/5" />
        
        {/* Corner glows for premium feel */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-music-purple/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-music-gold/10 to-transparent blur-3xl" />
      </div>
    </div>
  )
}