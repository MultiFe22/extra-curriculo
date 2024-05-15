import { SvgProps } from "./svgInterface";

export const Divider: React.FC<SvgProps> = ({ className }) => {
    return (
        <svg className={`${className}`} width="375" height="1" viewBox="0 0 375 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1031 1H-185V0H1031V1Z" fill="#EAECF0"/>
        </svg>
    )
}

export default Divider;