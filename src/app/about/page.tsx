// src/app/about/page.tsx
import React from 'react';
import { Metadata } from 'next';
import PageTransition from './components/PageTransition';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';


export const metadata: Metadata = {
  title: 'Despre Noi | Pensiunea Vilcan',
  description: 'Descoperă povestea Pensiunii Vilcan, echipa noastră dedicată și valorile care ne ghidează în oferirea unei experiențe autentice în inima munților.',
  openGraph: {
    title: 'Despre Noi | Pensiunea Vilcan',
    description: 'Descoperă povestea Pensiunii Vilcan, echipa noastră dedicată și valorile care ne ghidează în oferirea unei experiențe autentice în inima munților.',
    images: [
      {
        url: '/images/og/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Pensiunea Vilcan - Despre Noi'
      }
    ]
  }
};

export default function AboutPage() {
  return (
    <PageTransition>
      <main>
        <HeroSection />
        <StorySection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
    </PageTransition>
  );
}