'use client';
import HeadingText from '@/components/ui/HeadingText';
import { fadeInUp } from '@/utils/framerAnimation';

import { useScroll } from 'framer-motion';

import AnimatedComponent from '@/components/ui/AnimatedComponent';
import Lenis from '@studio-freight/lenis';
import { useEffect, useRef } from 'react';
import { LearnHowItWorksDemoData } from '../utils/demoData';
import Card from './Card';

const LearnHowItWorks = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className="container px-3 mx-auto relative max-w-[1424px]">
      <AnimatedComponent variants={fadeInUp}>
        <HeadingText
          text={
            <>
              Learn how it
              <span className="gradient-color"> works</span>
            </>
          }
        />

        <p className="text-lg md:text-xl lg:text-2xl text-center my-4 md:leading-9 lg:my-8 mx-auto max-w-3xl font-medium pb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu ut enim ad minim veniam quiscupidatat nonpol.
        </p>
      </AnimatedComponent>

      <AnimatedComponent variants={fadeInUp}>
        {LearnHowItWorksDemoData.map((lhw, i) => {
          const targetScale = 1 - (LearnHowItWorksDemoData.length - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              lhw={lhw}
            />
          );
        })}
      </AnimatedComponent>
    </div>
  );
};
export default LearnHowItWorks;
