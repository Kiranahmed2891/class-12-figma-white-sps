

// import Image from "next/image";

import CardOne from "./component/project";
import Footer from "./component/footer";
import HeroSection from "./component/hero";
import Navbar from "./component/Navbar";
import Project from "./component/project";
import Work from "./component/Card";
import OurSponser from "./component/Sponser";



export default function Home() {
	return (
		<div>
		<Navbar/>
    <HeroSection/>
    <Project/>
	<Work/>
	<br />
	<OurSponser/>
    <Footer/>
		</div>
	);
}
