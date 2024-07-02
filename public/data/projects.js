/*
    Json holding the data for each project
    All projects will be held here (Personal, Academic, and Professional)
    Will loop through and sort based on category on the projects page
    Also include skills list to allow for sorting by different skills
    @Property {string} title = title of the project
    @Property {string} category = category of the project
    @Property {string} year = year of project completion (YYYY)
    @Property {string} desc = description of the project
    @Property {string | undefined} link = link to the project repo or no link if code is not available publicly
    @Property {string[]} skills = list of the skills used in the project
*/
const projects = [
    {
        title: 'File Sorter',
        category: 'Personal',
        year: '2024',
        desc: 'Script that runs through downloads folder and sorts files based on file type, and moves duplicate files to the recycling bin.',
        link: 'https://github.com/RhysWas/file-sorter',
        skills: [
            'python',
        ],
    },
    {
        title: 'Insta 485',
        category: 'Academic',
        year: '2022',
        desc: 'Built a clone of instagram to include profiles, likes, comments, and infinite scroll features.',
        skills: [
            'python', 'flask', 'javascript', 'css', 'ReactJs', 'SQL',
        ],
    },
    {
        title: 'Asset Tracker Automater',
        category: 'Professional',
        year: '2024',
        desc: 'Automation script used to format and transfer data from google spreadsheet trackers to the asset tracker web app used.',
        skills: [
            'javascript', 'project-management', 'documentation',
        ],
    },
    {
        title: 'Stock Trader',
        category: 'Academic',
        year: '2022',
        desc: 'Utilized inheritance, templated containers, priority queues, and interface programming to determine when the best time to buy and sell stocks.',
        skills: [
            'C++', 'priority-queues', 'inheritance',
        ],
    },
    {
        title: 'Silly QL',
        category: 'Academic',
        year: '2022',
        desc: 'Utilized hash maps to create a simplified version of SQL with find, insert, and join commands.',
        skills: [
            'C++', 'hash-tables', 'BST' ,
        ],
    },
    {
        title: 'Map Reduce',
        category: 'Academic',
        year: '2022',
        desc: 'Created a map reduce program to use different threads to mimic a distributed system in order to count words within a text file.',
        skills: [
            'python', 'distributed-computing', 'mr-pipeline',
        ],
    },
    {
        title: 'Page Ranker',
        category: 'Academic',
        year: '2022',
        desc: 'Using a web crawler to scan pages, api to sort words, and hadoop to to implement the page rank algorithm to build a mock search engine.',
        skills: [
            'python', 'hadoop', 'rest-api',
        ],
    },
    {
        title: 'Assembler',
        category: 'Academic',
        year: '2022',
        desc: 'Made an assembler and simulator for turning code from a simplified assembly language based on ARMx86 commands into machine code.',
        skills: [
            'C', 'ARMx86', 'bit-math',
        ]
    },
    {
        title: 'Chess Simulator',
        category: 'Academic',
        year: '2023',
        desc: 'Built an agent to play chess against other agents or a user player with the optimal moves.',
        skills: [
            'python', 'tensorflow', 'min-max',
        ]
    },
    {
        title: 'Computer Forensics',
        category: 'Academic',
        year: '2023',
        desc: 'Used Autopsy and Ghidra to investigate a suspect machine, then followed clues to trace activity through suspect websites.',
        skills: [
            'XSS', 'SQL-injection', 'buffer-overflow', 'autopsy', 'length-extension',
        ],
    },
    {
        title: 'FakeBook JDBC',
        category: 'Academic',
        year: '2024',
        desc: 'Mock FaceBook Java DataBase Management system for querying and sorting data from the created database in a time efficient manner.',
        skills: [
            'Java', 'SQL', 'ER-Diagram'
        ],
    },
    {
        title: 'MangoDB',
        category: 'Academic',
        year: '2024',
        desc: 'Created queries using MongoDB to find specified information in a json format and sorted to return data in a more useful state.',
        skills: [
            'MongoDB', 'NoSQL', 'JSON',
        ],
    },
    {
        title: 'Grace Hash Join',
        category: 'Academic',
        year: '2024',
        desc: 'Implemented the two stages, probe and partition, of the Grace Hash Join algorithm in C++.',
        skills: [
            'C++', 'join-algorithm',
        ],
    },
    {
        title: 'Inner City Breakout',
        category: 'Academic',
        year: '2017',
        desc: 'First ever coding project completed, worked with a team of 9 to build a flash game style escape game.',
        link: 'https://studio.code.org/projects/applab/DeHM09w5iecLSIdOjQqwtmNfwbWLrY3fUPeq6VtVMA8',
        skills: [
            'javascript', 'teamwork', 
        ],
    },
    {
        title: 'Asset Formatter',
        category: 'Professional',
        year: '2023',
        desc: 'Java program utilizing REST API calls to gather data from asset tracker format the data then update the tracker, spits out a report of assets updated.',
        skills: [
            'Java', 'REST-API', 'documentation',
        ],
    },
    {
        title: 'Dupe Checker',
        category: 'Professional',
        year: '2023',
        desc: 'Java program which scanned the web tracker of computer assets to find potential duplicates based on MAC addresses.',
        skills: [
            'Java', 'hash-map', 'REST-API',
        ],
    },
    {
        title: 'Project OACIS',
        category: 'Professional',
        year: '2023',
        desc: 'Built data in take portal for a larger machine learning pipeline, making business recomendations based on the data within the pipeline.',
        skills: [
            'ReactJS', '.NET', 'MUI', 'C#',
        ],
    },
];

export default projects;