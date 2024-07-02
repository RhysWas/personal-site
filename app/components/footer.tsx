import Link from "next/link";
import Image from "next/image";
import "../globals.css";

export default function Footer () {
    return (
        <footer className="w-full justify-start bg-stone-200 border-t border-gray-400">
            <div className="flex justify-between content-center p-2">
                <p className="text-xs text-gray-500"> Rhys Wastell - Portfolio Site </p>
                <div className="flex items-end space-x-2 pb-2">
                    <Link href='https://www.linkedin.com/in/rhys-wastell/' className='hover:font-bold flex justify-between gap-1'>
                        <Image src='./personal-site/linkedin-icon.svg' alt='Linkedin Icon' width={16} height={16} className='fill-gray-500'/>
                        <p className="text-xs text-gray-500">
                            LinkedIn
                        </p>
                    </Link>
                    <Link href='https://github.com/RhysWas' className='hover:font-bold flex justify-between gap-1'>
                        <Image src='./personal-site/github-icon.svg' alt='Github Icon' width={16} height={16}/>
                        <p className="text-xs text-gray-500">
                            GitHub
                        </p>
                    </Link>
                </div>
            </div>
        </footer>
    )
}