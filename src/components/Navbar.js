import React from "react";
import { Link } from "react-router-dom";
import logo from './images/Logo.svg';
import toast from "react-hot-toast";

function Navbar(props) {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">

            <Link to="/">
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
            </Link>

            <nav>
                <ul className="flex gap-x-6 text-slate-100">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Login - Signup - LogOut - Dashboard */}

            <div className="flex items-center gap-x-4">
                { !isLoggedIn &&
                    <Link to="/login">
                        <button className="bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700">
                            Log in
                        </button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/signup">
                        <button className="bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700">
                            Sign up
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/">
                        <button onClick={() => {
                            setIsLoggedIn(false)
                            toast.success("Logged Out");
                        }}
                        className="bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700">
                            Log out
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/Dashboard">
                        <button className="bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700">
                            Dashboard
                        </button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar;