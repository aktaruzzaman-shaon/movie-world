import React from 'react';

const Navbar = () => {


    return (
        <div className="navbar bg-base-100">
            {/* site logo */}
            <div className="flex w-48">
                <a className="btn btn-ghost text-xl">Movie World</a>
            </div>
            {/* search bar */}
            <div className="form-control mx-auto">
                <input type="text" placeholder="Search" className="input input-bordered md:w-96 sm:w-auto" />
            </div>
            <div className=''>
                <ul className='flex space-x-4'>
                    <li><a >Get Pro</a></li>
                    <li><a >Movies</a></li>
                    <li><a >Watch List</a></li>
                </ul>
            </div>

            {/* hamburger menu */}
            <div className="flex-1 gap-2 md:hidden">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;