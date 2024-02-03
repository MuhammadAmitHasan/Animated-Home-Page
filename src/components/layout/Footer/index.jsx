import Button from '@/components/ui/Button';
import LinkComponents from '@/components/ui/LinkComponent';
import Image from 'next/image';
import Link from 'next/link';
import { FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mt-28 sm:mt-36 md:mt-40 lg:mt-44 rounded-t-3xl py-10 px-3 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 container max-w-[1424px] mx-auto">
        <div className="lg:col-span-2">
          <div className="rounded-3xl w-full px-8 py-10 text-white space-y-5 bg-black font-semibold">
            <Link
              href={'/'}
              className="relative block w-[172px] h-[37px] md:w-[200px] md:h-[40px] hover:transform hover:translate-y-[-3px] transition-transform duration-200"
            >
              <Image
                loading="lazy"
                src={'/images/logoW.png'}
                alt="logo white version"
                fill
                sizes="100%"
                className="object-contain"
              />
            </Link>
            <h1 className="text-xl md:text-3xl">Get our app for free today!</h1>
            <p className="text-lg md:text-xl">
              Duis aute irure dolor in reprehenderit suscin voluptate velit esse
              cillum dolore litum asus mauris odio retum euut enim.
            </p>

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

        <div className="lg:col-span-3">
          <LinkComponents />
        </div>
      </div>
      <div className="text-neutral-text text-center pt-10 px-2">
        Copyright © FourBit X | Designed by Hasan
      </div>
    </div>
  );
};
export default Footer;
