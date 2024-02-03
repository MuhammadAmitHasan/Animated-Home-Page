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

const fadeInUp = {
    hidden: { opacity: 0, y: 80, transition: { duration: 0.7 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const fadeInLeft = {
    hidden: { opacity: 0, x: 500, transition: { duration: 1 } },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};
const fadeInRight = {
    hidden: { opacity: 0, x: -500, transition: { duration: 1 } },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export { fadeInLeft, fadeInRight, fadeInUp, megaMenu, navContainer };

