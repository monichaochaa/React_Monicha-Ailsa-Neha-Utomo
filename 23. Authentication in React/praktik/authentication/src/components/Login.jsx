import React , { useState, useEffect } from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
    
        const dummyUser = { username: 'monicha', password: '12345' };
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.username === username && storedUser.password === password) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.reload();
          } else if (username === dummyUser.username && password === dummyUser.password) {
            localStorage.setItem('user', JSON.stringify(dummyUser));
            localStorage.setItem('isLoggedIn', 'true');
            window.location.reload();
          } else {
            setErrorMessage('Invalid username or password');
          }
        };

        const handleLogout = () => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('user');
            window.location.reload();
          };

        return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
            <div>
                <label className="block text-gray-600 font-medium mb-1">Username:</label>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
            <div>
                <label className="block text-gray-600 font-medium mb-1">Password:</label>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
            {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
            <button type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            >
                Login
                </button>
            </form>
            <button 
            onClick={handleLogout}
            className="w-full mt-4 py-2 px-4 bg-gray-300 text-gray-700 font-bold rounded-lg shadow-md hover:bg-gray-400 transition duration-300"
            >
                Logout
                </button>
            </div>
        </div>
        );
    };
        
export default Login;