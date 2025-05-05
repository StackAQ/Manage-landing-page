import React from "react";
import "./index.css";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import { motion } from "framer-motion";

const nav = ["Pricing", "Product", "About Us", "Careers", "Community"];


const footernavOne = ["Home", "Pricing", "Products", "About Us"]
const footernavTwo = ["Careers", "Community", "Privacy", "Policy"]

const listManage = [
  {
    id: "01",
    name: "Track company-wide progress",
    cap: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: "02",
    name: "Advanced built-in reports",
    cap: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: "03",
    name: "Everything you need in one place",
    cap: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

const testimonials = [
  {
    img: "/avatar-anisha.png",
    name: "Anisha Li",
    cap: "“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    img: "/avatar-richard.png",
    name: "Richard Watts",
    cap: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!”",
  },
  {
    img: "/avatar-shanai.png",
    name: "Shanai Gough",
    cap: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

const App: React.FC = () => {
  return (
    <div>
      <div className="font-medium grid default-container z-50">
        <nav className="flex items-center justify-between w-full default-padding fixed top-0 left-0 bg-[rgba(238,235,235,0.8)] backdrop-blur-md z-50 shadow-md">
          <img
            src="/logo.svg"
            className="hover:scale-105 transition-transform duration-300"
            alt=""
          />
          <ul className="hidden lg:flex items-center gap-4">
            {nav.map((index) => (
              <a className="text-black hover:text-gray-600" href="">
                {index}
              </a>
            ))}
          </ul>
          <button className="orange-guy hidden lg:block">Get Started</button>
        </nav>

        <div className="p-4 md:p-8 lg:py-6 lg:px-16 lg:h-screen w-full flex flex-col lg:flex-row gap-12 justify-between items-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid gap-4 text-pretty animate-fade-in"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950">
              Get Started Bring everyone together to build better products
            </h1>
            <p className="text-gray-600 font-medium md:text-lg">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="orange-guy hidden lg:block">Get Started</button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-2/3 animate-fade-in"
          >
            <img src="/illustration-intro.svg" alt="" />
          </motion.div>
        </div>

        <div className="default-padding flex flex-col lg:flex-row gap-12 justify-between items-start animate-fade-in">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid gap-3"
          >
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-blue-950">
              What's different about Manage?
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams
            </p>
          </motion.div>
          <div className="grid gap-6">
            {listManage.map((e, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex items-baseline gap-4"
                key={index}
              >
                <div className="py-2 px-6 bg-orange-500 rounded-3xl font-bold text-white">
                  {e.id}
                </div>
                <div className="grid gap-4">
                  <span className="text-blue-950 font-semibold">{e.name}</span>
                  <span className="text-gray-600">{e.cap}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-16 default-padding justify-center items-center animate-fade-in">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl lg:text-4xl font-bold text-blue-950 text-center"
          >
            What's different about Manage?
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((e, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="my-4 lg:my-0"
                key={index}
              >
                <div className="bg-[#F1F1F3] p-4 rounded-xl text-center flex items-center flex-col justify-center relative gap-4">
                  <img
                    src={e.img}
                    className="w-16 lg:w-20 absolute -top-8 lg:-top-10"
                    alt="testimonial image"
                  />
                  <div className="grid gap-2 mt-10">
                    <span className="text-blue-950 font-semibold">
                      {e.name}
                    </span>
                    <span className="text-gray-600 font-medium text-balance">
                      {e.cap}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="orange-guy">Get Started</button>
        </div>

        <div className="bg-[url(/bg-simplify-section-desktop.svg)] bg-cover w-full animate-fade-in">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between items-center lg:flex-row gap-4 bg-orange-600 p-4 md:p-8 lg:py-12 lg:px-32"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white lg:w-1/2">
              Get Started Simplify how your team works today.
            </h1>
            <button className="w-fit py-2 px-5 h-fit rounded-3xl bg-white text-orange-600">
              Get Started
            </button>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col-reverse lg:flex-row justify-between items-center p-4 md:p-8 lg:py-12 lg:px-32 bg-blue-950 w-full gap-10 animate-fade-in"
        >
          <div className="grid gap-4">
            <img
              src="/logo.svg"
              className="brightness-200 contrast-200 saturate-200 "
              alt=""
            />
            <div className="flex items-center gap-4 text-xl text-white">
              <button className="hover:text-orange-500">
                <FaFacebook />
              </button>
              <button className="hover:text-orange-500">
                <FaYoutube />
              </button>
              <button className="hover:text-orange-500">
                <FaXTwitter />
              </button>
              <button className="hover:text-orange-500">
                <FaPinterest />
              </button>
              <button className="hover:text-orange-500">
                <FaInstagram />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-12">
            <div className="grid gap-2 text-white">
              {footernavOne.map((index) => (
                <button>{index}</button>
              ))}
            </div>
            <div className="grid gap-2 text-white">
              {footernavTwo.map((index) => (
                <button>{index}</button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="email"
              className="bg-white p-3 rounded-3xl"
              placeholder="Enter your email"
            />
            <button className="orange-guy">Go</button>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default App;
//   return (
//     <div>
//       <div className="font-medium grid default-container z-50">
//         {/* Navigation */}
//         <nav className="flex items-center justify-between w-full default-padding fixed top-0 left-0 bg-[rgba(238,235,235,0.9)] z-50 shadow-md backdrop-blur-md">
//           <img
//             src="/logo.svg"
//             alt="Logo"
//             className="hover:scale-105 transition-transform duration-300"
//           />
//           <ul className="hidden lg:flex items-center gap-4">
//             {nav.map((index) => (
//               <a
//                 key={index}
//                 className="text-black hover:text-gray-600 transition-colors duration-300"
//                 href="#"
//               >
//                 {index}
//               </a>
//             ))}
//           </ul>
//           <button className="orange-guy hidden lg:block hover:scale-105 transition-transform duration-300">
//             Get Started
//           </button>
//         </nav>

//         {/* Main Content */}
//         <div className="default-padding lg:h-screen w-full flex flex-col lg:flex-row gap-12 justify-between items-center pt-20">
//           <div className="grid gap-4 text-pretty animate-fade-in">
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950">
//               Get Started Bring everyone together to build better products
//             </h1>
//             <p className="text-gray-600 font-medium md:text-lg">
//               Manage makes it simple for software teams to plan day-to-day tasks
//               while keeping the larger team goals in view.
//             </p>
//             <button className="orange-guy hidden lg:block hover:scale-105 transition-transform duration-300">
//               Get Started
//             </button>
//           </div>
//           <div className="lg:w-2/3">
//             <img
//               src="/illustration-intro.svg"
//               alt="Illustration"
//               className="animate-slide-in"
//             />
//           </div>
//         </div>

//         {/* Other Sections */}
//         <div className="default-padding flex flex-col lg:flex-row gap-12 justify-between items-start">
//           <div className="grid gap-3">
//             <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-blue-950">
//               What's different about Manage?
//             </h1>
//             <p className="text-sm md:text-base lg:text-lg text-gray-600">
//               Manage provides all the functionality your team needs, without the
//               complexity. Our software is tailor-made for modern digital product
//               teams.
//             </p>
//           </div>
//           <div className="grid gap-6">
//             {listManage.map((e, index) => (
//               <div
//                 className="flex items-baseline gap-4 animate-fade-in"
//                 key={index}
//               >
//                 <div className="py-2 px-6 bg-orange-500 rounded-3xl font-bold text-white">
//                   {e.id}
//                 </div>
//                 <div className="grid gap-4">
//                   <span className="text-blue-950 font-semibold">{e.name}</span>
//                   <span className="text-gray-600">{e.cap}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className="flex flex-col-reverse lg:flex-row justify-between items-center p-4 md:p-8 lg:py-12 lg:px-32 bg-blue-950 w-full gap-10">
//           <div className="grid gap-4">
//             <img
//               src="/logo.svg"
//               className="brightness-200 contrast-200 saturate-200 hover:scale-105 transition-transform duration-300"
//               alt="Logo"
//             />
//             <div className="flex items-center gap-4 text-xl text-white">
//               <button className="hover:text-orange-500 transition-colors duration-300">
//                 <FaFacebook />
//               </button>
//               <button className="hover:text-orange-500 transition-colors duration-300">
//                 <FaYoutube />
//               </button>
//               <button className="hover:text-orange-500 transition-colors duration-300">
//                 <FaXTwitter />
//               </button>
//               <button className="hover:text-orange-500 transition-colors duration-300">
//                 <FaPinterest />
//               </button>
//               <button className="hover:text-orange-500 transition-colors duration-300">
//                 <FaInstagram />
//               </button>
//             </div>
//           </div>
//           <div className="flex items-center gap-12">
//             <div className="grid gap-2 text-white">
//               {footernavOne.map((index) => (
//                 <button key={index} className="hover:underline">
//                   {index}
//                 </button>
//               ))}
//             </div>
//             <div className="grid gap-2 text-white">
//               {footernavTwo.map((index) => (
//                 <button key={index} className="hover:underline">
//                   {index}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="flex items-center gap-3">
//             <input
//               type="email"
//               className="bg-white p-3 rounded-3xl"
//               placeholder="Enter your email"
//             />
//             <button className="orange-guy hover:scale-105 transition-transform duration-300">
//               Go
//             </button>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default App;