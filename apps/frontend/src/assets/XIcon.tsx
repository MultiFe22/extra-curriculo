interface XIconProps {
    className?: string;  // Optional string for Tailwind CSS classes
}

export const XIcon: React.FC<XIconProps> = ({ className }) => {
    return (
        <svg className={`${className}`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3L3 9M3 3L9 9" stroke="#9E77ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default XIcon;