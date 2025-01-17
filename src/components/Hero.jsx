
export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://your-image-link.com/hero-image.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
            <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 md:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                    Welcome to Our Website
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-6">
                    Discover amazing content and services that can help you succeed.
                </p>
                <a href="#services">
                    <button className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
                        Get Started
                    </button>
                </a>
            </div>
        </section>
    );
}