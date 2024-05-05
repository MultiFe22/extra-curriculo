interface NavMenuButtonProps {
    className?: string;  // Optional string for Tailwind CSS classes
}


export const NavMenuButton: React.FC<NavMenuButtonProps> = ({ className }) => {
    return (

<svg className={`${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12H21M3 6H21M3 18H21" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


    )
}

export default NavMenuButton;