const Button = ({ className, children }) => {
  return <button className={`${className} px-5 rounded-full py-2 bg-black text-white hover:bg-hover-color flex items-center justify-center space-x-0.5 text-center`}>
    {children}
  </button>;
};
export default Button;