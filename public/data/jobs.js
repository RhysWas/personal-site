/*
    Making an array of json objects for jobs worked. To be used in the experience section.
    Will be in the following order:
    company: Name of Company
    position: Position at Company
    link: Link to the Company Website
    start: Date of start in the format YYYY-MM-DD
    end: Date of end in YYYY-MM-DD or undefined for PRESENT
    summary: List of accomplishments formatted to a bulleted list
*/

const jobs = [
    {
        company: 'LSA Technology Services',
        position: 'Automation Specialist',
        link: 'https://lsa.umich.edu/technology-services',
        start: '2023-09-18',
        end: '2024-04-26',
        summary: [
            'Managed and created a Google Scripts Program that ingested and formatted computer data from two separate data sources to automate daily data entry tasks into a weekly cycle which resulted in updates to 3883 assets in 3 weeks of running.',
            'Automated one years worth of work, resulting in a standardized data set and reduction of daily tasks for 45 associates throughout the organization.', 
            'Documented all code relating to the project and presented the project proposal to company management for approval.',
        ],
    },
    {
        company: 'Pratt & Whitney',
        position: 'Digital Technology Intern',
        link: 'https://www.prattwhitney.com/',
        start: '2023-06-05',
        end: '2023-08-18',
        summary: [
            'Developed frontend side of an internal web app taking in data for a larger machine learning pipeline using Material UI, and ReactJS.',
            'Added features to improve workflow of the web app through new naming conventions, additionally created a new feature to take in bulk imports through an excel upload.',
            'Refactored and documented existing solution to improve maintainability over time and efficiency.',
        ],
    },
    {
        company: 'LSA Technology Services',
        position: 'Data Entry Specialist',
        link: 'https://lsa.umich.edu/technology-services',
        start: '2022-03-07',
        end: '2023-04-28',
        summary: [
            'Created a Java program utilizing a web based API to automate and speed up the clean up process of a database of 13,000 computing assets by 50%.',
            'Wrote full documentation for the Java formatting program including a detailed ReadME and separate internally published instructions for use.',
            'Developed a secondary script using hash maps in Java to find duplicate assets further cleaning the database by 10%.',
        ],
    },
    {
        company: 'Escanaba Municipal Marina',
        position: 'Dock Attendant',
        link: 'https://www.escanaba.org/marina',
        start: '2020-06-08',
        end: '2021-08-20',
        summary: [
            'Managed the marina over the weekends when the Harbor Master was off, to allow for normal marina functions without the Habor Master.',
            'Worked in a customer facing role to assign slips, refuel and pumpout boats, and make improvements to the docks to ensure a high quality experience for all customers.',
            'Grew the marina instagram, EscanabaMarina, from 50 followers to 280 to help reach new customers.',
        ],
    },
];

export default jobs;