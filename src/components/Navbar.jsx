import { Link } from "react-router-dom";
function Navbar({ title }) {

    
function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
    }

    return(
        <nav className="mb-6 rounded-xl bg-white px-6 py-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-slate-800">
                {title}
                </h1>

                <div className="flex flex-wrap gap-2">

            <Link to="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700
            transition hover:bg-slate-100">Home</Link>
            <Link to="/stats"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700
            transition hover:bg-slate-100">Stats</Link>
            <Link to="/settings"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700
            transition hover:bg-slate-100">Settings</Link>

            <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-4 py-2 text-white">
                Logout
                </button>
            </div>
        </div>
        </nav>
    );
}


export default Navbar;