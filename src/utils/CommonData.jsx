import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoBagRemoveSharp } from "react-icons/io5";
import { FaMapLocation } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import TeacherManagementUI from "../Images/Portfolio/Teacher-Management-UI.png";
import Ecommerce from "../Images/Portfolio/Ecommerce.png";
import BirthdayWishes from "../Images/Portfolio/Birthday-wishes.png";
import Pagination from "../Images/Portfolio/Pagination.png";
import counter from "../Images/Portfolio/counter.png";
import FoodCards from "../Images/Portfolio/Food-cards.png";
import GuessTheNumber from "../Images/Portfolio/Guess-The-Number.png";
import HabitsTracker from "../Images/Portfolio/Habits-Tracker.png";
import LiveChat from "../Images/Portfolio/live-chat.png";
import ProductsCards from "../Images/Portfolio/Products-Cards.png";
import StaticWebsite from "../Images/Portfolio/Static-Website.png";
import TodoList from "../Images/Portfolio/Todo-List.png";
import NdhealthShopImg from "../Images/Portfolio/ndhealth.shop-Img.png";
import NdhealthImg from "../Images/Portfolio/ndhealth.ai.png";
import NdOrgImg from "../Images/Portfolio/ndorg.in-Img.png";
import NdSkillsImg from "../Images/Portfolio/ndskills-Img.png";

export const MyWorks = [
  {
    id: 1,
    title: "Ndhealth.Shop",
    img: NdhealthShopImg,
    description:
      "An e-commerce platform for health products with a clean and modern design.",
    link: "https://ndhealth.shop/",
    Techstack: "HTML, TailwindCss, Javascript,React,Nodejs,MongoDB",
  },
  {
    id: 2,
    title: "Newdirections",
    img: NdOrgImg,
    description:
      "Organization website providing information, resources, and support services.",
    link: "https://newdirections.org.in/",
    Techstack: "HTML, TailwindCss, Javascript,React",
  },
  {
    id: 3,
    title: "Nd Skills",
    img: NdSkillsImg,
    description:
      "A learning platform offering courses and skill development programs.",
    link: "https://ndskills.in/",
    Techstack: "HTML,Bootstrap,CSS, Javascript,React",
  },
  {
    id: 4,
    title: "Ndhealth",
    img: NdhealthImg,
    description:
      "Healthcare-focused AI-driven website providing health solutions.",
    link: "https://ndhealth.ai/",
    Techstack: "HTML, TailwindCss, Javascript,React,Nodejs,MongoDB",
  },
  {
    id: 5,
    title: "To Do List",
    img: TodoList,
    description:
      "A simple and efficient to-do list app to manage your daily tasks.",
    link: "https://new-todo-list-phi.vercel.app/",
    Techstack: "HTML, TailwindCss,React",
  },
  {
    id: 6,
    title: "Product Store",
    img: ProductsCards,
    description:
      "A product store app with cart functionality for e-commerce experiences.",
    link: "https://cart-products-functionality.vercel.app/",
    Techstack: "HTML,Javascript,Bootstrap,CSS,React",
  },
  {
    id: 7,
    title: "Ecommerce",
    img: Ecommerce,
    description:
      "A full-fledged e-commerce platform with modern UI and product browsing.",
    link: "https://e-commerce-sage-zeta.vercel.app/",
    Techstack: "HTML,Bootstrap,CSS, Javascript,React",
  },
  {
    id: 8,
    title: "Chit-Chat",
    img: LiveChat,
    description:
      "A real-time chat application for instant messaging between users.",
    link: "https://real-time-chat-application-umber.vercel.app/",
    Techstack: "HTML,Material UI, Javascript,React,Nodejs,MongoDB,ExpressJs",
  },
  {
    id: 9,
    title: "MRR Fashions",
    img: StaticWebsite,
    description:
      "A static fashion brand website showcasing products and collections.",
    link: "https://vercel.com/roopamolakas-projects/mrr-fashions-site",
    Techstack: "HTML,CSS",
  },
  {
    id: 10,
    title: "Birthday Wishes",
    img: BirthdayWishes,
    description:
      "A creative birthday wishes web app with customizable greetings.",
    link: "https://birthday-alpha-bay.vercel.app/",
    Techstack: "HTML,CSS",
  },
  {
    id: 11,
    title: "Food Cards",
    img: FoodCards,
    description:
      "A food cards UI project displaying food items in a card layout.",
    link: "https://react-cards-kohl.vercel.app/",
    Techstack: "HTML, CSS,Bootstrap,Javascript,React",
  },
  {
    id: 12,
    title: "Counter",
    img: counter,
    description:
      "A simple counter app with increment, decrement, and reset functionality.",
    link: "https://react-timer-task.vercel.app/",
    Techstack: "HTML, CSS,Bootstrap,Javascript,React",
  },
  {
    id: 13,
    title: "Habits Tracker",
    img: HabitsTracker,
    description:
      "A habit tracker app to build and track daily habits effectively.",
    link: "https://habit-tracker-gray-three.vercel.app/",
    Techstack: "HTML, TailwindCss,Javascript,React",
  },
  {
    id: 14,
    title: "Pagination",
    img: Pagination,
    description: "A pagination project demonstrating data navigation in pages.",
    link: "https://pagination-delta-eight.vercel.app/",
    Techstack: "HTML, TailwindCss,Javascript,React",
  },
  {
    id: 15,
    title: "Teacher Management UI",
    img: TeacherManagementUI,
    description:
      "A management UI for handling teachers, courses, and classroom activities.",
    link: "https://teacher-management-ui-alpha.vercel.app/",
    Techstack: "HTML, TailwindCss,Nextjs,Typescript",
  },
  {
    id: 16,
    title: "Guess The Number",
    img: GuessTheNumber,
    description:
      "A fun guessing game where players try to guess the correct number.",
    link: "https://guess-the-number-ruddy-five.vercel.app/",
    Techstack: "HTML, TailwindCss,Javascript,React",
  },
  // {
  //   id: 17,
  //   title: "To Do List",
  //   img: TodoList,
  //   description:
  //     "A duplicate entry of the to-do list project for task management.",
  //   link: "https://new-todo-list-phi.vercel.app/",
  //   Techstack: "HTML, TailwindCss, Javascript,React,Nodejs,MongoDB",
  //   Github: "",
  // },
];

export const navLinks = [
  {
    name: "HOME",
    Link: "/",
    icon: FaHome,
  },
  {
    name: "ABOUT",
    Link: "/about-me",
    icon: IoMdPerson,
  },
  {
    name: "PORTFOLIO",
    Link: "/portfolio",
    icon: IoBagRemoveSharp,
  },
  {
    name: "CONTACT",
    Link: "/contact",
    icon: MdOutlineContactPhone,
  },
];

export const InputFields = [
  {
    label: "First Name",
    name: "fName",
    type: "text",
  },
  {
    label: "Last Name",
    name: "LName",
    type: "text",
  },
  {
    label: "Mobile Number",
    name: "phone",
    type: "tel",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
  },
];

export const ContactInfo = [
  {
    name: "Name",
    info: "Roopa Molaka",
    Link: "/",
    icon: IoMdPerson,
  },
  {
    name: "Location",
    Link: "/about-me",
    icon: FaMapLocation,
    info: "Madhuranagar, Hyderabad-500073.",
  },
  {
    name: "Call Me",
    Link: "/portfolio",
    icon: FaPhoneAlt,
    info: "+91 9346724006",
  },
  {
    name: "Email Me",
    Link: "/contact",
    icon: MdEmail,
    info: "roopamolaka@gmail.com",
  },
];
