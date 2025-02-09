import React from 'react'

export default function Navbar() {
  return (
    // <div className='h-[20vh] bg-red-500'>
    //   <div className='h-[65%] bg-blue-500'>
    //     <p></p>
    //     <input type="text" />
    //   </div>
    // </div>
    // <!-- Navbar Component -->
    <nav className="bg-[#ededed] shadow-md p-4 font-sans">
      <div className='md:hidden flex justify-evenly items-center'>
        <p className='text-[5vw] font-bold'>HSTORE</p>
        <ul className='flex gap-2'>
          <li className='flex font-semibold text-gray-700'>About</li>
          <li className='flex font-semibold text-gray-700'>Contact</li>
          <li className='flex font-semibold text-gray-700'>Cart</li>
        </ul>
      </div>
      <div className="container mx-auto flex items-center justify-between">
        {/* <!-- Logo --> */}
        <a href="#" className="hidden md:block text-2xl font-bold text-black">HSTORE</a>

        {/* <!-- Search Bar -->afs */}
        <div className="relative w-full max-w-md">
          <input type="text" placeholder="Search products..." className="w-[100%] p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"></input>
          <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400 font-semibold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m1.6-5.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
          </svg>
        </div>

        {/* NAV LINKS  */}
        <ul className="md:flex space-x-6 hidden lg:space-x-3">
          <li >
            <a href="#" className="relative text-gray-700 font-semibold hover:text-indigo-500 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[4px] after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full">
              Home
            </a>
          </li >
          <li >
            <a href="#" className="relative text-gray-700 font-semibold hover:text-indigo-500 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[4px] after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full">
              Shop
            </a>
          </li >
          <li >
            <a href="#" className="relative text-gray-700 font-semibold hover:text-indigo-500 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[4px] after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full">
              About
            </a>
          </li >
          <li >
            <a href="#" className="relative text-gray-700 font-semibold hover:text-indigo-500 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[4px] after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </a>
          </li >
        </ul>



      </div>
    </nav>

  )
}

























































































































// "use client"
// import React, { useState } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <a href="#" className="text-2xl font-bold text-black">
//           HSTORE
//         </a>

//         {/* Search Bar (hidden on small screens) */}
//         <div className="relative w-full max-w-md hidden md:block">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//           />
//           <svg
//             className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M21 21l-4.35-4.35m1.6-5.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
//             />
//           </svg>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? "✖" : "☰"}
//         </button>

//         {/* Navigation Links */}
//         <ul
//           className={`flex space-x-6 md:flex ${
//             isOpen ? "flex-col items-center absolute top-16 left-0 w-full bg-white shadow-md p-4 md:relative md:top-0 md:p-0" : "hidden md:flex"
//           }`}
//         >
//           {["Home", "Shop", "About", "Contact"].map((link) => (
//             <li  key={link}>
//               <a
//                 href="#"
//                 className="relative text-gray-700 font-semibold hover:text-indigo-500 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[4px] after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {link}
//               </a>
//             </li >
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }
