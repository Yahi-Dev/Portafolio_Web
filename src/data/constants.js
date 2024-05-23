
import { images } from "../images/logos/images.js";

export const Bio = {
    name: "Yahinniel Vásquez",
    roles: [
      "Backend Developer",
      "Programming Fundamentals Monitor",
      "Programmer",
    ],
    description:
      "I am a Software Development student with experience in Backend Development, specializing in C# and Python. I possess strong problem-solving and leadership skills. My focus is on creating efficient and high-quality technological solutions, and I am committed to continuous improvement and learning.",
    github: "https://github.com/Yahi-Dev",
    resume:
      "https://drive.google.com/file/d/1q4Y5tUUStZM5Cg5VtRuWyBX5m-0smwcR/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/yahivas-dev",
    discord: "https://discord.gg/CtFgKp9QVs",
  };
  
  export const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React Js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Python",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        },
        {
          name: "C#",
          image: images.csharp,
        },
        {
            name: "Java",
            image: images.java,
        },
        {
            name: "JavaScript",
            image: images.javascript,
        },
      ],
    },
    {
      title: "Database",
      skills: [
        {
          name: "SQL Server",
          image:
            images.sqlserver,
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "Git",
          image:
            images.git,
        },
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        {
          name: "Docker",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
        },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },
        {
          name: "Postman",
          image:
            images.postman,
        },
      ],
    },
  ];
  
  export const experiences = [
    {
      id: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSbjOrBNrUm1ovYW8d2Cygehf9hyZQxFLzNq3jDU48vg&s",
      role: "GANADOR EN 1ER LUGAR DE LA FERIA CIENTIFICA ITLA",
      company: "Instituto Tecnológico de las Américas (ITLA)",
      date: "Abril 10 - 2024",
      desc: "I was part of the 1st place winning team at the 2nd ITLA Scientific Fair where we developed an innovative platform that centralizes patient management and improves accessibility to medical care. With features such as a complete electronic medical record, connection to 911 emergency service, and others that provide essential patient information. Our contribution highlights our commitment to innovation and improving public health.",
      skills: [
        "C#",
        "Identity",
        "SQL Server",
        "React",
        "EntityFramework",
        "API RESTFUL",
      ],
      doc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSbjOrBNrUm1ovYW8d2Cygehf9hyZQxFLzNq3jDU48vg&s",
    },
    {
      id: 0,
      img: "https://index.gob.do/wp-content/uploads/2022/10/itla-1024x506.png",
      role: "MONITOR DE FUNDAMENTOS DE PROGRAMACIÓN",
      company: "Instituto Tecnológico de las Américas (ITLA)",
      date: "Noviembre 2023 - Present",
      desc: "I used agile methods to teach programming and develop their algorithms.",
      doc: "https://index.gob.do/wp-content/uploads/2022/10/itla-1024x506.png",
    },
    {
      id: 1,
      img: "https://www.santodomingomotors.com.do/wp-content/uploads/2023/01/271966235_10159105544178929_7575951278983518837_n.jpg",
      role: "CONCURSANTE DESTACADO EN LA FERIA HACKATHON",
      company: "Santo Domingo Motors",
      date: "Noviembre 2023",
      desc: "I participated in a fair organized by Santo Domingo Motors, where I had the opportunity to put into practice my skills and abilities as a programmer to build software that would automate the process of selling a vehicle for the company.",
      skills: [
        "C#",
        "HTML",
        "JavaScript",
        "CSS",
      ],
      doc: "https://idmphsmkuxkn.compat.objectstorage.us-ashburn-1.oraclecloud.com/elcaribe-bucket/uploads/2024/01/foto-3-directivos-de-sdm-e-itla-con-estudiantes-que-participaron-en-el-hackathon.jpg.webp",
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/41JGAuuw7DL._SL500_.jpg",
      role: "Proyectos personales",
      date: "Agosto 2022 - Presente",
      desc: "I carried out different projects (websites and desktop) during my university career, such as NetBanking, a RealState, a Social Network, a Patient Management System and an Employability Portal. Applying software architectures (MVC, Layers, Onion), and using technologies such as Python, JavaScript, C#, .NET, SQLServer, RestAPI and Bootstrap.",
      doc: "https://talently.tech/blog/wp-content/uploads/2021/09/Cuanto-gana-un-desarrollador2.png",
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSbjOrBNrUm1ovYW8d2Cygehf9hyZQxFLzNq3jDU48vg&s",
      school: "",
      date: "Sep 2022 - Dic 2024",
      grape: "3.6 GPA",
      desc: "I'm pursuing an Associate's Degree in Software Development at ITLA, set to finish in December 2024. This program has honed my skills across programming, software engineering, database management, and web development. Through hands-on experience and problem-solving, I've gained a deep understanding of industry-standard tools and practices.",
      degree: "Software Developer",
    },
    {
      id: 1,
      img: "https://img.us.news.samsung.com/us/wp-content/uploads/2022/11/29175233/SIC-NWSRM-Featured-Image-798-%C3%97-500-px.png",
      school: "Samsung Innovation Campus",
      date: "January 2024 - Jun 2024",
      desc: "I am taking a training program paid for by Samsung Innvation Campuses, where I am learning programming techniques and training in artificial intelligence with python.",
      degree: "Certification in artificial intelligence and programming",
    },
    {
      id: 2,
      img: "https://pbs.twimg.com/profile_images/1633884045045305344/PPq7Jroh_400x400.png",
      school: "Cisco IT",
      date: "Sep 2022 - Dec 2022",
      grade: "94.0%",
      desc: "IT support technician with training in IT Essentials: PC Hardware and Software from Cisco Networking Academy and CompTIA A+ certification. Experience in installing, configuring and maintaining hardware and software, as well as resolving technical problems and basic network configuration.",
      degree: " IT Essentials: PC Hardware and Software",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "RealStateApp",
      date: "March 2024 - April 2024",
      description:
        "Este proyecto es una completa solución para la gestión de propiedades inmobiliarias, diseñada para brindar una experiencia intuitiva y eficiente tanto para agentes inmobiliarios como para clientes. Utilizando tecnologías modernas y las mejores prácticas de desarrollo, esta aplicación ofrece una amplia gama de funcionalidades que abarcan desde la visualización de propiedades hasta la administración de usuarios y configuraciones del sistema.",
      image: images.realstateapp,
      tags: [
        "Entity Framework",
        "Boobstrap",
        "ONION",
        "Reposiotiro y Servicios genericos",
        "Identity",
        "Automapper",
        "API con JWT",
        "CQRS y Mediator",
        "Documentación",
        "HTML",
      ],
      category: "web app",
      github: "https://github.com/Yahi-Dev/P3RealStateApp",
    },
    {
        id: 0,
        title: "NetBanking",
        date: "March 2024 - March 2024",
        description:
          "Este proyecto consiste en el desarrollo de una aplicación de banca en línea utilizando ASP.NET Core MVC (versión 7). La aplicación está diseñada para gestionar las operaciones bancarias de dos tipos de usuarios: administradores y clientes.",
        image: images.netbanking,
        tags: [
          "Entity Framework",
          "Boobstrap",
          "ONION",
          "Reposiotiro y Servicios genericos",
          "Identity",
          "Automapper",
          "HTML",
        ],
        category: "web app",
        github: "https://github.com/Yahi-Dev/App_NetBanking",
    },
    {
        id: 2,
        title: "Sistema Gestor de Pacientes",
        date: "Feb 2024 - Feb 2024",
        description:
          "Desarrollé un sistema gestor de pacientes utilizando ASP.NET 8 MVC, donde se puede realizar un CRUD con los pacientes, médicos, exámenes médicos, agendar citas y ver los resultados de los exámenes médicos.",
        image: images.sgdp,
        tags: [
          "Entity Framework",
          "Boobstrap",
          "ONION",
          "Reposiotiro y Servicios genericos",
          "Identity",
          "HTML",
        ],
        category: "web app",
        github: "https://github.com/Yahi-Dev/Sistema_de_Gestor_de_Pacientes",
    },
    {
        id: 3,
        title: "Red Social",
        date: "Feb 2024 - Feb 2024",
        description:
          "Desarrollé una red social donde los usuarios pueden crear publicaciones y estas puedan ser comentadas por sus amigos, utilizando ASP.NET Core MVC 7.",
        image: images.redsocial,
        tags: [
          "Entity Framework",
          "Boobstrap",
          "ONION",
          "Reposiotiro y Servicios genericos",
          "HTML",
        ],
        category: "web app",
        github: "https://github.com/Yahi-Dev/SocialRed",
    },
  ];
  
  export const TimeLineData = [
    { year: 2017, text: "Started my journey" },
    { year: 2018, text: "Worked as a freelance developer" },
    { year: 2019, text: "Founded JavaScript Mastery" },
    { year: 2020, text: "Shared my projects with the world" },
    { year: 2021, text: "Started my own platform" },
  ];