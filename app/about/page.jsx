import Image from 'next/image';
import Education from './components/education';
import Experience from './components/experience';
import Hobbies from './components/hobbies';
import Skills from './components/skills';

import Degree from '../../public/data/degrees';
import Jobs from '../../public/data/jobs';
import { skills, skillsColor } from '../../public/data/skills';
import FunFacts from '../../public/data/funfacts'
import FreeTime from '../../public/data/freetime';

export default function About() {
    return (
        <div className="bg-stone-200 min-h-screen px-8">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl text-center font-bold -mb-8">About</h1>
                <div className="items-center md:items-start">
                    <div className="w-96 m-auto flex items-center relative h-96 mb-4 md:mb-0">
                        {/* Image goes here */}
                        <Image 
                            src='personal-site/GradPhotoLongWays.jpg'
                            alt='About Photo'
                            fill
                            className='object-contain absolute mx-auto md:mx-0'
                            />
                    </div>
                    <div className="m-auto place-self-center md:pl-8">
                        <p className="text-gray-800 text-lg text-center mb-4">
                            Hi, I am Rhys Wastell, a passionate programmer, developer based in Ann Arbor. I recently graduated from the University of Michigan, and am looking for full time employment as a full stack developer.
                        </p>
                    </div>
                </div>
                {/* Add Sections below top margin of 8 */}
                <div className="mt-8">
                    <Experience data={Jobs}/>
                </div>
                <div className='mt-8'>
                    <Education data={Degree}/>
                </div>
                <div className='mt-8'>
                    <Skills skills={skills} colors={skillsColor} />
                </div>
                <div className='mt-8'>
                    <Hobbies freetimes={FreeTime} funfacts={FunFacts}/>
                </div>
            </div>
        </div>
    )
}