import React from 'react'

const Login = () => {
  return (
    <section
            className="h-300vh flex flex-col justify-center items-center text-center text-white bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/background.png')" }}
        >
            <div className="mb-12 mt-20 bg-transparent border-2 border-teal-500 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Log In</h2>
                <form className="space-y-4">
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
                        Log In                    </button>
                </form>
                <p className="text-center text-white mt-4">
                    New user? <a href="/register" className="text-teal-500 hover:underline">Sign Up Here</a>
                </p>
            </div>
        </section>
  )
}

export default Login
