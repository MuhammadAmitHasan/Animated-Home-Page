const HeadingText = ({ text, className }) => {
    return (
        <h1 className={`${className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[70px] font-semibold text-center`}>{text}</h1>
    );
};

export default HeadingText;
