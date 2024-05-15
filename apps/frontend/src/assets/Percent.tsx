import { SvgProps } from "./svgInterface"

const Percent: React.FC<SvgProps> = ({ className }) => {
    return (
        <svg className={`${className}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8334 4.16669L4.16675 15.8334M6.25008 5.41669C6.25008 5.87692 5.87699 6.25002 5.41675 6.25002C4.95651 6.25002 4.58341 5.87692 4.58341 5.41669C4.58341 4.95645 4.95651 4.58335 5.41675 4.58335C5.87699 4.58335 6.25008 4.95645 6.25008 5.41669ZM15.4167 14.5834C15.4167 15.0436 15.0437 15.4167 14.5834 15.4167C14.1232 15.4167 13.7501 15.0436 13.7501 14.5834C13.7501 14.1231 14.1232 13.75 14.5834 13.75C15.0437 13.75 15.4167 14.1231 15.4167 14.5834Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default Percent;