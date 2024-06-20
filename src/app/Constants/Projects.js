const University = {
    nameEN: "University",
    nameES: "Universidad",
    descriptionEN: "At the university I have developed software, systems, automation and telecommunications projects, applying theoretical knowledge in practical solutions.",
    descriptionES: "En la universidad he desarrollado proyectos de software, sistemas, automatización y telecomunicaciones, aplicando conocimientos teóricos en soluciones prácticas.",
    projectsEN: [
        {
            name: "Algorithm and Data Structure",
            description: "The purpose is to group all the codes programmed in C/C++ for the subject 'Algorithms and Data Structure' of the 1st year of the Systems Engineering course.",
            image: "/Projects/University/AyED.png",
            github: "https://github.com/FranprzDev/AyED-UTN-FRT-I-NIVEL",
            demo: ""
        },
        {
            name: "Final Group Project - ADS",
            description: "This project was developed with the intention of demonstrating the concepts learned in C/C++ during the course of the subject",
            image: "/Projects/University/AyED-TFI.png",
            github: "https://github.com/FranprzDev/TFI-AyED-Ing-Sist",
            demo: ""
        },
        {
            name: "System Analysis",
            description: "This project is a Design of a Logistic System for a foundation 'Lideres de Ansenuza'.",
            image: "/Projects/University/LogiSys.png",
            github: "",
            demo: "https://www.figma.com/design/NJvnFdc8nmvBMiDTTpQuk4/LogiSys?node-id=0-1&t=lkQMyzT5DTSzYEjt-1"
        },
        {
            name: "System Design",
            description: "The purpose is to group all the codes programmed in POO for the subject 'System Design' of the 3rd year of the Systems Engineering course.",
            image: "/Projects/University/SystemDesign.png",
            github: "https://github.com/FranprzDev/DS-UTN-FRT",
            demo: ""
        },
    ]
}

const Courses = {
    nameEN: "Courses",
    nameES: "Cursos",
    descriptionEN: "All projects related to courses I have taken during my professional career.",
    descriptionES: "Todos los proyectos relacionados a cursos que fui realizando durante mi trayectoria profesional",
    projectsEN: [
        {
            name: "TucIA - 1st project RC School",
            description: "This is a group project in which we use HTML, CSS and Bootstrap; the idea of this project is to apply what we have learned and also to be able to work with the scrum methodology. In this project, in addition to the role of developer, I took the role of Scrum Master.",
            image: "/Projects/Courses/TucIA.png",
            github: "https://github.com/FranprzDev/TucIA---1st-Project-RC",
            demo: "https://tucia.netlify.app"
        },
        {
            name: "DueMovie - 2nd project RC School",
            description: "this is a group project which covers the concepts of HTML, CSS and Bootstrap, adding JavaScript for dynamic generation of code portions. Also working with scrum methodology.",
            image: "/Projects/Courses/DueMovie.png",
            github: "https://github.com/DanuVillaContini/DueMovie",
            demo: "https://duemovie.netlify.app"
        },
        {
            name: "3rd Project - RollingCode School - EduSys",
            description: "In this project, all the technology learned with the MERN stack was used, in addition to the use of ContextAPI. In this project, in addition to the role of developer, I took the role of Scrum Master.",
            image: "/Projects/Courses/EduSys.png",
            github: "https://github.com/DanuVillaContini/DueMovie",
            demo: "https://duemovie.netlify.app"
        }
    ]
}

const SelfTaught = {
    nameEN: "Self-Taught",
    nameES: "Autodidácta / Personal",
    descriptionEN: "All projects related to courses I have taken during my professional career.",
    descriptionES: "Todos los proyectos relacionados a cursos que fui realizando durante mi trayectoria profesional",
    projectsEN: [
        {
            name: "Rock Paper & Scissors",
            description: "This project is a easy counter game, where i count the games with a friend, its easy but fun to make metrics and practice in NextJS.",
            image: "/Projects/SelfTaught/RPS.png",
            github: "https://github.com/FranprzDev/RPS-Stadistic/tree/main",
            demo: "https://rps-stadistic.vercel.app"
        },
        {
            name: "PsichoMatch - NoCountry",
            description: "In this project I worked with a group given by the no country company, where we used the scrum methodology in order to obtain an MVP of an application of connection between psychologists and patients.",
            image: "/Projects/SelfTaught/PsicoMatch.png",
            github: "https://github.com/FranprzDev/Psichomatch-No-Country-",
            demo: "https://psichomatch-xrad.vercel.app"
        },
    ]
}

export const ProjectsArray = [
    University,
    Courses,
    SelfTaught
]