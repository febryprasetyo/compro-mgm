import Hero from '@/components/home/Hero';
import Intro from '@/components/home/Intro';
import Stats from '@/components/home/Stats';
import Features from '@/components/home/Features';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Features />
      {/* Kept Stats as bonus per plan */}
      <Stats />
      <CTA />
    </>
  );
}
