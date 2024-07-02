// import Image from 'next/image';
import './globals.css';
import ContactButton from './components/contactbutton';

export default function Home() {
  const firstName = 'Rhys';
  const lastName = 'Wastell';
  const description = 'Full Stack Developer | Process Automator | Software Engineer';
  
  return (
    <div className="gradient-radial bg-stone-200 min-h-screen flex items-center justify-center">
      <div className="w-2/5 md:w-2/3 p-8 text-center  border-double border-orange-400 border-8">
        <div className="text-3xl md:text-9xl text-center md:text-left font-extrabold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-cyan-400">
            {firstName}
          </span>
        </div>
        <div className="text-3xl md:text-9xl text-center md:text-left font-extrabold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-orange-400">
            {lastName}
          </span>
        </div>
        <p className="text-gray-700 text-base md:text-2xl mb-6">{description}</p>
        <p className="text-gray-600 text-sm md:text-base">Welcome to my portfolio website. I am passionate about creating innovative web solutions.</p>
        {/* TODO: Add in a contact button here */}
        <ContactButton />
      </div>
    </div>
  );
}
