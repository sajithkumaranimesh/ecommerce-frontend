import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import from react-router-dom

export default function Navbar({ openCartModal, cartItemCount }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className="container mx-auto bg-orange-500 h-16 flex justify-between items-center px-6 shadow-lg">
            <div className="text-2xl font-bold text-white">
                <a className="text-white hover:text-yellow-300 transition-all">
                    Brand
                </a>
            </div>

            <button className="md:hidden text-white text-3xl" onClick={toggleNav}>
                ☰
            </button>

            <div
                className={`flex flex-col md:flex-row gap-4 md:gap-6 ${isNavOpen ? "block" : "hidden"
                    } md:block md:flex-row`}
            >
                <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
                    {/* Replace Link with button to open the modal */}
                    <button onClick={openCartModal} className="relative flex">
                        <svg className="flex-1 w-8 h-8 fill-current" >
                            <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                        </svg>
                        {cartItemCount > 0 && (
                            <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 text-white font-mono text-sm leading-tight text-center">
                                {cartItemCount}
                            </span>
                        )}
                    </button>
                </li>
            </div>
        </div>
    );
}
