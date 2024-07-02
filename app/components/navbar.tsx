import Link from "next/link";
import Image from "next/image";

import "../globals.css";

export default function Navbar(){
    return (
        <nav className="w-full fixed justify-start border-b border-gray-200 bg-white h-14 z-50 top-0">
            <div className="flex justify-between content-center p-2">
                <Image src='/personal-site/images/navbar.png' width={35} height={35} alt="Logo for nav bar" className="flex items-start"/>
                <div className="flex items-end space-x-2 pb-2">
                    <Link href="/" className="hover:font-bold">
                        Home
                    </Link>
                    <Link href="/about" className="hover:font-bold">
                        About
                    </Link>
                    <Link href="/projects" className="hover:font-bold">
                        Projects
                    </Link>
                </div>
            </div>
        </nav>
    )
}