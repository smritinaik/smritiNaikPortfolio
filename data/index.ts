export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];


interface GridItem {
  id: number;
  title: string;
  description: string;
  className: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}

export const projects = [
  {
    id: 1,
    title: "Sai Santosh juices Mapusa Goa",
    des: "Designed Sai Santosh Coldrink website at Avanteia Pvt Ltd, improving functionality, design, and user experience.",
    img: "/ProSaiSantosh.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://sai-santosh-cold-drinks.vercel.app/",
    
  },
  {
    id: 2,
    title: "Goxcar Rentals Goa",
    des: "Designed Goxcar Rentals website at Avanteia Pvt Ltd, improving functionality, design, and user experience.",
    img: "/ProGoxCar.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://gox-car-rentals.vercel.app/",
  },
  {
    id: 3,
    title: "Balu Developers Goa",
    des: "Designed Balu Developers Business website",
    img: "/balu.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://baludevelopers.com/",
  },
  {
    id: 4,
    title: "Simran Pinchendar",
    des: "Designed portfolio website for Simran Pinchendar",
    img: "/simran.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://simranpinchendar.netlify.app/",
  },
  {
    id: 5,
    title: "3D Car Website",
    des: "Designed a 3D website as personal project. ",
    img: "/3d.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://3dwebsite01.netlify.app/",
  },
  {
    id: 6,
    title: "A Modern UI Websie",
    des: "Designed this website with Aceternity UI library",
    img: "/ProModernUi.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://modernui-ncdb.vercel.app/",
  },

];

export const companies = [
  {
    id: 1,
    name: "",
    img: "",
    nameImg: "/next.svg",
  },
  {
    id: 2,
    name: "",
    img: "",
    nameImg: "/re.svg",
  },

  {
    id: 4,
    name: "",
    img: "",
    nameImg: "/tail.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Web Developer Intern",
    desc: "At Avanteia Pvt Ltd, I worked as a full stack web developer, where I collaborated on various projects that required a comprehensive understanding of both front-end and back-end development ",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Course Instructor",
    desc: "As a Course Instructor at Avanteia Pvt Ltd in Mapusa, Goa, I taught students website development, C, C++, Python Programming and Cybersecurity.  ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelancer at UPWORKS and FIVER platforms",
    desc: "I also offer web development services at freelancing platforms.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  // {
  //   id: 4,
  //   title: "Web Developer at Codsoft Company",
  //   desc: "Currently doing work from home internship at codsoft!",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

const icons = [
  {
    id: 1,
    img: "/git.svg",
    // url: "https://github.com/smritinaik",
  },
  {
    id: 3,
    img: "/link.svg",
    // url: "https://www.linkedin.com/in/smritinaik15/",
  },
];
