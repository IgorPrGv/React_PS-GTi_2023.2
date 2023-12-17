import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa6"
import { TfiClose } from "react-icons/tfi";
import React, { useState } from 'react'

function Navbar(){

    const [open, setOpen] = useState(false);

    return(
        <nav className="sticky top-0 z-10">
            <div className= "shadow-md w-full left-0">
                <div className="bg-primary items-center justify-between py-4 px-7 font-Poppins md:flex md:px-10">
                    {/* Logo */}
                    <div className=" font-bold text-2xl text-fifth flex items-center cursor-pointer">
                        <Link to='/'>Home</Link>
                    </div>

                    {/* Navbar button */}
                    <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden">
                        {open ? <TfiClose id="close" /> : <FaBars id="menu" />}
                    </div>

                    {/* Navbar options */}
                    <ul className={`md:flex md:items-center md:pb-0 pb-9 left-0 pl-7 md:pl-0 absolute md:static bg-primary w-full md:w-auto transition-all duration-500 ease-in ${open ? "top-15" : "-top-[490px]"}`}>
                        <li className=" text-xl md:ml-8 md:my-0 my-7 text-fifth hover:text-gray-400 duration-500">
                            <Link to='/sobre'>Sobre nós</Link>
                        </li>
                        <li className=" text-xl md:ml-8 md:my-0 my-7 text-fifth hover:text-gray-400 duration-500">
                            <Link to='/contato'>Contato</Link>
                        </li>
                        <li className=" text-xl md:ml-8 md:my-0 my-7 text-fifth hover:text-gray-400 duration-500">
                            <Link to='/quiz'>Quiz</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar 