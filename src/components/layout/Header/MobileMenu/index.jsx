import Button from '@/components/ui/Button';
import LinkComponents from '@/components/ui/LinkComponent';
import { AnimatePresence, motion } from 'framer-motion';
import { FaApple } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { megaMenu, navContainer } from '../../../../utils/framerAnimation';
import GroupLinks from '../GroupLinks';

const MobileMenu = ({ pageOpen, menuOpen, setPageOpen }) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          className="bg-white grid grid-cols-1 gap-2 px-5 py-3 lg:hidden text-neutral-text absolute w-full z-40"
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

            <Button className={'!w-full mt-5 sm:hidden'}>
              <FaApple />
              <span>Download for iOS</span>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default MobileMenu;
