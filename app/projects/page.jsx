import ProjectCard from './components/ProjectCard';
import ProjectsList from '../../public/data/projects';

const Projects = () => {
    // Make a custom comparator to sort fist on year then on title
    const comparator = (a, b) => {
        // Want most recent then alphabetic order
        if(a.year === b.year) {
            if(a.title < b.title) return -1;
            return 1;
        }
        if(a.year > b.year) return -1;
        return 1;
    };

    // Seperating each project based on the category field
    // Leaves a json object sect -> sect[category] = proj
    const getCategories = ProjectsList.reduce((sect, proj) => {
        const { category } = proj;

        if(!sect[category]){
            sect[category] = [];
        }
        sect[category].push(proj);
        return sect;
    }, {});    

    Object.keys(getCategories).forEach(category => {
        getCategories[category].sort(comparator);
    });


    return (
        <div className="container bg-stone-200 mx-auto py-8">
            <h1 className="text-4xl text-center font-bold">Projects</h1>
            <div>
                {/* In order for ProjectCard to render, it needs to be called in the return of page */}
                {Object.keys(getCategories).map(category => (
                    <div key={category} className='my-6'>
                        <div>
                            <h1 className='text-2xl ml-4 decoration-1 italic underline underline-offset-2 mb-2'>{category}</h1>
                            <div className='md:flex md:flex-wrap justify-center sm:justify-start mx-4 sm:gap-4 sm:gap-x-12 sm:ml-4'>
                                {getCategories[category].map(proj =>(
                                    <ProjectCard data={proj} key={proj.title}/>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Projects;