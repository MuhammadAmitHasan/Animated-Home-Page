'use client';
import LinkComponents from '@/components/reuseable/LinkComponent';
import Button from '@/components/ui/Button';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from 'react-icons/io';
import GroupLinks from './GroupLinks';

const Header = () => {
  const [pageOpen, setPageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const megaMenu = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  const navContainer = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      y: -250,
      opacity: 0,
      transition: {
        y: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <div>
      <div className="bg-neutral px-5 py-2 flex justify-between xl:grid grid-cols-5 items-center text-neutral-text relative z-50">
        <Link href={'/'}>
          <Image
            width={150}
            height={40}
            src={'/images/logo.png'}
            alt="logo"
          ></Image>
        </Link>

        {/* Menus */}
        <div className="space-x-10 col-span-3 lg:flex justify-center hidden text-neutral-text">
          <GroupLinks />
          <div
            onMouseEnter={() => setPageOpen(true)}
            onMouseLeave={() => setPageOpen(false)}
          >
            <div className="flex items-center space-x-0.5 hover:text-hover-colo cursor-pointer">
              <span>Pages</span>
              {pageOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>

            {/* mega menu */}
            <AnimatePresence>
              {pageOpen && (
                <motion.div
                  className="absolute w-full left-0"
                  initial="hidden"
                  animate={pageOpen ? 'visible' : 'hidden'}
                  exit="hidden"
                  variants={megaMenu}
                >
                  <div
                    className="rounded-3xl shadow-lg p-8 pt-5 mx-auto max-w-[750px] mt-3"
                    onMouseLeave={() => setPageOpen(false)}
                  >
                    <LinkComponents />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link className="hover:text-hover-color hidden md:block" href={'/'}>
            Cart (0)
          </Link>
        </div>

        <div className="flex justify-end items-center space-x-5">
          <Link className="hover:text-hover-color lg:hidden" href={'/'}>
            Cart (0)
          </Link>

          <div className="sm:block hidden">
            <Button className={''}>
              <FaApple />
              <span>Download for iOS</span>
            </Button>
          </div>
          <div
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.div
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
            </motion.div>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="bg-white grid grid-cols-1 gap-2 pl-5 py-3 lg:hidden text-neutral-text absolute w-full z-40"
            initial="hidden"
            animate={menuOpen ? 'visible' : 'hidden'}
            exit="hidden"
            variants={navContainer}
          >
            <GroupLinks />
            <div onClick={() => setPageOpen(!pageOpen)}>
              <div className="flex items-center space-x-0.5 hover:text-hover-color">
                <span>Pages</span>
                {pageOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>

              {/* mega menu */}
              <AnimatePresence>
                {pageOpen && (
                  <motion.div
                    className="mt-5"
                    initial="hidden"
                    animate={pageOpen ? 'visible' : 'hidden'}
                    exit="hidden"
                    variants={megaMenu}
                  >
                    <LinkComponents />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Header;
