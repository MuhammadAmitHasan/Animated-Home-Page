import Button from '@/components/ui/Button';
import HeadingText from '@/components/ui/HeadingText';
import { fadeInLeft, fadeInRight } from '@/utils/framerAnimation';
import Image from 'next/image';
import { FaApple } from 'react-icons/fa';
import AnimatedComponent from '../ui/AnimatedComponent';

const StartMaking = () => {
  return (
    <div className="lg:pt-32">
      <div className="container mx-auto rounded-3xl bg-[#111111] grid grid-cols-1 lg:grid-cols-2 text-white px-10 pt-10 lg:pt-0">
        <div className="flex items-center">
          <AnimatedComponent variants={fadeInRight}>
            <div className="space-y-6">
              <HeadingText
                className={'!text-left'}
                text={
                  <>
                    Start making your life
                    <span className="gradient-color"> easier </span>with TechBot
                  </>
                }
              />
              <div>
                <Button
                  className={
                    'py-4 w-full sm:w-52 bg-white !text-black hover:bg-black border hover:!text-white border-white font-semibold'
                  }
                >
                  <FaApple />
                  <span>Download for iOS</span>
                </Button>
              </div>
            </div>
          </AnimatedComponent>
        </div>

        <div className="relative h-96 sm:h-[500px] xl:h-[700px] lg:h-600px">
          <div className="absolute top-10 xl:-top-40 lg:-top-32 flex justify-center w-full">
            <AnimatedComponent variants={fadeInLeft}>
              <div className="relative mx-auto w-64 sm:w-96 lg:w-[680px] aspect-[2/3.2]">
                <Image
                  loading="lazy"
                  src={'/images/2m.png'}
                  fill
                  alt="2 mobile devices"
                  sizes="100%"
                  className="object-contain"
                />
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StartMaking;
