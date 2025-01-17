import { useState } from 'react';

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className="container mx-auto bg-orange-500 h-16 flex justify-between items-center px-6 shadow-lg">

            <div className="text-2xl font-bold text-white">
                <a className="text-white hover:text-yellow-300 transition-all">Brand</a>
            </div>


            <button
                className="md:hidden text-white text-3xl"
                onClick={toggleNav}
            >
                ☰
            </button>

            <div
                className={`flex flex-col md:flex-row gap-4 md:gap-6 ${isNavOpen ? 'block' : 'hidden'} md:block md:flex-row`}
            >
                <a
                    className="text-white hover:text-yellow-300 transition-all px-4 py-2 rounded-lg hover:bg-orange-600"
                >
                    Home
                </a>
                <a
                    className="text-white hover:text-yellow-300 transition-all px-4 py-2 rounded-lg hover:bg-orange-600"
                >
                    Content
                </a>
                <a
                    className="text-white hover:text-yellow-300 transition-all px-4 py-2 rounded-lg hover:bg-orange-600"
                >
                    Footer
                </a>
            </div>
        </div>
    );
}