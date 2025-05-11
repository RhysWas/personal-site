import ProjectCard from "./components/ProjectCard";
import ProjectsList from "../../public/data/projects";

const Projects = () => {
  const comparator = (a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      return 1;
    }
    if (a.year > b.year) return -1;
    return 1;
  };

  const getCategories = ProjectsList.reduce((sect, proj) => {
    const { category } = proj;

    if (!sect[category]) {
      sect[category] = [];
    }
    sect[category].push(proj);
    return sect;
  }, {});

  Object.keys(getCategories).forEach((category) => {
    getCategories[category].sort(comparator);
  });

  return (
    <div className="bg-stone-200 min-h-screen px-2 md:px-8">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center font-bold">Projects</h1>
        <div>
          {Object.keys(getCategories).map((category) => (
            <div key={category} className="my-6">
              <div>
                <h1 className="text-2xl ml-4 decoration-1 italic underline underline-offset-2 mb-2">
                  {category}
                </h1>
                <div className="md:flex md:flex-wrap justify-center sm:justify-start mx-4 sm:gap-4 sm:gap-x-12 sm:ml-4">
                  {getCategories[category].map((proj) => (
                    <ProjectCard data={proj} key={proj.title} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
