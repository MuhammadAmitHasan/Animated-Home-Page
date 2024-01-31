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

export { megaMenu, navContainer };
