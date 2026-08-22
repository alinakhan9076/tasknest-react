import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function LoginPage() {
    const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState("");

        const navigate = useNavigate();

        async function handleSubmit(e) {
            e.preventDefault();

            try {
                const response = await api.post("/auth/login", {
                    email,
                    password,
                });

                localStorage.setItem("token", response.data.token);

                window.location.href = "/";
            } catch (error) {
                setError(
                    error.response?.data?.error || 
                    "Login failed"
                );
            }
        }

        return (
            <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

                <form onSubmit={handleSubmit}
                className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

                    <h1 className="mb-6 text-2xl font-bold">
                        Login
                    </h1>

                    {error && (
                        <p className="mb-4 text-red-500">
                            {error}
                        </p>
                    )}

                    <input className="mb-4 w-ful rounded-lg border p-3"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                     <input className="mb-4 w-full rounded-lg border p-3"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                    <button className="w-full rounded-lg bg-blue-600 p-3 font-medium text-white"
                    type="submit">
                        Login
                    </button>
                    
                    <p className="mt-4 text-center">
                        Don't have an account?{" "}
                   
                    <button type="button"
                    onClick={() => navigate("/register")}
                    className="text-blue-600">
                        Register
                    </button>
                </p>
            </form>
         </div>
    );
    
}

export default LoginPage;