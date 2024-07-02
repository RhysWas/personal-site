'use client'

const ContactButton = () => {
    const handleClick = () => {
        window.open('mailto:rhyswastell@gmail.com')
    };

    return (
        <button onClick={handleClick} 
        className= 'mt-2 font-extrabold text-transparent text-lg md:text-3xl p-2 bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400'>
            Contact
        </button>
    )
};

export default ContactButton;