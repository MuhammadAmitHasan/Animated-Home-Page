'use client';
import { fadeInUp } from '@/utils/framerAnimation';
import Image from 'next/image';
import AnimatedComponent from '../ui/AnimatedComponent';
import { slideDataDemo } from './utils/demoData';

const FeatureSlide = () => {
  return (
    <AnimatedComponent variants={fadeInUp}>
      <div className="px-4 lg:px-10 max-w-[1424px] mx-auto">
        <div className="relative overflow-hidden">
          <div className="w-10 lg:w-28 absolute top-0 bottom-0 left-0 bg-gradient-to-r from-neutral-lite via-white to-transparent z-10"></div>
          <div className="w-10 lg:w-28 absolute top-0 bottom-0 right-0 bg-gradient-to-l from-neutral-lite via-white to-transparent z-10"></div>

          <div className="flex gap-12 animate-slide">
            {slideDataDemo.map((sdd, i) => (
              <div
                key={i}
                className="w-72 sm:w-96 md:w-[500px] lg:w-[850px] shrink-0"
              >
                <div className="relative h-24 lg:h-36 aspect-square rounded-full mx-auto">
                  <Image
                    loading="lazy"
                    alt="face"
                    src={sdd.image}
                    fill
                    sizes="100%"
                    className="rounded-full"
                  />
                </div>
                <div
                  className="text-xl sm:text-2xl md:text-3xl lg:text-5xl lg:leading-[65px] font-bold text-center mt-5 mb-7"
                  dangerouslySetInnerHTML={{ __html: sdd.description }}
                />
                <div className="text-xl font-bold text-center">
                  <h6 className="">{sdd.name}</h6>
                  <h6 className="text-xl text-neutral-text">
                    {sdd.occupation}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedComponent>
  );
};

export default FeatureSlide;
