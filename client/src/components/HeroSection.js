import React from 'react';

const HeroSection = () => {
    return (
        <section id="home" className="h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.png')" }}>
            <div className="typewriter">
                <h1 className="text-5xl font-bold mb-6">Web Scraping Made Easy</h1>
            </div>
            <p className="text-lg mb-8">Just provide your scraping project URL, and let our tool handle the rest.</p>
            <div className="space-x-4">
                <button className="inline-flex items-center bg-teal-500 py-2 px-6 rounded-full hover:bg-teal-400">
                    Get Started
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </button>
                <button className="bg-transparent border border-white py-2 px-6 rounded-full hover:border-teal-400">Learn More</button>
            </div>
        </section>
    );
};

export default HeroSection;
