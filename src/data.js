/* ----------------Card Img--------------- */
import computerLine from "./assets/img/computer-line.png";
import terminal from "./assets/img/terminal-window-line.png";
import artboard from "./assets/img/artboard-2-line.png";
import vipDiamond from "./assets/img/vip-diamond-line.png";
import barChart from "./assets/img/bar-chart-2-line.png";
import brushLine from "./assets/img/paint-brush-line.png";

/* ----------------Works Img--------------- */
import work1 from "./assets/img/work-1.jpg";
import work2 from "./assets/img/work-2.jpg";
import work3 from "./assets/img/work-3.jpg";
import work4 from "./assets/img/work-4.jpg";
import work5 from "./assets/img/work-5.jpg";

/* ----------------Testimonials Img--------------- */
import test1 from "./assets/img/test-1.png";
import test2 from "./assets/img/test-2.png";
import test3 from "./assets/img/test-3.png";

/* ----------------Our Team Img--------------- */
import team1 from "./assets/img/team-1.jpg";
import team2 from "./assets/img/team-2.jpg";
import team3 from "./assets/img/team-3.jpg";
import team4 from "./assets/img/team-4.jpg";

/* ----------------Blog Img--------------- */
import blog1 from "./assets/img/blog-1.png";
import blog2 from "./assets/img/blog-2.jpg";
import blog3 from "./assets/img/blog-3.jpg";

/* ----------------Clients Img--------------- */
import client1 from "./assets/img/client-1.png";
import client2 from "./assets/img/client-2.png";
import client3 from "./assets/img/client-3.png";
import client4 from "./assets/img/client-4.png";

/* ------------------Intro Slider--------------- */

export const intro = [
  {
    title: "WE ARE DIGITAL AGENCY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse eget sodales egestas. Donec duis lacus, odio velit eu eget ac tortor. Ac sit ultricies hendrerit pellentesque arcu fames sit lectus. Scelerisque id bibendum velit cras.",
  },
  {
    title: "Portfolio",
    description:
      "Repellat pariatur hic. Nam earum a quisquam. Ex quae optio eligendi quibusdam aut.",
  },
  {
    title: "About",
    description:
      "Necessitatibus ab asperiores voluptatem. Temporibus ipsa at. Perspiciatis ad consectetur et tempore quos molestiae exercitationem.",
  },
];

/* ---------------------Card Data----------------- */

export const cardData = [
  {
    title: "APP DEVELOPMENT",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "Contact us",
    img: `${computerLine}`,
  },
  {
    title: "WEBSITE DEVELOPMENT",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "Contact us",
    img: `${terminal}`,
  },
  {
    title: "UI/UX DESIGNING",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "Contact us",
    img: `${artboard}`,
  },
  {
    title: "DIGITAL MARKETING",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "Contact us",
    img: `${vipDiamond}`,
  },
  {
    title: "SEO & CONTENT WRITING",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "Contact us",
    img: `${barChart}`,
  },
  {
    title: "GRAPHIC DESIGNING",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "Contact us",
    img: `${brushLine}`,
  },
];

/* -------------Works Card------------- */

export const worksData = [
  {
    img: `${work1}`,
  },
  {
    img: `${work2}`,
  },
  {
    img: `${work3}`,
  },
  {
    img: `${work4}`,
  },
  {
    img: `${work5}`,
  },
];

/* -------------Advance----------- */

export const advanceData = [
  {
    value: 9854,
    title: "Projects completed",
  },
  {
    value: 840,
    title: "Our Clients",
  },
  {
    value: 321,
    title: "Active clients",
  },
  {
    value: 5410,
    title: "Cups of coffee",
  },
  {
    value: 9854,
    title: "Projects completed",
  },
];

/* --------------Testimonials Slider-------------- */

export const testimonialsData = [
  {
    title: "Testimonials",
    name: "Jane Doe",
    position: "Company / CEO",
    description: "Voluptas repellendus iure dignissimos tenetur a...",
    img: `${test1}`,
  },
  {
    title: "Services",
    name: "Dave Good",
    position: "Programmer",
    description: "Quas ad accusantium excepturi exercitationem.",
    img: `${test2}`,
  },
  {
    title: "About",
    name: "Sam Smith",
    position: "Designer",
    description: "Dicta cumque quisquam exercitationem alias quo ...",
    img: `${test3}`,
  },
];

/* --------------Our Team-------------- */
export const ourTeamData = [
  {
    name: "Jane Doe",
    position: "Company / CEO",
    description:
      "Necessitatibus ab asperiores voluptatem. Temporibus ipsa at. Perspiciatis ad consectetur et tempore quos molestiae exercitationem.",
    img: `${team1}`,
  },
  {
    name: "Dave Good",
    position: "Programmer",
    description:
      "Doloribus aliquid blanditiis porro eaque. Labore dignissimos reprehenderit odit voluptates ex unde sequi quidem reiciendis. Possimus perspiciatis aut ab velit sed.",
    img: `${team2}`,
  },
  {
    name: "Sam Smith",
    position: "Designer",
    description:
      "Dolore excepturi velit sit. Hic eius deleniti commodi dolorem facere similique eius. Molestiae facere repudiandae voluptates laboriosam repudiandae ipsum.",
    img: `${team3}`,
  },
  {
    name: "Kaden Kohler",
    position: "International Web Analyst",
    description:
      "Omnis magni in quia nisi debitis at enim laborum eius. Nihil nostrum aliquid harum totam temporibus atque natus praesentium. Praesentium minima minima.",
    img: `${team4}`,
  },
];

/* --------------Blog-------------- */
export const blogData = [
  {
    img: `${blog1}`,
    label: "Champaign",
    date: new Date().toLocaleString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    title: "Vitae aperiam nemo",
    description:
      "Sed modi cum perferendis dignissimos aperiam ipsa ipsam odit dolor. Neque totam voluptate qui quos nihil iure facere. Facere ut at omnis alias.",
  },
  {
    img: `${blog2}`,
    label: "Palm Beach Gardens",
    date: new Date().toLocaleString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    title: "Facere laudantium tempore",
    description:
      "Debitis magnam vitae. Animi doloribus nisi labore sapiente. Commodi nesciunt nam esse.",
  },
  {
    img: `${blog3}`,
    label: "Lake Havasu City",
    date: new Date().toLocaleString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    title: "Porro velit ipsum",
    description:
      "Necessitatibus non fugit rerum pariatur ratione facilis nostrum vitae. Animi veniam eligendi aliquid. Magni ab dicta commodi.",
  },
];

/* -------------Clients Card------------- */

export const clientsData = [
  {
    img: `${client1}`,
  },
  {
    img: `${client2}`,
  },
  {
    img: `${client3}`,
  },
  {
    img: `${client4}`,
  },
];
