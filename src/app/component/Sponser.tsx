
import React from 'react';
import Image from 'next/image'; // Import the Image component

const OurSponser = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-center border border-gray-200 py-10 px-6">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-10 text-center">Our Sponsors</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
        <Image src="/Apple.png" alt="Apple" width={100} height={40} className="h-12 md:h-16 mx-auto" />
        <Image src="/microsoft.png" alt="Microsoft" width={100} height={40} className="h-12 md:h-16 mx-auto" />
        <Image src="/Slack.png" alt="Slack" width={100} height={40} className="h-12 md:h-16 mx-auto" />
        <Image src="/Google.png" alt="Google" width={100} height={40} className="h-12 md:h-16 mx-auto" />
      </div>
    </div>
  );
};

export default OurSponser;
