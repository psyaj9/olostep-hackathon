import React from 'react';

const HowItWorksSection = () => {
    return (
        <section id="how-it-works" className="py-16 bg-gray-900" >
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-white">How It Works</h2>
                <div className="flex flex-col space-y-6 max-w-2xl mx-auto">
                    <div className="card bg-transparent border-2 border-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4 text-white">Step 1: Enter Your Project URL</h3>
                        <p className="text-white">
                            Enter your web scraping project URL into our tool to get started.
                        </p>
                    </div>
                    <div className="card bg-transparent border-2 border-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4 text-white">Step 2: Select Data</h3>
                        <p className="text-white">
                            Choose the specific data you want to scrape from the web page.
                        </p>
                    </div>
                    <div className="card bg-transparent border-2 border-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4 text-white">Step 3: Receive Your Data</h3>
                        <p className="text-white">
                            Our tool processes the data and delivers it to you in the format you requested.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
