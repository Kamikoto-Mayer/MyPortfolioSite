// import React from "react";
import Header from "../../components/header/header";
import AboutMe from "../../components/about_me/about_me";
import MySkils from "../../components/my_skils/my_skils";
import ProjectHome from "../../components/project_home/project_home";
import Footer from "../../components/footer/footer";

function HomePage() {
	return (
	<>
		<Header title_name="Sapelnikov" text="DevOps-engineer"/>
		<AboutMe />
		<MySkils />
		<ProjectHome />
		<Footer />
	</>
	);
}

export default HomePage;