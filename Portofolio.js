const projectList = [
    {
        title: "Data Penduduk Management System",
        description: "Java-based system for managing resident data efficiently.",
        technologies: ["Java", "HeidiSQL"],
    },
    {
        title: "Transaksi Kasir",
        description: "Cash transaction app using Java for easy checkout processes.",
        technologies: ["Java"],
    },
    {
        title: "Warehouse Management",
        description: "Manages stock and distribution for farmers and distributors.",
        technologies: ["React js", "Sweet Alert", "Fused Location Provider", "Express js", "Mongo DB", "Jetpack Compose"],
    },
    {
        title: "Padi Disease Detection",
        description: "Aids farmers in detecting diseases in rice crops in West Sulawesi.",
        technologies: ["JavaScript", "React.js", "Tailwind CSS", "Mongo DB", "Express js"],
    },
];

function ProjectCard({ title, description, technologies }) {
    return (
        <div className="col-md-6 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><strong>Technologies:</strong> {technologies.join(", ")}</p>
                </div>
            </div>
        </div>
    );
}

function Portfolio() {
    return (
        <div className="row">
            {projectList.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                />
            ))}
        </div>
    );
}

ReactDOM.render(<Portfolio />, document.getElementById("project-cards"));
