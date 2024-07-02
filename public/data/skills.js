/* 
    List to hold skills, each skill will be a json object with the following properties:
    1. Name - name of skill (string)
    2. Type - Category of skill (string)
*/
const skills = [
    {
        name: 'JavaScript',
        type: 'language',
    },
    {
        name: 'Python',
        type: 'language',
    },
    {
        name: 'C',
        type: 'language',
    },
    {
        name: 'C++',
        type: 'language',
    },
    {
        name: 'Java',
        type: 'language',
    },
    {
        name: 'SQL',
        type: 'language',
    },
    {
        name: 'NoSQL',
        type: 'database',
    },
    {
        name: 'MongoDB',
        type: 'database',
    },
    {
        name: 'MySQL',
        type: 'database',
    },
    {
        name: 'Maven',
        type: 'framework',
    },
    {
        name: 'Flask',
        type: 'framework',
    },
    {
        name: 'HTML',
        type: 'language',
    },
    {
        name: "CSS",
        type: 'language',
    },
    {
        name: 'ReactJS',
        type: 'framework',
    },
    {
        name: 'NodeJS',
        type: 'framework',
    },
    {
        name: '.Net',
        type: 'framework',
    },
    {
        name: 'Material UI',
        type: 'framework',
    },
    {
        name: 'Tailwind CSS',
        type: 'framework',
    },
    {
        name: 'NextJS',
        type: 'framework',
    },
    {
        name: 'DBT',
        type: 'database',
    },
    {
        name: 'Git',
        type: 'tool',
    },
    {
        name: 'Jira',
        type: 'tool',
    },
    {
        name: 'Docker',
        type: 'tool',
    },
    {
        name: 'AWS',
        type: 'cloud',
    },
    {
        name: 'Azure',
        type: 'cloud',
    },
    {
        name: 'Typescript',
        type: 'language',
    },
    {
        name: 'C#',
        type: 'language',
    },
    {
        name: 'Microsoft Excel',
        type: 'tool',
    },
];

// Make a colors list for color coding on type
// Blue - language, Green - framework, tool -orange, purple - database
const skillsColor = [
    {
        color: '#22d3ee',
        type: 'language'
    },
    {
        color: '#fb923c',
        type: 'tool',
    },
    {
        color: '#4ade80',
        type: 'framework',
    },
    {
        color: '#c084fc',
        type: 'database'
    },
    {
        color: '#ffffff',
        type: 'cloud',
    },
];

export { skills, skillsColor };