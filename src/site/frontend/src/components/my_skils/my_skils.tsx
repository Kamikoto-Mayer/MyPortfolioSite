import "./my_skils.css"


export default function MySkils() {
	return(
		<section className="my_skils">
			<div className="container my_skils__container">
				<div className="my_skils__wrapper">
					<div className="my_skils__title">
						<h2>Мои навыки</h2>
					</div>
					<div className="my_skils__icon">
						<ul className="my_skilst__list">
							<li className="my_skils__item"><img src="/img/python.svg" alt="python" /> Python</li>
							<li className="my_skils__item"><img src="/img/docker.svg" alt="docker" /> Docker</li>
							<li className="my_skils__item"><img src="/img/sql.svg" alt="SQL" /> SQL</li>
							<li className="my_skils__item"><img src="/img/linux.svg" alt="linux" /> Linux</li>
							<li className="my_skils__item"><img src="/img/postgresql.svg" alt="postgresql" /> PostgreSQL</li>
							<li className="my_skils__item"><img src="/img/nginx.svg" alt="nginx" /> Nginx</li>
							<li className="my_skils__item"><img src="/img/kubernetes.svg" alt="kubernetes" /> Kubernetes</li>
							<li className="my_skils__item"><img src="/img/grafana.svg" alt="grafana" /> Grafana</li>
							<li className="my_skils__item"><img src="/img/git.svg" alt="git" /> Git</li>
							<li className="my_skils__item"><img src="/img/ci-cd.svg" alt="ci-cd" /> CI/CD</li>
							<li className="my_skils__item"><img src="/img/bach.svg" alt="bash" /> Bash</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}