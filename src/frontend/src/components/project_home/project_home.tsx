import { useEffect, useState } from "react";
import "./project_home.css";
import { NavLink } from "react-router-dom";

interface ProjectItem {
	id: number;
	image: string;
	title: string;
	tech_used: string;
  }

interface Project {
	volume: number;
}

export default function ProjectHome(props: Project) {
	const [project, setProjects] = useState<ProjectItem[]>([]);
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
						{props.volume > 3 ? (
							project.map((project) => (
								<div key={project.id} className={`project_home__project-item project_home__project-item-${project.id}`} style={{ backgroundImage: `url(${project.image})` }}>
									<h2 className="project_home__project-title">{project.title}</h2>
									<p className="project_home__project-tech-used">{project.tech_used}</p>
								</div>
							))
						) : (project.slice(0, 3).map((project) => (
							<div key={project.id} className={`project_home__project-item project_home__project-item-${project.id}`} style={{ backgroundImage: `url(${project.image})` }}>
								<h2 className="project_home__project-title">{project.title}</h2>
								<p className="project_home__project-tech-used">{project.tech_used}</p>
							</div>
						)))}
					</div>
					<div className="project_home__button">
						{props.volume > 3 ? (
							<NavLink to="/contacts" className="project_home__button-item" onClick={() => window.scrollTo(0, 0)}>Связаться</NavLink>
						) : (
							<>
							<NavLink to="/projects" className="project_home__button-item" onClick={() => window.scrollTo(0, 0)}>Проекты</NavLink>
							<NavLink to="/contacts" className="project_home__button-item" onClick={() => window.scrollTo(0, 0)}>Связаться</NavLink>
						  </>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}