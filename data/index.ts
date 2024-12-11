export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
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

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-2 md:col-span-2 lg:row-span-2 lg:min-h-[30vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "sm:col-span-1 md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "sm:col-span-1 md:col-span-1 md:row-span-1",
  },
  // {
  //   id: 4,
  //   title: "Tech enthusiast with a passion for development.",
  //   description: "",
  //   className: "lg:col-span-1 md:col-span-1 md:row-span-1",
  //   imgClassName: "",
  //   // titleClassName: "justify-start",
  //   img: "/grid.svg",
  //   spareImg: "/b4.svg",
  // },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "lg:col-span-2 md:col-span-1 md:row-span-2 lg:min-h-[90vh]",
  //   imgClassName: "w-full h-full",
  //   titleClassName: "justify-end",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  // {
  //   id: 6,
  //   title: "Do you want to start a project together?",
  //   description: "",
  //   // className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   // titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  //   img: "",
  //   spareImg: "",
  // },
];

export const projects = [
  {
    id: 1,
    title: "Sai Santosh juices Mapusa Goa",
    des: "Designed Sai Santosh Coldrink website at Avanteia Pvt Ltd, improving functionality, design, and user experience.",
    img: "/saisantosh.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://saisantoshcoldrink.com",
    
  },
  {
    id: 2,
    title: "ExpressRentals Goa",
    des: "Designed ExpressRentals website at Avanteia Pvt Ltd, improving functionality, design, and user experience.",
    img: "/expren.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "Classic Cafe Mapusa Goa",
    des: "Designed Classic Cafe website at Avanteia Pvt Ltd, improving functionality, design, and user experience.",
    img: "/classicafe.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Manoj Taxi Service Goa",
    des: "Designed Manoj Taxi Service website at Avanteia Pvt Ltd, improving functionality, design, and user experience.",
    img: "/manoj.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
  {
    id: 5,
    title: "Balu Developers Goa",
    des: "Designed Balu Developers Business website",
    img: "/balu.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
  {
    id: 6,
    title: "Animated Gaming Website",
    des: "Animated Gaming Website a self developed project",
    img: "/animated.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },


];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
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
  // {
  //   id: 3,
  //   name: "",
  //   img: "/host.svg",
  //   nameImg: "/hostName.svg",
  // },
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
  {
    id: 4,
    title: "Web Developer at Codsoft Company",
    desc: "Currently doing work from home internship at codsoft!",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
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
