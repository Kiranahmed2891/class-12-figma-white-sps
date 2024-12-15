import arrow from '@/app/assets/arrow.png';
import Image from 'next/image';

const Work = () => {
  return (
    <div className="flex justify-center items-center w-full bg-[#043873] py-10 px-4 md:py-[140px] md:px-[220px]">
      <div className="flex flex-col justify-center items-center max-w-6xl text-center gap-6">
        <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-[70px] leading-tight md:leading-[87.14px] tracking-[-2%]">
          Your work, everywhere you are
        </h1>
        <p className="text-white text-base md:text-lg lg:text-[18px] font-normal tracking-[-2%] leading-6 md:leading-[30px]">
          Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
        </p>
        <button className="flex justify-center items-center bg-[#4F9CF9] text-white rounded-lg px-6 py-3 md:px-10 md:py-4 mt-6 md:mt-10 text-sm md:text-base lg:text-lg">
          Try it now
          <Image src={arrow} width={14} height={14} alt="work" className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Work;

