import knowaste_img from "../../assets/img/knowaste_screenshot.png";
import photography_screenshot from "../../assets/img/portfolio-screenshot.jpg";

const projectsInfo = [
  {
    title: "Notesy",
    description:
      " Notesy is a note taking app built using React, ES6, SASS and Firebase. It allows users to register, login with email and password or login with a google account, add/delete notes and sign out at the end of their session.",
    img: {
      src: "https://raw.githubusercontent.com/tea-milas/notesy-app/main/src/assets/img/Screenshot_login.png",
      alt: "notesy thumbnail",
    },
    icons: [
      ["fab", "sass"],
      ["fab", "react"],
      ["fas", "database"],
    ],
    links: {
      code: "https://github.com/tea-milas/notesy-app",
      website: "https://notesy.teamilas.com/",
    },
  },
  {
    title: "Morse code / English translator",
    description:
      "A translator of morse code to english and vice versa. It includes text to speech for english and audio reproduction for morse code. It's made with vanilla JavaScript and tested with Jest. Example of TDD.",
    img: {
      src: "https://raw.githubusercontent.com/tea-milas/morse-code-translator/main/assets/screenshot/Screenshot.png",
      alt: "morse code to english translator thumbnail",
    },
    icons: [
      ["fab", "sass"],
      ["fab", "js-square"],
      ["fab", "html5"],
    ],
    links: {
      code: "https://github.com/tea-milas/morse-code-translator",
      website: "https://tea-milas.github.io/morse-code-translator/",
    },
  },
  {
    title: "KnoWaste",
    description:
      " A 4 week client project - waste reduction service for students and catering canteens. I was involved in different roles, from being a designer, working on the front-end, to being a product owner and integrating part of the front-end with Firebase.",
    img: { src: knowaste_img, alt: "knowaste thumbnail" },
    icons: [
      ["fab", "sass"],
      ["fab", "react"],
      ["fas", "database"],
    ],
    links: {
      code: "https://github.com/nology-tech/knowaste",
      website: "https://knowaste-3c92c.web.app/",
    },
  },
  {
    title: "Calculator",
    description:
      " A calculator that can do simple operations between two numbers and non complex multiple operations. It was made with vanilla JavaScript and was tested with Cypres.",
    img: {
      src: "https://raw.githubusercontent.com/tea-milas/calculator/main/assets/svg/calculator_img.jpg",
      alt: "calculator thumbnail",
    },
    icons: [
      ["fab", "sass"],
      ["fab", "js-square"],
      ["fab", "html5"],
    ],
    links: {
      code: "https://github.com/tea-milas/calculator",
      website: "https://tea-milas.github.io/calculator/",
    },
  },
  {
    title: "Memory game",
    description:
      "A game of memory where you need to match leaves before time runs out. Made with vanilla JavaScript.",
    img: {
      src: "https://raw.githubusercontent.com/tea-milas/memory-game/main/assets/img/screenshot_2.JPG",
      alt: "memory game thumbnail",
    },
    icons: [
      ["fab", "sass"],
      ["fab", "js-square"],
      ["fab", "html5"],
    ],
    links: {
      code: "https://github.com/tea-milas/memory-game",
      website: "https://tea-milas.github.io/memory-game/",
    },
  },
  {
    title: "Pottery collective",
    description:
      " A static website made using HTML5, CSS3 and a bit of vanilla JavaScript.",
    img: {
      src: "https://raw.githubusercontent.com/tea-milas/pottery-collective/main/assets/img/Screenshot_homepage.png",
      alt: "pottery collective homepage",
    },
    icons: [
      ["fab", "css3"],
      ["fab", "js-square"],
      ["fab", "html5"],
    ],
    links: {
      code: "https://github.com/tea-milas/pottery-collective",
      website: "http://potterycollective.teamilas.com/",
    },
  },
  {
    title: "Punk API",
    description:
      "A React App that uses the Punk API to fetch data and display it on the application. The user can search and filter the beer selection by a range of properties.",
    img: {
      src: "https://raw.githubusercontent.com/tea-milas/punk-API/main/src/assets/punk_api_screenshot.png",
      alt: "punk api thumbnail",
    },
    icons: [
      ["fab", "sass"],
      ["fab", "js-square"],
      ["fab", "react"],
    ],
    links: {
      code: "https://github.com/tea-milas/punk-API",
      website: "https://punkapi.teamilas.com/",
    },
  },
  {
    title: "Photography portfolio",
    description:
      "A photography website that shows a selection of photos, grouped in categories, and has a contact form to contact the owner. It was made using React, ES6 and SCSS.",
    img: {
      src: photography_screenshot,
      alt: "photography portfolio thumbnail",
    },
    icons: [
      ["fab", "sass"],
      ["fab", "js-square"],
      ["fab", "react"],
    ],
    links: {
      code: "https://github.com/tea-milas/photography-portfolio",
      website: "https://photography.teamilas.com/",
    },
  },
];

export default projectsInfo;
