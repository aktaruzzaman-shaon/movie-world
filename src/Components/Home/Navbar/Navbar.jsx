import React from 'react';

const Navbar = () => {


    return (
        <div className="navbar bg-base-100 mb-3">

            {/* Brand logo--------------------------- */}
            <div className="flex-1 ml-5">
                <a className="text-xl cursor-pointer">Movie World</a>
            </div>

            {/* Search field------------------------------ */}
            <div className="flex-1 gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input bg-white input-bordered  md:w-72" />
                </div>
            </div>

            {/* menu------------------------------------------- */}
            <div className="flex-1 dropdown dropdown-end">
                <div className='flex mx-5'>
                    <div className='invisible md:visible mt-2'>
                        <ul className='flex flex-row menu menu-sm'>
                            <li><a>Get Pro</a></li>
                            <li><a>Movies</a></li>
                            <li><a>Watch list</a></li>
                        </ul>
                    </div>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar md:invisible sm:mt-5">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-5 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-32 ">
                        <li><a>Get Pro</a></li>
                        <li><a>Movies</a></li>
                        <li><a>Watch list</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;