
import React from "react";
import Image from "next/image";

import logo from "@/app/assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#043873] text-[#FFFFFF] pt-[100px] pb-[32px] w-full px-6 md:px-10 lg:px-[220px] cursor-pointer">
            <div className="container mx-auto">
                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-[100px]">
                    {/* Column 1: Logo and Description */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image src={logo} width={144} height={34} alt="Logo" />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px] font-light leading-[24px] lg:leading-[30px] text-[#F7F7EE] tracking-[-2%] max-w-[240px]">
                            Whitepace was created for the new ways we live and work. We make a better workspace around the world.
                        </p>
                    </div>

                    {/* Column 2: Product */}
                    <div className="max-w-full lg:max-w-[295px]">
                        <p className="font-bold text-[16px] md:text-[18px] mb-4 tracking-[-2%]">Product</p>
                        <ul className="space-y-2">
                            <li className="text-[#FFE492] text-[14px] md:text-[16px] font-light leading-[20px] tracking-[-2%]">Overview</li>
                            <li className="text-[14px] md:text-[16px] font-light leading-[20px] tracking-[-2%]">Pricing</li>
                            <li className="text-[14px] md:text-[16px] font-light leading-[20px] tracking-[-2%]">Customer Stories</li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="max-w-full lg:max-w-[295px]">
                        <p className="font-bold text-[16px] md:text-[18px] mb-4 tracking-[-2%]">Resources</p>
                        <ul className="space-y-2">
                            <li className="text-[14px] md:text-[16px] font-light leading-[20px] tracking-[-2%]">Blog</li>
                            <li className="text-[14px] md:text-[16px] font-light leading-[20px] tracking-[-2%]">Guides & Tutorials</li>
                            <li className="text-[14px] md:text-[16px] font-light leading-[20px] tracking-[-2%]">Help Center</li>
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div className="max-w-full lg:max-w-[295px]">
                        <p className="font-bold text-[16px] md:text-[18px] mb-4">Company</p>
                        <ul className="space-y-2">
                            <li className="text-[14px] md:text-[16px] font-light leading-[20px] tracking-[-2%]">About Us</li>
                            <li className="text-[14px] md:text-[16px] font-light leading-[20px] tracking-[-2%]">Careers</li>
                            <li className="text-[14px] md:text-[16px] font-light leading-[20px] tracking-[-2%]">Media Kit</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 border-t border-[#FFFFFF]/30 pt-4 text-center">
                    <p className="text-[12px] md:text-[14px]">©2024 Created by Kiran Ahmed</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;