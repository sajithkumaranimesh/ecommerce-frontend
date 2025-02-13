
export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/cinnamon-powder-table-wooden_62856-11.jpg?w=1380')" }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 md:px-8">
                <h1 className="mt-48 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                Authentic Ceylon Cinnamon for a Healthier You
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-6">
                Handpicked and ethically sourced, our Ceylon cinnamon is packed with rich aroma, delicate sweetness, and incredible health benefits. Elevate your lifestyle with the finest spice from Sri Lanka.
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