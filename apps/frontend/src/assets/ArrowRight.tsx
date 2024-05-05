interface ArrowRightProps {
    className?: string;  // Optional string for Tailwind CSS classes
}

export const ArrowRight: React.FC<ArrowRightProps> = ({ className }) => {
    return (
        <svg className={`${className}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.16663 10.0001H15.8333M15.8333 10.0001L9.99996 4.16675M15.8333 10.0001L9.99996 15.8334" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>        
    )
}

export default ArrowRight;