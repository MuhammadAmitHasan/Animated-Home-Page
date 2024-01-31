import { pageLinks, utilityPageLinks } from '@/utils/links';
import Link from 'next/link';

const LinkComponents = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-neutral-text">
      <div className="col-span-2">
        <h6 className="font-bold mb-6 text-black">Pages</h6>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8">
          {pageLinks.map((pl, index) => (
            <Link className="hover:text-hover-color" href={pl.link} key={index}>
              {pl.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h6 className="font-bold mb-6 text-black">Utility Pages</h6>
        <div className="grid grid-cols-1 gap-y-4 gap-x-8">
          {utilityPageLinks.map((upl, index) => (
            <Link
              className="hover:text-hover-color"
              href={upl.link}
              key={index}
            >
              {upl.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LinkComponents;
