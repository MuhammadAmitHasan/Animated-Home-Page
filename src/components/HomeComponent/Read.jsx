import HeadingText from '@/components/ui/HeadingText';
import { fadeInLeft, fadeInUp } from '@/utils/framerAnimation';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedComponent from '../ui/AnimatedComponent';
import { readData } from './utils/demoData';

const Read = () => {
  return (
    <div className="container mx-auto px-3 pt-10 sm:pt-32">
      <AnimatedComponent variants={fadeInUp}>
        <HeadingText
          text={
            <>
              Read our latest <br /> resources &
              <span className="gradient-color"> insights</span>
            </>
          }
        />
      </AnimatedComponent>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        {readData.map((rd, i) => (
          <Link href={'/'} key={i} className="overflow-hidden group">
            <AnimatedComponent variants={fadeInUp}>
              <div className="relative w-full aspect-[5/4] rounded-3xl border border-gray-200 overflow-hidden">
                <Image
                  loading="lazy"
                  className="object-cover rounded-3xl group-hover:scale-110 transition-transform"
                  fill
                  sizes="100%"
                  src={rd.image}
                  alt="ml"
                />
              </div>
            </AnimatedComponent>
            <AnimatedComponent variants={fadeInLeft}>
              <div className="text-xl font-medium text-neutral-text my-5 md:my-8">
                {rd.date}
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold lg:leading-snug group-hover:text-blue-500 transition-colors">
                {rd.heading}
              </h1>
            </AnimatedComponent>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Read;
