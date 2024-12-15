
// 
import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.png";

const Navbar = () => {
	return (
		<div className="bg-[#043873] py-4 px-6 md:px-10 lg:px-[220px] flex justify-between items-center">
			{/* Logo Section */}
			<div>
				<Image src={logo} alt="logo" width={191} height={34} />
			</div>

			{/* Links and Button Section */}
			<div className="hidden md:flex w-full md:w-auto md:h-[60px] justify-end items-center"> {/* Changed justify-between to justify-end */}
				{/* Navigation Links */}
				<ul className="hidden md:flex space-x-6 lg:space-x-10 text-[14px] md:text-[16px] lg:text-[18px] font-semibold leading-[23px] text-white">
					<li className="hover:text-gray-300 cursor-pointer">Products</li>
					<li className="hover:text-gray-300 cursor-pointer">Services</li>
					<li className="hover:text-gray-300 cursor-pointer">Resources</li>
					<li className="hover:text-gray-300 cursor-pointer">Contact</li>
				</ul>

				{/* Login Button */}
				<button className="hidden md:block ml-8 py-2 px-6 lg:py-4 lg:px-10 rounded-lg bg-[#FFE492] text-[#043873] font-bold hover:bg-yellow-300 transition-all"> {/* Increased margin-left */}
					Login
				</button>
			</div>

			{/* Mobile Menu Button */}
			<div className="md:hidden">
				<button className="text-white text-2xl">☰</button>
			</div>
		</div>
	);
};

export default Navbar;




