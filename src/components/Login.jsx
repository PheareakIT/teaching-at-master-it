import React, { useState } from 'react';
import fullStack from '../assets/images/react-tailwind.png';
import userData from '../data/users';
import { useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';

function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault(); 

        const userExists = userData.find(
            (u) => u.email === user.email && u.password === user.password
        );

        if (userExists) {
            toast.success("Login Successful !");
            setTimeout(() => {
                navigate('/home');
            }, 2000);
        } else {
            toast.error("Incorrect Email or Password !!!");
        }
    };

    const handleRegister = () => {
        toast.error("លក្ខណៈពិសេសនេះកំពុងអភិវឌ្ឍ !!!"); // Fixed typo in toast text
    };

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans flex">
            <Toaster position="top-center" reverseOrder={false} />

            {/* Left Side: Image (Hidden on mobile, beautifully scaled on desktop) */}
            <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f172a] z-10" />
                <img 
                    className="w-full h-full object-cover object-center transform scale-105 hover:scale-100 transition-transform duration-700" 
                    src={fullStack} 
                    alt="Full Stack Web Development" 
                />
            </div>

            {/* Right Side: Login Form */}
            <div className="w-full lg:w-1/2 flex justify-center items-center p-6 sm:p-12 relative">
                {/* Decorative background glow behind the form */}
                <div className="absolute w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl top-1/4 right-1/4 pointer-events-none" />
                
                <form onSubmit={handleLogin} className="w-full max-w-md relative z-10">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md shadow-2xl p-8 flex flex-col gap-6">
                        
                        <div className="text-center">
                            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                Welcome Back
                            </h1>
                            <p className="text-sm text-slate-400 mt-2">
                                Learn Web Development with React & Tailwind
                            </p>
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</label>
                            <input 
                                className="bg-slate-950/60 border border-slate-800 focus:border-cyan-500 rounded-xl w-full p-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                                type="email"
                                placeholder="name@example.com"
                                required
                                name="email"
                                value={user.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Password Input */}
                        <div className="flex flex-col gap-1.5">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Password</label>
                                <a href="#forgot" className="text-xs text-cyan-400 hover:underline transition">Forgot password?</a>
                            </div>
                            <input
                                className="bg-slate-950/60 border border-slate-800 focus:border-cyan-500 rounded-xl w-full p-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                                type="password"
                                placeholder="••••••••"
                                required
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-2">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-slate-950 font-bold w-full py-3 rounded-xl shadow-lg shadow-cyan-500/10 active:scale-[0.98] transition-all cursor-pointer"
                            >
                                Sign In
                            </button>

                            <button
                                type="button" /* Crucial change: prevents form submission triggers */
                                onClick={handleRegister}
                                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold w-full py-3 rounded-xl active:scale-[0.98] transition-all cursor-pointer"
                            >
                                Register
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;