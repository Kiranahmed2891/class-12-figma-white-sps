import React from 'react';
import Image from 'next/image';
import arrow from '@/app/assets/arrow.png';
import img from '@/app/assets/Img.png';
import w from '@/app/assets/w.png';

const Project = () => {
    return (
        <div className="flex flex-col items-center justify-start w-full px-6 md:px-10 lg:px-20 py-20 gap-16 bg-[#F0F4F8]">
            {/* First Card */}
            <div className="flex flex-col lg:flex-row w-full items-center justify-between py-8 gap-10">
                {/* Left Section */}
                <div className="flex-1 max-w-xl text-center lg:text-left">
                    <h2 className="font-bold text-[#212529] text-3xl md:text-5xl lg:text-6xl leading-tight">
                        Project Management
                    </h2>
                    <p className="font-normal text-base md:text-lg leading-relaxed text-[#212529] mt-4">
                        Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                    </p>
                    <button className="flex justify-center items-center bg-[#4F9CF9] text-white rounded-lg mt-10 px-6 py-3 hover:bg-blue-600 transition duration-300">
                        Get Started
                        <Image src={arrow} width={14} height={14} alt="arrow" className="ml-2" />
                    </button>
                </div>

                {/* Right Section */}
                <div className="flex-1 max-w-2xl">
                    <Image 
                        src={img} 
                        width={748} 
                        height={547} 
                        alt="Project Management Image" 
                        className="object-cover w-full h-auto"
                    />
                </div>
            </div>

            {/* Second Card */}
            <div className="flex flex-col lg:flex-row-reverse w-full items-center justify-between py-8 gap-10">
                {/* Left Section */}
                <div className="flex-1 max-w-2xl">
                    <Image 
                        src={w} 
                        width={710} 
                        height={661} 
                        alt="Work Together Image" 
                        className="object-cover w-full h-auto text-[#A7CEFC]" 
                    />
                </div>

                {/* Right Section */}
                <div className="flex-1 max-w-xl text-center lg:text-left">
                    <h2 className="font-bold text-[#212529] text-3xl md:text-5xl lg:text-6xl leading-tight">
                        Work together
                    </h2>
                    <p className="font-normal text-base md:text-lg leading-relaxed text-[#212529] mt-4">
                        With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
                    </p>
                    <button className="flex justify-center items-center bg-[#4F9CF9] text-white rounded-lg mt-10 px-6 py-3 hover:bg-blue-600 transition duration-300">
                        Try it now
                        <Image src={arrow} width={14} height={14} alt="work" className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Project;
