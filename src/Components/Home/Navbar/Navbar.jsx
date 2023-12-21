import React from 'react';

const Navbar = () => {


    return (
        // <div className="navbar bg-base-100">
        //     {/* site logo */}
        //     <div className="flex w-48">
        //         <a className="btn btn-ghost text-xl">Movie World</a>
        //     </div>
        //     {/* search bar */}
        //     <div className="form-control mx-auto">
        //         <input type="text" placeholder="Search" className="input input-bordered md:w-96 sm:w-auto" />
        //     </div>
        //     <div className='lg:visible  md:invisible sm:invisible'>
        //         <ul className='flex space-x-4'>
        //             <li><a >Get Pro</a></li>
        //             <li><a >Movies</a></li>
        //             <li><a >Watch List</a></li>
        //         </ul>
        //     </div>

        //     {/* hamburger menu */}
        //     <div className="flex-1 gap-2 lg:hidden">

        //         <div className="dropdown dropdown-end">
        //             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        //                 <div className="w-10 rounded-full">
        //                     <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        //                 </div>
        //             </div>
        //             <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        //                 <li><a >Get Pro</a></li>
        //                 <li><a >Movies</a></li>
        //                 <li><a >Watch List</a></li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
        <div className="navbar bg-base-100 ">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Movie World</a>
            </div>
            <div className="flex-1 gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>

            </div>
            <div className="flex-1 dropdown dropdown-end">
                <div className='flex mx-5'>
                    <div className='invisible md:visible mt-2'>
                        <ul className='flex flex-row space-x-2'>
                            <li><a>Get Pro</a></li>
                            <li><a>Movies</a></li>
                            <li><a>Watch list</a></li>
                        </ul>
                    </div>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar md:invisible">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 ">
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