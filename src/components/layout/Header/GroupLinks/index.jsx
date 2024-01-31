import Link from 'next/link';

const GroupLinks = () => {
  return (
    <>
      <Link className="hover:text-hover-color" href={'/'}>
        Home
      </Link>
      <Link className="hover:text-hover-color" href={'/'}>
        About
      </Link>
      <Link className="hover:text-hover-color" href={'/'}>
        Blog
      </Link>
      <Link className="hover:text-hover-color" href={'/'}>
        Pricing
      </Link>
    </>
  );
};
export default GroupLinks;
