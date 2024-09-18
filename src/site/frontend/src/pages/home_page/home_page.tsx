// import React from "react";
import Header from "../../components/header/header";
import AboutMe from "../../components/about_me/about_me";
import MySkils from "../../components/my_skils/my_skils";
import Footer from "../../components/footer/footer";

function HomePage() {
	return (
	<>
		<Header title_name="Sapelnikov" text="DevOps-engineer"/>
		<AboutMe />
		<MySkils />
		<Footer />
	</>
	);
}

export default HomePage;