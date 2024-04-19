interface ArrowUpRightProps {
    className?: string;  // Optional string for Tailwind CSS classes
}

export const ArrowUpRight: React.FC<ArrowUpRightProps> = ({ className }) => {
    return (
        <svg className={`${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 7H7M17 7V17" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    )
}

export default ArrowUpRight;