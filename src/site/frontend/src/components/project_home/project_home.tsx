import { useEffect, useState } from "react";
import "./project_home.css";


export default function ProjectHome() {
	const [project, setProjects] = useState([]);
	useEffect(() => {
		fetch('/json/project_foto.json')
		  .then(response => response.json())
		  .then(data => setProjects(data))
		  .catch(error => console.error('Error loading projects:', error));
	  }, []);

	return (
		<section className="project_home">
			<div className="container">
				<div className="project_home__wrapper">
					<div className="project_home__project">
						{project.slice(0, 3).map((project) => (
							<div key={project.id} className="project_home__project-item" style={{ backgroundImage: `url(${project.image})` }}>
								<h2 className="project_home__project-title">{project.title}</h2>
								<p className="project_home__project-tech-used">{project.tech_used}</p>
							</div>
						))}
					</div>
					<div className="project_home__button">
						<a href="#" className="project_home__button-item">Проекты</a>
						<a href="#" className="project_home__button-item">Связаться</a>
					</div>
				</div>
			</div>
		</section>
	)
}