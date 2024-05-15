import { SvgProps } from "./svgInterface";

export const Trophy: React.FC<SvgProps> = ({ className }) => {
    return (
        <svg className={`${className}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1098_3689)">
                <path d="M10 12.5001C7.2386 12.5001 5.00002 10.2615 5.00002 7.50008V2.87045C5.00002 2.52558 5.00002 2.35314 5.05028 2.21506C5.13453 1.98359 5.31687 1.80125 5.54834 1.717C5.68641 1.66675 5.85885 1.66675 6.20372 1.66675H13.7963C14.1412 1.66675 14.3136 1.66675 14.4517 1.717C14.6832 1.80125 14.8655 1.98359 14.9498 2.21506C15 2.35314 15 2.52558 15 2.87045V7.50008C15 10.2615 12.7614 12.5001 10 12.5001ZM10 12.5001V15.0001M15 3.33341H17.0834C17.4716 3.33341 17.6658 3.33341 17.8189 3.39685C18.0231 3.48143 18.1853 3.64366 18.2699 3.84785C18.3334 4.00099 18.3334 4.19513 18.3334 4.58341V5.00008C18.3334 5.77506 18.3334 6.16255 18.2482 6.48046C18.017 7.34319 17.3431 8.01706 16.4804 8.24823C16.1625 8.33342 15.775 8.33342 15 8.33342M5.00002 3.33341H2.91669C2.5284 3.33341 2.33426 3.33341 2.18112 3.39685C1.97693 3.48143 1.8147 3.64366 1.73012 3.84785C1.66669 4.00099 1.66669 4.19513 1.66669 4.58341V5.00008C1.66669 5.77506 1.66669 6.16255 1.75187 6.48046C1.98304 7.34319 2.65691 8.01706 3.51964 8.24823C3.83756 8.33342 4.22504 8.33342 5.00002 8.33342M6.20372 18.3334H13.7963C14.0009 18.3334 14.1667 18.1676 14.1667 17.963C14.1667 16.3266 12.8401 15.0001 11.2037 15.0001H8.79632C7.15992 15.0001 5.83335 16.3266 5.83335 17.963C5.83335 18.1676 5.99917 18.3334 6.20372 18.3334Z" stroke={className ? undefined : "#344054"} stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1098_3689">
                <rect width="20" height="20" fill="white"/>
            </clipPath>
        </defs>
</svg>

    )
}

export default Trophy;