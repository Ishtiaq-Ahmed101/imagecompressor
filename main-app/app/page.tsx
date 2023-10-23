import Image from 'next/image'
import Hero from "@/components/ui/Hero"
import React, { Suspense, lazy } from 'react';
const Features = lazy(() => import('@/components/ui/features'));
const Questions = lazy(() => import('@/components/ui/Questions'));
export default function Home() {
  return (
    <>
      <Hero />
    <Suspense fallback={<div>Loading...</div>}>
      <Features />
      <Questions />
    </Suspense>
    </>
  )
}
