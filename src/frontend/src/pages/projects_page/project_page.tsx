import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ProjectHome from "../../components/project_home/project_home";


export default function ProjectPage() {
	return (
		<>
			<Header title_name="Мои проекты" text="MADE WITH LOVE"/>
			<ProjectHome volume={4} />
			<Footer />
		</>
	)
}