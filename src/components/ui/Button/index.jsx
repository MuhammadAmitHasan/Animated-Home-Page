const Button = ({ className, children }) => {
  return (
    <button
      className={`${className} px-5 rounded-full py-2 bg-black text-white hover:bg-hover-color flex items-center justify-center space-x-0.5 text-center hover:transform hover:translate-y-[-3px] transition-transform duration-200`}
    >
      {children}
    </button>
  );
};

export default Button;
