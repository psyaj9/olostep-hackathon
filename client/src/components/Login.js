import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5002/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('userId', data.user._id)
                window.location.href = '/home';
            } else {
                setError(data.msg || 'Login failed. Please check your credentials and try again.');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('An error occurred while logging in. Please try again later.');
        }
    };

    return (
        <section
            className="h-300vh flex flex-col justify-center items-center text-center text-white bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/background.png')" }}
        >
            <div className="w-full flex justify-between px-8 pt-4 absolute top-0">
                <a href="/" className="text-white hover:text-gray-300 text-lg">
                    Home
                </a>
                <a href="/register" className="text-white hover:text-gray-300 text-lg">
                    Sign Up
                </a>
            </div>
            <div className="mb-12 mt-20 bg-transparent border-2 border-teal-500 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Log In</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-white mb-1 text-left">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full p-2 border border-white rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-white mb-1 text-left">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full p-2 border border-white rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition-colors"
                    >
                        Log In
                    </button>
                </form>
                <p className="text-center text-white mt-4">
                    New user? <a href="/register" className="text-teal-500 hover:underline">Sign Up Here</a>
                </p>
            </div>
        </section>
    );
};

export default Login;
