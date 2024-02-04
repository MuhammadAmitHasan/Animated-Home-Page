//

'use client';
import Button from '@/components/ui/Button';
import HeadingText from '@/components/ui/HeadingText';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FaApple } from 'react-icons/fa';

const Card = ({ progress, range, targetScale, i, lhw }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="flex items-center justify-center sticky top-20"
    >
      <motion.div
        className="flex px-4 pt-8 md:px-14 md:pt-12 shadow-lg bg-white rounded-3xl flex-col relative -top[25%] origin-top border border-gray-200"
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1300px] mx-auto gap-10 2xl:pl-10">
          <div className="flex items-center">
            <div className="space-y-7 md:space-y-9">
              <HeadingText
                className={'text-center md:!text-left'}
                text={lhw.title}
              />
              <p className="text-neutral-text text-lg sm:text-xl font-medium text-center md:text-left xl:text-2xl xl:leading-10">
                {lhw.description}
              </p>

              <div className="sm:flex justify-center md:justify-start md:pb-14 xl:pb-0">
                <Button className={'py-4 w-full sm:w-48'}>
                  <FaApple />
                  <span>Download for iOS</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-end">
            <div className="relative h-72 sm:h-96 lg:h-[500px] xl:h-[600px] aspect-[2/3]">
              <Image
                loading="lazy"
                src={lhw.image}
                fill
                sizes="100%"
                alt="mobile app"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Card;
