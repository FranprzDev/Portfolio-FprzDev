/* Navbar Text */

const NavbarTextES = {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact"
};

const NavbarTextEN = {
    home: "Home",
    about: "Acerca de mí",
    projects: "Proyectos",
    contact: "Contáctame"
};

const selectNavbarText = (lang) => {
    switch(lang){
        case "es":
            return NavbarTextES;
        case "en":
            return NavbarTextEN;
        default:
            return NavbarTextEN;
    }
}

