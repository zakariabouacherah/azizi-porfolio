import React from "react";

const Navbar = () => {
  return (
    // <nav className="bg-[#e8e8e8] border-gray-200 fixed top-0 left-0 w-full z-50">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a href="#home" className="text-2xl text-secondary rtl:space-x-reverse">
    //       AI
    //     </a>
    //     <button
    //       data-collapse-toggle="navbar-default"
    //       type="button"
    //       className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //       aria-controls="navbar-default"
    //       aria-expanded="false"
    //     >
    //       <span className="sr-only">Open main menu</span>
    //       <svg
    //         className="w-5 h-5"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 17 14"
    //       >
    //         <path
    //           stroke="currentColor"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           d="M1 1h15M1 7h15M1 13h15"
    //         />
    //       </svg>
    //     </button>
    //     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    //       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             aria-current="page"
    //           >
    //             Accueil
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#a-propos"
    //             className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             A Propos
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#compétences"
    //             className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Compétence
    //           </a>
    //         </li>

    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Annexes
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav className=" bg-slate-600/20 fixed top-0 left-0 w-full backdrop-blur-lg z-50">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto p-4">
        <div className="text-secondary font-bold text-2xl cursor-pointer">
          <a href="#" className="drop-shadow-xl shadow-secondary">
            AI
          </a>
        </div>
        <div>
          <ul className="flex items-center gap-6 text-lg capitalize">
            <li className="hover:text-secondary transition">
              <a href="#"> Accueil</a>
            </li>
            <li className="hover:text-secondary transition">
              <a href="#a-propos"> à propos</a>
            </li>
            <li className="hover:text-secondary transition">
              <a href="#compétences"> Compétences</a>
            </li>
            <li className="hover:text-secondary transition">
              <a href="#annexes"> Annexes</a>
            </li>
            <li className="hover:text-secondary transition">
              <a href="#contact"> Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
