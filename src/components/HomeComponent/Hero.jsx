import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="mt-14">
      <div className="flex justify-center mb-5">
        <div className="h-16 md:h-20 lg:h-24 text-center aspect-square relative">
          <Image
            loading="lazy"
            src={'/images/hero/herol.png'}
            alt="logo"
            fill
            sizes="100%"
          />
        </div>
      </div>
      <h1 className="text-center font-semibold text-4xl sm:text-5xl md:text-7xl lg:text-[90px] !lg:leading-[95px]">
        Unlock the full potential <br />
        of <span className="gradient-color">conversational AI</span>
      </h1>
      <div className="flex justify-center items-center gap-3 md:gap-5 overflow-hidden -mt-2 sm:-mt-3 md:-mt-5 lg:-mt-7">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="relative h-52 sm:h-96 md:h-[460px] lg:h-[530px] aspect-[2/3.6] rounded-2xl"
          >
            <Image
              loading="lazy"
              className="rounded-2xl"
              sizes="100%"
              fill
              src={`/images/hero/hero (${index}).png`}
              alt="hero"
            />
          </div>
        ))}

        <div className="relative h-96 sm:h-[550px] md:h-[650px] lg:h-[900px] aspect-[2/3.9] rounded-2xl">
          <Image
            loading="lazy"
            className="rounded-2xl"
            sizes="100%"
            fill
            src={'/images/hero/heroM.png'}
            alt="hero"
          />
        </div>

        {[4, 5, 6].map((index) => (
          <div
            key={index}
            className="relative h-52 sm:h-96 md:h-[460px] lg:h-[530px] aspect-[2/3.6] rounded-2xl"
          >
            <Image
              loading="lazy"
              className="rounded-2xl"
              sizes="100%"
              fill
              src={`/images/hero/hero (${index}).png`}
              alt="hero"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
