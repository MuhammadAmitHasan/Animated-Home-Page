import Button from '@/components/ui/Button';
import HeadingText from '@/components/ui/HeadingText';
import Image from 'next/image';
import { FaApple } from 'react-icons/fa';
import { LearnHowItWorksDemoData } from './utils/demoData';

const LearnHowItWorks = () => {
  return (
    <div className="container px-3 mx-auto">
      <HeadingText
        text={
          <>
            Learn how it
            <span className="gradient-color"> works</span>
          </>
        }
      />
      <p className="text-lg md:text-xl lg:text-2xl text-center my-4 md:leading-9 lg:my-8 mx-auto max-w-3xl font-medium">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu ut enim ad minim veniam quiscupidatat nonpol.
      </p>

      <div className="space-y-5">
        {LearnHowItWorksDemoData.map((lhw, i) => (
          <div
            key={i}
            className=" bg-white rounded-3xl px-4 pt-8 md:px-14 md:pt-12 "
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
                  <Image src={lhw.image} fill sizes="100%" alt="mobile app" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LearnHowItWorks;
