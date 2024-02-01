import Button from '@/components/ui/Button';
import HeadingText from '@/components/ui/HeadingText';
import Image from 'next/image';
import { FaApple } from 'react-icons/fa';
import { DesignToFitDemoData } from './utils/demoData';

const DesignToFit = () => {
  return (
    <div className="container px-3 mx-auto">
      <HeadingText
        text={
          <>
            Designed to <br />
            fit every <span className="gradient-color">use case</span>
          </>
        }
      />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {DesignToFitDemoData.map((dtf, i) => (
          <div
            key={i}
            className={`rounded-3xl bg-white shadow-lg overflow-hidden ${
              i == 2 ? 'md:col-span-2 grid grid-cols-1 md:grid-cols-2' : 'pt-10'
            }`}
          >
            <div
              className={`px-5 sm:px-12 relative ${
                i == 2 ? 'pt-10 md:min-h-96' : ''
              }`}
            >
              <HeadingText text={dtf.title} className={'!text-left'} />

              <p className="text-neutral-text text-lg sm:text-xl font-medium xl:text-2xl xl:leading-10 mt-5 mb-12">
                {dtf.description}
              </p>

              {i == 2 && (
                <div className="md:absolute mb-10 md:mb-0 bottom-16">
                  <Button className={'py-4 w-full sm:w-64'}>
                    <FaApple />
                    <span>Download for iOS</span>
                  </Button>
                </div>
              )}
            </div>

            <div className="px-12 relative overflow-hidden">
              {i == 2 ? (
                <div className="absolute md:bottom-0 left-0">
                  <div className="relative h-96 md:h-[1000px] aspect-square">
                    <Image
                      alt="bg"
                      src={'/images/imgrbr2.png'}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ) : (
                <Image
                  alt="bg"
                  src={'/images/imgrbg.png'}
                  fill
                  className="object-cover"
                />
              )}

              <div
                className={`relative w-full  ${
                  i == 2 ? 'aspect-[7/8]' : 'aspect-[5/4]'
                }`}
              >
                <Image src={dtf.image} alt="mobile text" fill />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DesignToFit;
