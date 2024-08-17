import React from 'react';

const Register = () => {
    return (
        <section
            className="h-300vh flex flex-col justify-center items-center text-center text-white bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/background.png')" }}
        >
            <div className="w-full flex justify-between px-8 pt-4 absolute top-0">
                <a href="/" className="text-white hover:text-gray-300 text-lg">
                    Home
                </a>
                <a href="/login" className="text-white hover:text-gray-300 text-lg">
                    Log In
                </a>
            </div>
            <div className="mb-12 mt-20 bg-transparent border-2 border-teal-500 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign Up</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="first-name" className="block text-white mb-1 text-left">First Name</label>
                        <input
                            id="first-name"
                            type="text"
                            placeholder="Enter your first name"
                            className="w-full p-2 border border-white rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-white mb-1 text-left">Last Name</label>
                        <input
                            id="last-name"
                            type="text"
                            placeholder="Enter your last name"
                            className="w-full p-2 border border-white rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-white mb-1 text-left">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-2 border border-white rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-white mb-1 text-left">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-2 border border-white rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition-colors"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-white mt-4">
                    Already an existing user? <a href="/login" className="text-teal-500 hover:underline">Login Here</a>
                </p>
            </div>
        </section>
    );
};

export default Register;
