import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logBG from '../../assets/9142206.jpg';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { motion } from "framer-motion";

const LogIn = () => {
    const { signInUser, signInbyGoogle, setSpinner } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Demo account credentials
    const demoAccount = {
        email: "sakib@shishir.com",
        password: "123asD"
    };

    const handleDemoLogin = () => {
        setSpinner(true);
        signInUser(demoAccount.email, demoAccount.password)
            .then((result) => {
                const loggedInUser = result.user;
                toast.success('Welcome to your demo account!');
                const user = { email: demoAccount.email };
                
                axios.post(`${import.meta.env.VITE_BASE_URL}/jwt`, user, { withCredentials: true })
                    .then(() => {
                        setTimeout(() => {
                            navigate(location?.state ? location.state : '/');
                        }, 1500);
                    });
            })
            .catch((error) => {
                toast.error("Demo login failed. Please try again.");
                console.error("Demo login error:", error);
            })
            .finally(() => {
                setSpinner(false);
            });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        setSpinner(true);
        signInUser(email, password)
            .then((result) => {
                const loggedInUser = result.user;
                toast.success('Login successful!');
                const user = { email };
                
                axios.post(`${import.meta.env.VITE_BASE_URL}/jwt`, user, { withCredentials: true })
                    .then(() => {
                        setTimeout(() => {
                            navigate(location?.state ? location.state : '/');
                        }, 1500);
                        e.target.reset();
                    });
            })
            .catch((error) => {
                const errorMessage = error.message === "Firebase: Error (auth/invalid-credential)." 
                    ? "Invalid email or password" 
                    : error.message.split('/')[1]?.split(')')[0]?.replace(/-/g, ' ');
                toast.error(errorMessage || "Login failed. Please try again.");
            })
            .finally(() => {
                setSpinner(false);
            });
    };

    const handleLogInWithGoogle = () => {
        setSpinner(true);
        signInbyGoogle()
            .then((result) => {
                const user = result.user;
                const { email, displayName: name, photoURL: photo } = user;

                axios.post(
                    `${import.meta.env.VITE_BASE_URL}/api/users`,
                    { name, email, photo, role: "user" },
                    { withCredentials: true }
                )
                .then(() => {
                    axios.post(`${import.meta.env.VITE_BASE_URL}/jwt`, { email }, { withCredentials: true })
                        .then(() => {
                            toast.success("Google login successful!");
                            setTimeout(() => {
                                navigate(location?.state ? location.state : "/");
                            }, 1500);
                        });
                });
            })
            .catch((error) => {
                toast.error("Google login failed. Please try again.");
                console.error("Google login error:", error);
            })
            .finally(() => {
                setSpinner(false);
            });
    };

    return (
        <div className="relative w-full h-[700px] overflow-hidden py-10">
            {/* Background with overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-75"
                style={{ backgroundImage: `url(${logBG})` }}
            />
            
            {/* Main content */}
            <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md"
                >
                    <form onSubmit={onSubmit}>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/20">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 p-6 text-center">
                                <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
                                <p className="text-white/80 mt-1">Sign in to continue</p>
                            </div>

                            {/* Form body */}
                            <div className="p-6 space-y-6">
                                {/* Email field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                {/* Password field */}
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            autoComplete="current-password"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-10"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-3 top-3 text-white/70 hover:text-white transition"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                    <div className="flex justify-end mt-1">
                                        <Link 
                                            to="/forgot-password" 
                                            className="text-sm text-blue-300 hover:text-blue-200 transition"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>

                                {/* Login button */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    Sign In
                                </motion.button>

                                {/* Demo account button */}
                                <motion.button
                                    type="button"
                                    onClick={handleDemoLogin}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                    className="w-full py-3 px-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                                >
                                    {isHovering && (
                                        <motion.span
                                            className="absolute inset-0 bg-white/10"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                    Try Demo Account
                                </motion.button>

                                {/* Divider */}
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-white/20" />
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="px-2 bg-transparent text-sm text-white/70">
                                            Or continue with
                                        </span>
                                    </div>
                                </div>

                                {/* Social login */}
                                <div className="flex justify-center">
                                    <motion.button
                                        type="button"
                                        onClick={handleLogInWithGoogle}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center gap-2 py-2 px-4 bg-white text-gray-800 font-medium rounded-lg shadow hover:shadow-md transition"
                                    >
                                        <FaGoogle className="text-blue-500" />
                                        Sign in with Google
                                    </motion.button>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="bg-white/5 px-6 py-4 text-center">
                                <p className="text-white/80 text-sm">
                                    Don't have an account?{' '}
                                    <Link 
                                        to="/register" 
                                        className="font-medium text-blue-300 hover:text-blue-200 transition"
                                    >
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>

            {/* Toast notifications */}
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                toastStyle={{ backgroundColor: '#3B82F6' }}
            />
        </div>
    );
};

export default LogIn;