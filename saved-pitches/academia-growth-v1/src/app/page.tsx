'use client'

import { useRef } from 'react'
import Hero from '@/components/Hero'
import EmptySlotsCalculator from '@/components/EmptySlotsCalculator'
import UntappedSegments from '@/components/UntappedSegments'
import StrategyBreakdown from '@/components/StrategyBreakdown'
import RevenuePotential from '@/components/RevenuePotential'
import Guarantee from '@/components/Guarantee'
import CTA from '@/components/CTA'
import FullscreenButton from '@/components/FullscreenButton'

export default function Home() {
  const calculatorRef = useRef<HTMLDivElement>(null)

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="overflow-x-hidden">
      <FullscreenButton />
      <Hero onScrollToNext={scrollToCalculator} />
      <div ref={calculatorRef}>
        <EmptySlotsCalculator />
      </div>
      <UntappedSegments />
      <StrategyBreakdown />
      <RevenuePotential />
      <Guarantee />
      <CTA />
    </main>
  )
}